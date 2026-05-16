import React from 'react';
import { Building2 } from 'lucide-react';
import { CalculationResult, SeismicZoneData, SiteClass, StructureType } from './types';

interface CalculationReportProps {
  inputs: {
    usageFactor: number;
    alphaY: number;
    rValue: number;
    height: number;
    dynamicPeriod: number | '';
    siteClass: SiteClass;
    structureType: StructureType;
    isManualInput?: boolean;
    isTaipeiBasin?: boolean;
  };
  zone: SeismicZoneData | undefined;
  result: CalculationResult | null;
  onClose: () => void;
}

export const CalculationReport: React.FC<CalculationReportProps> = ({ inputs, zone, result, onClose }) => {
  if (!result || !zone) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#f5f5f7]/90 backdrop-blur-xl flex items-center justify-center p-4 print:p-0 print:static print:bg-white">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl print:shadow-none print:max-w-none print:h-auto print:max-h-none border border-gray-100">
        
        {/* Header - Print Controls */}
        <div className="flex justify-between items-center p-8 border-b border-gray-50 no-print">
          <div className="flex items-center gap-3">
            <div className="bg-[#1d1d1f] p-1.5 rounded-lg">
              <Building2 className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">地震力計算書</h2>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => window.print()}
              className="px-6 py-2 bg-[#0066cc] text-white rounded-full hover:bg-[#0077ed] transition-all text-sm font-medium shadow-sm"
            >
              列印 / 另存 PDF
            </button>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-[#f5f5f7] text-[#1d1d1f] rounded-full hover:bg-[#e8e8ed] transition-all text-sm font-medium"
            >
              關閉
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-12 print:p-0 font-sans text-[#1d1d1f] space-y-12">
          
          <div className="text-center border-b border-gray-100 pb-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">建築物地震力設計計算書</h1>
            <p className="text-sm mt-3 text-gray-400 font-medium uppercase tracking-widest">依據建築物耐震設計規範及解說</p>
          </div>

          {/* Section 1: Project Information */}
          <section>
            <h3 className="text-lg font-semibold text-[#1d1d1f] border-b border-gray-50 mb-6 pb-2 tracking-tight">1. 工程與工址參數</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">地點</span> <span className="font-semibold">{zone.city} {zone.district} {zone.fault && <span className="text-[#ff3b30] ml-1">({zone.fault})</span>} {zone.faultDistance !== undefined && <span className="text-gray-500 ml-1">(R = {zone.faultDistance} km)</span>}</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">結構系統</span> <span className="font-semibold">{
                inputs.structureType === StructureType.STEEL ? '鋼構造' : 
                inputs.structureType === StructureType.RC ? 'RC / SRC / EBF' : 
                '其他建築物'
              }</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">建築高度 (H)</span> <span className="font-semibold">{inputs.height.toFixed(3)} m</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">地盤種類</span> <span className="font-semibold">{inputs.siteClass === '1' ? '第一類 (堅硬)' : inputs.siteClass === '2' ? '第二類 (普通)' : '第三類 (軟弱)'}</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">用途係數 (I)</span> <span className="font-semibold">{inputs.usageFactor.toFixed(3)}</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">韌性容量 (R)</span> <span className="font-semibold">{inputs.rValue.toFixed(3)}</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">容許韌性 (Ra)</span> <span className="font-semibold">{result.Ra.toFixed(3)}</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">起始降服放大係數 (αy)</span> <span className="font-semibold">{inputs.alphaY.toFixed(3)}</span></div>
            </div>
          </section>

          {/* Section 2: Seismic Zone Coefficients */}
          <section>
            <h3 className="text-lg font-semibold text-[#1d1d1f] border-b border-gray-50 mb-6 pb-2 tracking-tight">2. 震區與地盤係數</h3>
            <div className="overflow-hidden rounded-2xl border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#f5f5f7]">
                  <tr>
                    <th className="p-4 font-semibold text-gray-500 uppercase tracking-widest text-[10px]">參數</th>
                    <th className="p-4 text-center font-semibold text-[#0066cc] uppercase tracking-widest text-[10px]">設計地震</th>
                    <th className="p-4 text-center font-semibold text-[#34c759] uppercase tracking-widest text-[10px]">中小地震 (基準)</th>
                    <th className="p-4 text-center font-semibold text-[#ff3b30] uppercase tracking-widest text-[10px]">最大地震</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="p-4 font-medium text-gray-500">震區係數 S<sub>s</sub> / S<sub>1</sub></td>
                    <td className="p-4 text-center font-semibold">{result.SsD.toFixed(2)} / {result.S1D.toFixed(2)}</td>
                    <td className="p-4 text-center font-semibold">{result.SsD_base.toFixed(2)} / {result.S1D_base.toFixed(2)}</td>
                    <td className="p-4 text-center font-semibold">{result.SsM.toFixed(2)} / {result.S1M.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-500">地盤放大 F<sub>a</sub> / F<sub>v</sub></td>
                    <td className="p-4 text-center font-semibold">{result.Fa.toFixed(2)} / {result.Fv.toFixed(2)}</td>
                    <td className="p-4 text-center font-semibold">{result.Fa_base.toFixed(2)} / {result.Fv_base.toFixed(2)}</td>
                    <td className="p-4 text-center font-semibold">{result.FaM.toFixed(2)} / {result.FvM.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-[#f5f5f7]/30">
                    <td className="p-4 font-semibold text-[#1d1d1f]">短週期係數 S<sub>S</sub> (S<sub>DS</sub> / S<sub>MS</sub>)</td>
                    <td className="p-4 text-center font-bold text-[#0066cc]">{result.Sds.toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-[#34c759]">{(result.SsD_base * result.Fa_base).toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-[#ff3b30]">{result.Sms.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-[#f5f5f7]/30">
                    <td className="p-4 font-semibold text-[#1d1d1f]">一秒週期係數 S<sub>1</sub> (S<sub>D1</sub> / S<sub>M1</sub>)</td>
                    <td className="p-4 text-center font-bold text-[#0066cc]">{result.Sd1.toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-[#34c759]">{(result.S1D_base * result.Fv_base).toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-[#ff3b30]">{result.Sm1.toFixed(2)}</td>
                  </tr>
                  <tr className="bg-[#1d1d1f]/5 font-bold">
                    <td className="p-4 font-bold text-[#1d1d1f]">總橫力係數 V / W</td>
                    <td className="p-4 text-center text-[#0066cc] bg-[#0066cc]/5">{result.V_D.toFixed(3)}</td>
                    <td className="p-4 text-center text-[#34c759] bg-[#34c759]/5">{result.V_Star.toFixed(3)}</td>
                    <td className="p-4 text-center text-[#ff3b30] bg-[#ff3b30]/5">{result.V_M.toFixed(3)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Period & Spectrum */}
          <section>
            <h3 className="text-lg font-semibold text-[#1d1d1f] border-b border-gray-50 mb-6 pb-2 tracking-tight">3. 週期與反應譜係數</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">經驗週期 (T<sub>a</sub>)</span> <span className="font-semibold">{result.Ta.toFixed(3)} s</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">設計週期 (T)</span> <span className="font-semibold">{result.T.toFixed(3)} s</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">設計短週期 (S<sub>DS</sub>)</span> <span className="font-semibold">{result.Sds.toFixed(3)} g</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">設計一秒週期 (S<sub>D1</sub>)</span> <span className="font-semibold">{result.Sd1.toFixed(3)} g</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">最大地震短週期 (S<sub>MS</sub>)</span> <span className="font-semibold">{result.Sms.toFixed(3)} g</span></div>
              <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400 font-medium">最大地震一秒週期 (S<sub>M1</sub>)</span> <span className="font-semibold">{result.Sm1.toFixed(3)} g</span></div>
            </div>
          </section>

          {/* Section 4: Design Earthquake */}
          <section className="bg-[#f5f5f7]/50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6 tracking-tight">4. 設計地震 (Design Earthquake)</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center"><span className="text-gray-500">設計地震譜加速度 (S<sub>aD</sub>)</span> <span className="font-bold text-[#0066cc] bg-white px-3 py-1 rounded-full shadow-sm">{result.Sad.toFixed(3)} g</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">設計地震折減係數 (F<sub>u</sub>)</span> <span className="font-bold text-[#0066cc] bg-white px-3 py-1 rounded-full shadow-sm">{result.Fu.toFixed(3)}</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">修正譜加速度比 (S<sub>aD</sub>/F<sub>u</sub>)<sub>m</sub></span> <span className="font-bold text-[#0066cc] bg-white px-3 py-1 rounded-full shadow-sm">{result.ratioD.toFixed(3)}</span></div>
              <div className="p-4 bg-white rounded-2xl border border-gray-50 font-mono text-[13px] leading-relaxed">
                V<sub>D</sub> = (I / 1.4α<sub>y</sub>) * (S<sub>aD</sub> / F<sub>u</sub>)<sub>m</sub> * W <br/>
                = ({inputs.usageFactor.toFixed(3)} / (1.4 * {inputs.alphaY.toFixed(3)})) * {result.ratioD.toFixed(3)} * W = <span className="font-bold text-[#0066cc]">{result.V_D.toFixed(3)} W</span>
              </div>
            </div>
          </section>

          {/* Section 5: Small/Medium Earthquake */}
          <section className="bg-[#f5f5f7]/50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4 tracking-tight">5. 中小地震 (Small/Medium Earthquake)</h3>
            <p className="text-[11px] text-gray-500 mb-4">* 依規範 2.10.1 規定，採 475 年回歸期基準震區係數 (不含近斷層修正) 並以 4.2 或 3.5 倍折減。此處使用的 S<sub>aD</sub> 為 Table 2-1 之基準值。</p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center"><span className="text-gray-500">基準譜加速度 (S<sub>aD,base</sub>)</span> <span className="font-bold text-[#34c759] bg-white px-3 py-1 rounded-full shadow-sm">{result.Sad_base.toFixed(3)} g</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">基準折減係數 (F<sub>u,base</sub>)</span> <span className="font-bold text-[#34c759] bg-white px-3 py-1 rounded-full shadow-sm">{result.Fu_base.toFixed(3)}</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">基準修正譜加速度比 (S<sub>aD</sub>/F<sub>u</sub>)<sub>m,base</sub></span> <span className="font-bold text-[#34c759] bg-white px-3 py-1 rounded-full shadow-sm">{result.ratioD_base.toFixed(3)}</span></div>
              <div className="p-4 bg-white rounded-2xl border border-gray-50 font-mono text-[13px] leading-relaxed">
                V* = (I * F<sub>u</sub> / Kα<sub>y</sub>) * (S<sub>aD</sub> / F<sub>u</sub>)<sub>m</sub> * W <br/>
                = ({inputs.usageFactor.toFixed(3)} * {result.Fu_base.toFixed(3)} / ({inputs.isTaipeiBasin ? '3.5' : '4.2'} * {inputs.alphaY.toFixed(3)})) * {result.ratioD_base.toFixed(3)} * W = <span className="font-bold text-[#34c759]">{result.V_Star.toFixed(3)} W</span>
              </div>
            </div>
          </section>

          {/* Section 6: Maximum Earthquake */}
          <section className="bg-[#f5f5f7]/50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6 tracking-tight">6. 最大地震 (Maximum Considered Earthquake)</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center"><span className="text-gray-500">最大地震譜加速度 (S<sub>aM</sub>)</span> <span className="font-bold text-[#ff3b30] bg-white px-3 py-1 rounded-full shadow-sm">{result.SadM.toFixed(3)} g</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">最大地震折減係數 (F<sub>uM</sub>)</span> <span className="font-bold text-[#ff3b30] bg-white px-3 py-1 rounded-full shadow-sm">{result.FuM.toFixed(3)}</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-500">修正譜加速度比 (S<sub>aM</sub>/F<sub>uM</sub>)<sub>m</sub></span> <span className="font-bold text-[#ff3b30] bg-white px-3 py-1 rounded-full shadow-sm">{result.ratioM.toFixed(3)}</span></div>
              <div className="p-4 bg-white rounded-2xl border border-gray-50 font-mono text-[13px] leading-relaxed">
                V<sub>M</sub> = (I / 1.4α<sub>y</sub>) * (S<sub>aM</sub> / F<sub>uM</sub>)<sub>m</sub> * W <br/>
                = ({inputs.usageFactor.toFixed(3)} / (1.4 * {inputs.alphaY.toFixed(3)})) * {result.ratioM.toFixed(3)} * W = <span className="font-bold text-[#ff3b30]">{result.V_M.toFixed(3)} W</span>
              </div>
            </div>
          </section>

          {/* Section 7: Final Result */}
          <section className="bg-[#1d1d1f] p-10 rounded-4xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h3 className="text-xl font-semibold mb-8 tracking-tight relative z-10">7. 設計地震力結果</h3>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">最終設計總橫力係數 (V / W)</p>
                <div className="text-7xl font-bold tracking-tighter">{result.V_Design.toFixed(3)}</div>
              </div>
              <div className="text-right space-y-2">
                <div className="text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md inline-block">
                  {result.V_Design === result.V_D ? '由設計地震控制' : result.V_Design === result.V_Star ? '由中小地震控制' : '由最大地震控制'}
                </div>
                <p className="text-[11px] text-gray-500">本計算結果僅供參考，實際設計請依規範辦理</p>
              </div>
            </div>
          </section>

          {/* Section 8: Verification Parameters */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6 tracking-tight">8. 檢核相關參數 (Verification)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 bg-[#f5f5f7]/50 rounded-2xl border border-gray-50">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">建築物間隔檢討位移調整係數</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-bold text-[#0066cc]">C<sub>δ</sub></span>
                  <span className="text-3xl font-bold text-[#1d1d1f]">{result.Cd.toFixed(3)}</span>
                </div>
                <p className="mt-2 text-[11px] text-gray-400 italic">公式：0.6 × 1.4 × α<sub>y</sub> × Ra</p>
              </div>
              <div className="p-5 bg-[#f5f5f7]/50 rounded-2xl border border-gray-50">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">層間相對側向位移角檢核地震力</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-bold text-emerald-600">V<sub>drift</sub>/W</span>
                  <span className="text-3xl font-bold text-[#1d1d1f]">{result.V_drift.toFixed(3)}</span>
                </div>
                <p className="mt-2 text-[11px] text-gray-400 italic">公式：(1.0 × F<sub>u</sub> / 4.2) × (S<sub>aD</sub>/F<sub>u</sub>)<sub>m</sub></p>
              </div>
            </div>
          </section>

          <div className="mt-20 pt-8 border-t border-gray-50 text-[10px] text-center text-gray-400 font-medium uppercase tracking-widest">
            Generated by 台灣地震力計算 App
          </div>
        </div>
      </div>
    </div>
  );
};
