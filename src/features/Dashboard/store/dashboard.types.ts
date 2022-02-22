export interface TokenPropsValidationType {
  token: boolean;
  value: boolean;
}

export interface TokenPropsType {
  token: string;
  value: number;
  validation: TokenPropsValidationType;
}

export interface DashboardSlice {
  from: TokenPropsType;
  to: TokenPropsType;
}
