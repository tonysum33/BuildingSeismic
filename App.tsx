import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label, Legend, ReferenceArea, ReferenceDot } from 'recharts';
import { Settings, Printer, Building2, MapPin, FileText } from 'lucide-react';
import { SEISMIC_DATA, getFa, getFv, getNearFaultSsM, getNearFaultS1D, getNearFaultSsD, getNearFaultS1M } from './seismicData';
import { SiteClass, StructureType, CalculationResult, ChartPoint, SeismicZoneData } from './types';
import { CalculationReport } from './CalculationReport';

const App: React.FC = () => {
  // --- State ---
  const [selectedCity, setSelectedCity] = useState<string>('新竹縣');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('竹北市');
  const [isManualInput, setIsManualInput] = useState<boolean>(false);
  const [manualSsD, setManualSsD] = useState<number>(0.80);
  const [manualS1D, setManualS1D] = useState<number>(0.45);
  const [manualSsM, setManualSsM] = useState<number>(1.00);
  const [manualS1M, setManualS1M] = useState<number>(0.55);
  const [manualFault, setManualFault] = useState<string>('');
  const [manualFaultDistance, setManualFaultDistance] = useState<number | ''>('');
  const [baseSsD, setBaseSsD] = useState<number>(0.80);
  const [baseS1D, setBaseS1D] = useState<number>(0.45);
  const [isTaipeiBasin, setIsTaipeiBasin] = useState<boolean>(false);
  
  // Near-fault calculated SsM
  const autoSsM = useMemo(() => {
    if (manualFault && manualFaultDistance !== '') {
      return getNearFaultSsM(manualFault, manualFaultDistance as number, selectedCity, selectedDistrict);
    }
    return null;
  }, [manualFault, manualFaultDistance, selectedCity, selectedDistrict]);

  // Near-fault calculated S1D
  const autoS1D = useMemo(() => {
    if (manualFault && manualFaultDistance !== '') {
      return getNearFaultS1D(manualFault, manualFaultDistance as number, selectedCity, selectedDistrict);
    }
    return null;
  }, [manualFault, manualFaultDistance, selectedCity, selectedDistrict]);

  // Near-fault calculated SsD
  const autoSsD = useMemo(() => {
    if (manualFault && manualFaultDistance !== '') {
      return getNearFaultSsD(manualFault, manualFaultDistance as number, selectedCity, selectedDistrict);
    }
    return null;
  }, [manualFault, manualFaultDistance, selectedCity, selectedDistrict]);

  // Near-fault calculated S1M
  const autoS1M = useMemo(() => {
    if (manualFault && manualFaultDistance !== '') {
      return getNearFaultS1M(manualFault, manualFaultDistance as number, selectedCity, selectedDistrict);
    }
    return null;
  }, [manualFault, manualFaultDistance, selectedCity, selectedDistrict]);

  // Sync manual inputs with selected location
  useEffect(() => {
    const zone = SEISMIC_DATA.find(d => d.city === selectedCity && d.district === selectedDistrict);
    if (zone) {
      setManualSsD(zone.SsD);
      setManualS1D(zone.S1D);
      setManualSsM(zone.SsM);
      setManualS1M(zone.S1M);
      setManualFault(zone.fault || '');
      // Base values (for V*) generally match SsD/S1D from the table without near-fault adjustment
      // Assuming SEISMIC_DATA contains table 2-1 values.
      setBaseSsD(zone.SsD);
      setBaseS1D(zone.S1D);
      
      if (selectedCity === '臺北市') {
        setIsTaipeiBasin(true);
      } else {
        setIsTaipeiBasin(false);
      }
    }
  }, [selectedCity, selectedDistrict]);

  // Apply autoSsM if available
  useEffect(() => {
    if (autoSsM !== null && !isManualInput) {
      setManualSsM(autoSsM);
    }
  }, [autoSsM, isManualInput]);

  // Apply autoS1D if available
  useEffect(() => {
    if (autoS1D !== null && !isManualInput) {
      setManualS1D(autoS1D);
    }
  }, [autoS1D, isManualInput]);

  // Apply autoSsD if available
  useEffect(() => {
    if (autoSsD !== null && !isManualInput) {
      setManualSsD(autoSsD);
    }
  }, [autoSsD, isManualInput]);

  // Apply autoS1M if available
  useEffect(() => {
    if (autoS1M !== null && !isManualInput) {
      setManualS1M(autoS1M);
    }
  }, [autoS1M, isManualInput]);

  const [usageFactor, setUsageFactor] = useState<number>(1.25); // I
  const [alphaY, setAlphaY] = useState<number>(1.0); 
  const [rValue, setRValue] = useState<number>(4.0); // R
  const [height, setHeight] = useState<number>(17.5); 
  const [dynamicPeriod, setDynamicPeriod] = useState<number | ''>('');
  const [siteClass, setSiteClass] = useState<SiteClass>(SiteClass.MEDIUM);
  const [structureType, setStructureType] = useState<StructureType>(StructureType.STEEL);
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [showReport, setShowReport] = useState(false);

  // --- Derived Data ---
  const availableDistricts = useMemo(() => {
    return SEISMIC_DATA.filter(d => d.city === selectedCity).map(d => d.district);
  }, [selectedCity]);

  const currentZone = useMemo(() => {
    return {
      city: selectedCity,
      district: selectedDistrict,
      SsD: manualSsD,
      S1D: manualS1D,
      SsM: manualSsM,
      S1M: manualS1M,
      fault: manualFault || undefined,
      faultDistance: manualFaultDistance !== '' ? manualFaultDistance : undefined
    } as SeismicZoneData;
  }, [selectedCity, selectedDistrict, manualSsD, manualS1D, manualSsM, manualS1M, manualFault]);

  // --- Logic ---
  const calculate = () => {
    if (!currentZone) return;

    // 1. 基本振動週期 T (Empirical Ta & Design T)
    let coeff = 0.050;
    if (structureType === StructureType.STEEL) coeff = 0.085;
    else if (structureType === StructureType.RC) coeff = 0.070;
    
    const Ta = coeff * Math.pow(height, 0.75);
    
    // 規範限制：T 不得超過 1.4 * Ta (一般情況)
    const T_limit = 1.4 * Ta;
    const T = dynamicPeriod !== '' ? Math.min(dynamicPeriod, T_limit) : Ta;

    // 2. 容許韌性 Ra
    // 臺北盆地除外，其餘地區 Ra = 1 + (R-1)/1.5
    // 臺北盆地 Ra = 1 + (R-1)/2.0
    const divisor = (isManualInput ? isTaipeiBasin : selectedCity === '臺北市') ? 2.0 : 1.5;
    const Ra = 1 + (rValue - 1) / divisor;

    // 3. 地盤放大係數 (Fa, Fv)
    const Fa_D = getFa(currentZone.SsD, siteClass);
    const Fv_D = getFv(currentZone.S1D, siteClass);
    const Fa_M = getFa(currentZone.SsM, siteClass);
    const Fv_M = getFv(currentZone.S1M, siteClass);

    // 4. 譜加速度參數
    const Sds = currentZone.SsD * Fa_D;
    const Sd1 = currentZone.S1D * Fv_D;
    const Sms = currentZone.SsM * Fa_M;
    const Sm1 = currentZone.S1M * Fv_M;

    // 5. 轉角週期 T0
    const T0 = Sd1 / Sds;
    const T0M = Sm1 / Sms;

    // 6. 計算譜加速度 Sad, SaM
    const getSaAtT = (t: number, ss: number, s1: number) => {
      const curT0 = s1 / ss;
      if (t <= 0.2 * curT0) return ss * (0.4 + 3 * t / curT0);
      if (t <= curT0) return ss;
      if (t <= 2.5 * curT0) return s1 / t;
      return 0.4 * ss;
    };

    const Sad = getSaAtT(T, Sds, Sd1);
    const SaM = getSaAtT(T, Sms, Sm1);

    // 7. 計算地震力折減係數 Fu, FuM
    const getFu = (t: number, t0: number, r: number) => {
      if (t >= t0) return r;
      if (t >= 0.6 * t0) return Math.sqrt(2 * r - 1) + (r - Math.sqrt(2 * r - 1)) * (t - 0.6 * t0) / (0.4 * t0);
      if (t >= 0.2 * t0) return Math.sqrt(2 * r - 1);
      return 1 + (Math.sqrt(2 * r - 1) - 1) * t / (0.2 * t0);
    };

    const Fu = getFu(T, T0, Ra);
    const FuM = getFu(T, T0M, rValue);

    // 8. 修正譜加速度 (Sa/Fu)m
    const getModifiedRatio = (ratio: number) => {
      if (ratio <= 0.3) return ratio;
      if (ratio >= 0.8) return 0.70 * ratio;
      return 0.52 * ratio + 0.144;
    };

    const ratioD = getModifiedRatio(Sad / Fu);
    const ratioM = getModifiedRatio(SaM / FuM);
    
    // 9. 中小地震
    // 依規範 2.10.1，不考慮近斷層效應，逕以表 2-1 之值計算
    const ssD_base = isManualInput ? baseSsD : currentZone.SsD;
    const s1D_base = isManualInput ? baseS1D : currentZone.S1D;
    
    const Fa_D_base = getFa(ssD_base, siteClass);
    const Fv_D_base = getFv(s1D_base, siteClass);
    const Sds_base = ssD_base * Fa_D_base;
    const Sd1_base = s1D_base * Fv_D_base;
    const T0_base = Sd1_base / Sds_base;
    const Sad_base = getSaAtT(T, Sds_base, Sd1_base);
    const Fu_base = getFu(T, T0_base, Ra);
    const ratioD_base = getModifiedRatio(Sad_base / Fu_base);
    
    const vStarDivisor = (isManualInput ? isTaipeiBasin : selectedCity === '臺北市') ? 3.5 : 4.2;
    const V_Star = (usageFactor * Fu_base / (vStarDivisor * alphaY)) * ratioD_base;

    // 10. 計算各項地震力
    const V_D = (usageFactor / (1.4 * alphaY)) * ratioD;
    const V_M = (usageFactor / (1.4 * alphaY)) * ratioM;
    const V_Design = Math.max(V_D, V_Star, V_M);

    // 11. 檢核參數
    const Cd = 0.6 * 1.4 * alphaY * Ra;
    const V_drift = (1.0 * Fu_base / 4.2) * ratioD_base;

    setResult({
      T, Ta, T0, T0M, Ra, Fa: Fa_D, Fv: Fv_D, FaM: Fa_M, FvM: Fv_M,
      Sds, Sd1, Sms, Sm1,
      Sad, SadM: SaM,
      Fu, FuM,
      ratioD, ratioD_base, ratioM,
      V_D, V_Star, V_M, V_Design,
      SsD: currentZone.SsD,
      S1D: currentZone.S1D,
      SsD_base: ssD_base,
      S1D_base: s1D_base,
      SsM: currentZone.SsM,
      S1M: currentZone.S1M,
      Fa_base: Fa_D_base,
      Fv_base: Fv_D_base,
      T0_base: T0_base,
      Sad_base: Sad_base,
      Fu_base: Fu_base,
      Cd,
      V_drift
    });

    // 10. 產生反應譜曲線資料
    const points: ChartPoint[] = [];
    const maxT = Math.max(3.0, T + 1.0);
    const Sds_small = 0.4 * Sds_base;
    const Sd1_small = 0.4 * Sd1_base;

    const SaMAtT = getSaAtT(T, Sms, Sm1);
    const SaDesignAtT = getSaAtT(T, Sds, Sd1);
    const SaSmallAtT = getSaAtT(T, Sds_small, Sd1_small);

    for (let t = 0; t <= maxT; t += 0.05) {
      points.push({ 
        t: Number(t.toFixed(3)),
        sa_design: getSaAtT(t, Sds, Sd1),
        sa_mce: getSaAtT(t, Sms, Sm1),
        sa_small: getSaAtT(t, Sds_small, Sd1_small)
      });
    }
    
    // Add building T point explicitly
    points.push({
      t: Number(T.toFixed(3)),
      sa_design: SaDesignAtT,
      sa_mce: SaMAtT,
      sa_small: SaSmallAtT,
      isBuildingT: true
    });
    points.sort((a, b) => a.t - b.t);

    setChartData(points);
  };

  useEffect(() => {
    calculate();
  }, [selectedDistrict, selectedCity, usageFactor, alphaY, rValue, height, dynamicPeriod, siteClass, structureType, isManualInput, manualSsD, manualS1D, manualSsM, manualS1M, manualFault, manualFaultDistance, isTaipeiBasin, baseSsD, baseS1D]);


  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#1d1d1f] p-1.5 rounded-lg">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">台灣地震力計算</h1>
          </div>
          <button 
            onClick={() => setShowReport(true)}
            className="flex items-center gap-2 bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-all text-sm font-medium shadow-sm"
          >
            <FileText className="h-4 w-4" />
            輸出報告
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-white px-8 pt-8 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <h2 className="font-semibold text-[#1d1d1f]">工址與地盤參數</h2>
              </div>
              <div className="p-8 pt-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-gray-400 uppercase tracking-tighter z-10">縣市</label>
                    <select 
                      value={selectedCity}
                      onChange={(e) => {
                        setSelectedCity(e.target.value);
                        const firstDist = SEISMIC_DATA.find(d => d.city === e.target.value)?.district;
                        if (firstDist) setSelectedDistrict(firstDist);
                      }}
                      className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-4 font-semibold transition-all appearance-none cursor-pointer"
                    >
                      {Array.from(new Set(SEISMIC_DATA.map(d => d.city))).map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative group">
                    <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-gray-400 uppercase tracking-tighter z-10">鄉鎮市區</label>
                    <select 
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-4 font-semibold transition-all appearance-none cursor-pointer"
                    >
                      {availableDistricts.map(dist => (
                        <option key={dist} value={dist}>{dist}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">震區係數 (可手動修改)</h3>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="basinToggle"
                          checked={isTaipeiBasin}
                          onChange={(e) => setIsTaipeiBasin(e.target.checked)}
                          className="h-3 w-3 text-[#0066cc] focus:ring-[#0066cc] border-gray-300 rounded"
                        />
                        <label htmlFor="basinToggle" className="text-[10px] font-bold text-[#0066cc] cursor-pointer">
                          臺北盆地
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-between">
                          <span>設計 S<sub>S</sub><sup>D</sup></span>
                          {autoSsD !== null && (
                            <span className="text-[9px] text-[#ff3b30] lowercase font-bold tracking-tight">近斷層自動計算中</span>
                          )}
                        </label>
                        <input 
                          type="number" 
                          step="0.01"
                          value={manualSsD}
                          onChange={(e) => setManualSsD(Number(e.target.value))}
                          className={`w-full rounded-xl bg-[#f5f5f7] border-none focus:ring-2 focus:ring-[#0066cc] text-sm p-2 font-mono transition-all ${autoSsD !== null ? 'text-[#ff3b30] ring-1 ring-[#ff3b30]/20' : 'text-[#1d1d1f]'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-between">
                          <span>設計 S<sub>1</sub><sup>D</sup></span>
                          {autoS1D !== null && (
                            <span className="text-[9px] text-[#ff3b30] lowercase font-bold tracking-tight">近斷層自動計算中</span>
                          )}
                        </label>
                        <input 
                          type="number" 
                          step="0.01"
                          value={manualS1D}
                          onChange={(e) => setManualS1D(Number(e.target.value))}
                          className={`w-full rounded-xl bg-[#f5f5f7] border-none focus:ring-2 focus:ring-[#0066cc] text-sm p-2 font-mono transition-all ${autoS1D !== null ? 'text-[#ff3b30] ring-1 ring-[#ff3b30]/20' : 'text-[#1d1d1f]'}`}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-between">
                          <span>最大 S<sub>S</sub><sup>M</sup></span>
                          {autoSsM !== null && (
                            <span className="text-[9px] text-[#ff3b30] lowercase font-bold tracking-tight">近斷層自動計算中</span>
                          )}
                        </label>
                        <input 
                          type="number" 
                          step="0.01"
                          value={manualSsM}
                          onChange={(e) => setManualSsM(Number(e.target.value))}
                          className={`w-full rounded-xl bg-[#f5f5f7] border-none focus:ring-2 focus:ring-[#0066cc] text-sm p-2 font-mono transition-all ${autoSsM !== null ? 'text-[#ff3b30] ring-1 ring-[#ff3b30]/20' : 'text-[#1d1d1f]'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-between">
                          <span>最大 S<sub>1</sub><sup>M</sup></span>
                          {autoS1M !== null && (
                            <span className="text-[9px] text-[#ff3b30] lowercase font-bold tracking-tight">近斷層自動計算中</span>
                          )}
                        </label>
                        <input 
                          type="number" 
                          step="0.01"
                          value={manualS1M}
                          onChange={(e) => setManualS1M(Number(e.target.value))}
                          className={`w-full rounded-xl bg-[#f5f5f7] border-none focus:ring-2 focus:ring-[#0066cc] text-sm p-2 font-mono transition-all ${autoS1M !== null ? 'text-[#ff3b30] ring-1 ring-[#ff3b30]/20' : 'text-[#1d1d1f]'}`}
                        />
                      </div>
                    </div>

                    {(manualFault || manualFaultDistance !== '') && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">鄰近斷層 (選填)</label>
                            <input 
                              type="text" 
                              value={manualFault}
                              onChange={(e) => setManualFault(e.target.value)}
                              placeholder="自動載入或手動輸入"
                              className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] text-xs p-2 font-medium transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">斷層距離 (km)</label>
                            <input 
                              type="number" 
                              step="0.1"
                              value={manualFaultDistance}
                              onChange={(e) => setManualFaultDistance(e.target.value === '' ? '' : Number(e.target.value))}
                              placeholder="R (km)"
                              className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] text-xs p-2 font-mono transition-all"
                            />
                          </div>
                        </div>

                        <div className="bg-[#f5f5f7] p-4 rounded-xl border border-gray-100">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">中小地震基準 (V*)</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[9px] font-bold text-gray-500 mb-1 uppercase">基準 S<sub>S</sub><sup>D</sup></label>
                              <input 
                                type="number" 
                                step="0.01"
                                value={baseSsD}
                                onChange={(e) => setBaseSsD(Number(e.target.value))}
                                className="w-full rounded-lg bg-white text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] text-[10px] p-2 font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-bold text-gray-500 mb-1 uppercase">基準 S<sub>1</sub><sup>D</sup></label>
                              <input 
                                type="number" 
                                step="0.01"
                                value={baseS1D}
                                onChange={(e) => setBaseS1D(Number(e.target.value))}
                                className="w-full rounded-lg bg-white text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] text-[10px] p-2 font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">地盤種類</label>
                  <select 
                    value={siteClass}
                    onChange={(e) => setSiteClass(e.target.value as SiteClass)}
                    className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all"
                  >
                    <option value={SiteClass.HARD}>第一類地盤 (堅硬)</option>
                    <option value={SiteClass.MEDIUM}>第二類地盤 (普通)</option>
                    <option value={SiteClass.SOFT}>第三類地盤 (軟弱)</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-white px-8 pt-8 flex items-center gap-2">
                <Settings className="h-4 w-4 text-gray-400" />
                <h2 className="font-semibold text-[#1d1d1f]">結構系統參數</h2>
              </div>
              <div className="p-8 pt-6 space-y-5">
                 <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">結構系統</label>
                  <select 
                    value={structureType}
                    onChange={(e) => setStructureType(e.target.value as StructureType)}
                    className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all"
                  >
                    <option value={StructureType.STEEL}>鋼構造</option>
                    <option value={StructureType.RC}>RC / SRC / EBF</option>
                    <option value={StructureType.OTHER}>其他建築物</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">建築物高度 (H) [m]</label>
                  <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all" />
                  {result && (
                    <div className="mt-2 flex items-center gap-2">
                       <span className="text-[10px] font-bold text-white bg-blue-500 px-2 py-0.5 rounded-md">經驗週期</span>
                       <span className="text-sm font-bold text-[#1d1d1f]">T<sub>a</sub> = {result.Ta.toFixed(3)} s</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">動力分析基本振動週期 (T_dyn) [秒]</label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={dynamicPeriod} 
                    onChange={(e) => setDynamicPeriod(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder={`經驗值 Ta = ${ ((structureType === StructureType.STEEL ? 0.085 : structureType === StructureType.RC ? 0.070 : 0.050) * Math.pow(height, 0.75)).toFixed(3) }`}
                    className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all" 
                  />
                  {result && (
                    <div className="mt-2 flex items-center gap-2">
                       <span className="text-[10px] font-bold text-white bg-indigo-500 px-2 py-0.5 rounded-md">設計基本振動週期</span>
                       <span className="text-sm font-bold text-[#1d1d1f]">T = {result.T.toFixed(3)} s</span>
                    </div>
                  )}
                  <p className="mt-2 text-[10px] text-gray-400 font-medium tracking-tight">※ 若輸入則取 min(T_dyn, 1.4*Ta) 作為設計週期</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">用途係數 (I)</label>
                    <input type="number" step="0.25" value={usageFactor} onChange={(e) => setUsageFactor(Number(e.target.value))}
                      className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">起始降服放大係數 (αy)</label>
                    <input type="number" step="0.1" value={alphaY} onChange={(e) => setAlphaY(Number(e.target.value))}
                      className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">韌性容量 (R)</label>
                  <input type="number" step="0.1" value={rValue} onChange={(e) => setRValue(Number(e.target.value))}
                    className="w-full rounded-xl bg-[#f5f5f7] text-[#1d1d1f] border-none focus:ring-2 focus:ring-[#0066cc] sm:text-sm p-3 font-medium transition-all" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Results & Charts */}
          <div className="lg:col-span-8 space-y-6">
            {result && (
              <div className="space-y-6">
                {/* Three Components Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-8 rounded-3xl border transition-all ${result.V_Design === result.V_D ? 'bg-[#f5f5f7] border-gray-200' : 'bg-white border-gray-100'}`}>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">設計地震</div>
                    <div className={`text-4xl font-bold tracking-tight mb-4 ${result.V_Design === result.V_D ? 'text-[#0066cc]' : 'text-[#1d1d1f]'}`}>{result.V_D.toFixed(2)}</div>
                    <div className="text-[10px] text-gray-400 font-medium">避免中小地震產生降服</div>
                  </div>
                  
                  <div className={`p-8 rounded-3xl border transition-all ${result.V_Design === result.V_Star && result.V_Design !== result.V_D ? 'bg-[#f5f5f7] border-gray-200' : 'bg-white border-gray-100'}`}>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">中小地震</div>
                    <div className={`text-4xl font-bold tracking-tight mb-4 ${result.V_Design === result.V_Star && result.V_Design !== result.V_D ? 'text-[#0066cc]' : 'text-[#1d1d1f]'}`}>{result.V_Star.toFixed(2)}</div>
                    <div className="text-[10px] text-gray-400 font-medium">避免中小地震產生降服</div>
                  </div>

                  <div className={`p-8 rounded-3xl border transition-all ${result.V_Design === result.V_M && result.V_Design !== result.V_D && result.V_Design !== result.V_Star ? 'bg-[#f5f5f7] border-gray-200' : 'bg-white border-gray-100'}`}>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">最大地震</div>
                    <div className={`text-4xl font-bold tracking-tight mb-4 ${result.V_Design === result.V_M && result.V_Design !== result.V_D && result.V_Design !== result.V_Star ? 'text-[#0066cc]' : 'text-[#1d1d1f]'}`}>{result.V_M.toFixed(2)}</div>
                    <div className="text-[10px] text-gray-400 font-medium">避免最大地震產生崩塌</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-semibold text-[#1d1d1f] text-xl tracking-tight">地震反應譜比較圖</h3>
                <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff3b30] rounded-full"></div> 最大地震</div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#0066cc] rounded-full"></div> 設計地震</div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#34c759] rounded-full"></div> 中小地震</div>
                </div>
              </div>
              <div className="h-[400px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f7" vertical={false} />
                    <XAxis 
                      dataKey="t" 
                      type="number" 
                      domain={[0, 3]} 
                      ticks={[0, 0.75, 1.5, 2.25, 3]}
                      label={{ value: '週期 (秒)', position: 'insideBottom', offset: -10, fill: '#86868b', fontSize: 11, fontWeight: 500 }}
                      tick={{fill: '#86868b', fontSize: 11, fontWeight: 400}} 
                      axisLine={{ stroke: '#f5f5f7' }}
                      tickLine={false}
                    />
                    <YAxis 
                      domain={[0, 1.0]}
                      ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                      label={{ value: '譜加速度 Sa (g)', angle: -90, position: 'insideLeft', fill: '#86868b', fontSize: 11, fontWeight: 500, offset: 10 }}
                      tick={{fill: '#86868b', fontSize: 11, fontWeight: 400}}
                      axisLine={{ stroke: '#f5f5f7' }}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid #f5f5f7', color: '#1d1d1f', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
                      itemStyle={{ fontSize: '11px', fontWeight: '500' }}
                      labelStyle={{ color: '#86868b', marginBottom: '4px', fontSize: '10px' }}
                      labelFormatter={(label) => `週期: ${label}s`} 
                      formatter={(value: number) => [`${value.toFixed(2)} g`, '']}
                    />
                    
                    <Line name="最大地震" type="monotone" dataKey="sa_mce" stroke="#ff3b30" strokeWidth={3} dot={(props: any) => props.payload.isBuildingT ? <circle cx={props.cx} cy={props.cy} r={4} fill="#ff3b30" stroke="white" strokeWidth={2} /> : null} animationDuration={1000} />
                    <Line name="設計地震" type="monotone" dataKey="sa_design" stroke="#0066cc" strokeWidth={3} dot={(props: any) => props.payload.isBuildingT ? <circle cx={props.cx} cy={props.cy} r={4} fill="#0066cc" stroke="white" strokeWidth={2} /> : null} animationDuration={1000} />
                    <Line name="中小地震" type="monotone" dataKey="sa_small" stroke="#34c759" strokeWidth={3} dot={(props: any) => props.payload.isBuildingT ? <circle cx={props.cx} cy={props.cy} r={4} fill="#34c759" stroke="white" strokeWidth={2} /> : null} animationDuration={1000} />
                    
                    {result && (
                       <ReferenceLine x={result.T} stroke="#1d1d1f" strokeDasharray="4 4" strokeWidth={1}>
                          <Label 
                            value={`T = ${result.T.toFixed(2)}s`} 
                            position="top" 
                            fill="#1d1d1f" 
                            fontSize={11} 
                            fontWeight={600}
                            offset={10}
                          />
                       </ReferenceLine>
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {result && (
              <div className="bg-[#f5f5f7] rounded-3xl border border-gray-200 p-10">
                <h3 className="font-semibold text-[#1d1d1f] mb-10 flex items-center gap-3 text-xl tracking-tight">
                  <div className="w-1.5 h-6 bg-[#0066cc] rounded-full"></div>
                  詳細計算係數
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left pb-5 text-gray-400 font-bold uppercase tracking-widest text-sm">參數</th>
                        <th className="text-center pb-5 text-[#0066cc] font-bold uppercase tracking-widest text-sm">設計地震</th>
                        <th className="text-center pb-5 text-[#34c759] font-bold uppercase tracking-widest text-sm">中小地震 (基準)</th>
                        <th className="text-center pb-5 text-[#ff3b30] font-bold uppercase tracking-widest text-sm">最大地震</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">震區係數 S<sub>s</sub> / S<sub>1</sub></td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.SsD.toFixed(2)} / {result.S1D.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.SsD_base.toFixed(2)} / {result.S1D_base.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.SsM.toFixed(2)} / {result.S1M.toFixed(2)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">地盤放大 F<sub>a</sub> / F<sub>v</sub></td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Fa.toFixed(2)} / {result.Fv.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Fa_base.toFixed(2)} / {result.Fv_base.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.FaM.toFixed(2)} / {result.FvM.toFixed(2)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">短週期係數 S<sub>S</sub> (S<sub>DS</sub> / S<sub>MS</sub>)</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Sds.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{(result.SsD_base * result.Fa_base).toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Sms.toFixed(2)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">一秒週期係數 S<sub>1</sub> (S<sub>D1</sub> / S<sub>M1</sub>)</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Sd1.toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{(result.S1D_base * result.Fv_base).toFixed(2)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Sm1.toFixed(2)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">轉角週期 T<sub>0</sub> (s)</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.T0.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.T0_base.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.T0M.toFixed(3)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">折減係數 F<sub>u</sub></td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Fu.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.Fu_base.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.FuM.toFixed(3)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-5 font-medium text-gray-500">修正譜加速度比 (S<sub>a</sub>/F<sub>u</sub>)<sub>m</sub></td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.ratioD.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.ratioD_base.toFixed(3)}</td>
                        <td className="py-5 text-center font-bold text-[#1d1d1f]">{result.ratioM.toFixed(3)}</td>
                      </tr>
                      <tr className="group bg-[#f5f5f7]/50 hover:bg-[#f5f5f7] transition-all font-bold">
                        <td className="py-5 text-[#1d1d1f] font-semibold">橫力係數 V / W</td>
                        <td className="py-5 text-center text-[#0066cc]">{result.V_D.toFixed(3)}</td>
                        <td className="py-5 text-center text-[#34c759]">{result.V_Star.toFixed(3)}</td>
                        <td className="py-5 text-center text-[#ff3b30]">{result.V_M.toFixed(3)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all border-t-2 border-dashed border-gray-100">
                        <td className="py-4 font-bold text-blue-500">位移調整係數 C<sub>δ</sub></td>
                        <td colSpan={3} className="py-4 text-center font-bold text-blue-600 bg-blue-50/30 rounded-xl">{result.Cd.toFixed(3)}</td>
                      </tr>
                      <tr className="group hover:bg-white/50 transition-all">
                        <td className="py-4 font-bold text-emerald-500">位移檢核地震力 V<sub>drift</sub>/W</td>
                        <td colSpan={3} className="py-4 text-center font-bold text-emerald-600 bg-emerald-50/30 rounded-xl">{result.V_drift.toFixed(3)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {showReport && (
        <CalculationReport 
          inputs={{ usageFactor, alphaY, rValue, height, dynamicPeriod, siteClass, structureType, isManualInput, isTaipeiBasin } as any}
          zone={currentZone}
          result={result}
          onClose={() => setShowReport(false)}
        />
      )}
    </div>
  );
};

export default App;