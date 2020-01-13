/** Auth */

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface AuthAction {
  type: AuthType;
  payload: any;
}

export enum AuthType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  LOGOUT = "LOGOUT",
  SET_ERROR = "SET_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR"
}
