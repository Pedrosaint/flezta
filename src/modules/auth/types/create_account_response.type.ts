
interface ICreateAccountResponse {
  user?: IUser;
  accessToken?: string;
}

interface IUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
  providerId: string;
}

export type { ICreateAccountResponse, IUser };
