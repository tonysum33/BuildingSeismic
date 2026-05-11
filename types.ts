export enum SiteClass {
  HARD = '1', // Type 1 (Hard)
  MEDIUM = '2', // Type 2 (Normal)
  SOFT = '3', // Type 3 (Soft)
}

export enum StructureType {
  STEEL = 'Steel',
  RC = 'RC',
  OTHER = 'Other',
}

export interface SeismicZoneData {
  city: string;
  district: string;
  SsD: number; // Short period design zone factor
  S1D: number; // 1-sec period design zone factor
  SsM: number; // Short period max considered zone factor
  S1M: number; // 1-sec period max considered zone factor
  fault?: string; // Nearby fault name
  faultDistance?: number; // Distance to fault in km
}

export interface CalculationResult {
  T: number; // Fundamental Period (Design)
  Ta: number; // Empirical Period
  T0: number; // Corner Period (Design)
  T0M: number; // Corner Period (MCE)
  Ra: number; // Allowable ductility
  Fa: number;
  Fv: number;
  FaM: number;
  FvM: number;
  Sds: number; // Design Spectral Acceleration (Short)
  Sd1: number; // Design Spectral Acceleration (1s)
  Sms: number;
  Sm1: number;
  Sad: number; // Spectral Acceleration at period T (Design)
  SadM: number; // Spectral Acceleration at period T (MCE)
  Fu: number; // Reduction factor (Design)
  FuM: number; // Reduction factor (MCE)
  V_D: number; // Design Base Shear Coefficient (V_D/W)
  V_Star: number; // Minimum Base Shear Coefficient (V*/W)
  V_M: number; // MCE Base Shear Coefficient (V_M/W)
  V_Design: number; // Final Design Base Shear Coefficient (V_design/W)
  // Detailed parameters for reporting
  SsD: number;
  S1D: number;
  SsD_base: number;
  S1D_base: number;
  SsM: number;
  S1M: number;
  Fa_base: number;
  Fv_base: number;
  T0_base: number;
  Sad_base: number;
  Fu_base: number;
  ratioD: number;
  ratioD_base: number;
  ratioM: number;
  Cd: number; // Building distance adjustment factor
  V_drift: number; // Seismic force for drift check (V_drift/W)
}

export interface ChartPoint {
  t: number;
  sa_design: number;
  sa_mce: number;
  sa_small: number;
  isBuildingT?: boolean;
}