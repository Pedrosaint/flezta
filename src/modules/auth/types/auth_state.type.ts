import IUser from "./login_response.type";
interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

export type { IAuthState };