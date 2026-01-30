
interface ICreateAccountResponse {
  message: string;
  data: IUser;
}

 interface IUser {
  uid: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
  points: number;
}

export type { ICreateAccountResponse , IUser };
