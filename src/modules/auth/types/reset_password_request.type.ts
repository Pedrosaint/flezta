interface IResetPasswordRequest {
    email: string;
    password: string;
    confirmPassword: string;
}

export type { IResetPasswordRequest };