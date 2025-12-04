interface ILoginResponse {
    user?: IUser;
    token?: string;
}

interface IUser {
    id?:            string;
    first_name?:    string;
    last_name?:     string;
    email?:         string;
    phone_number?:  null;
    role?:          string;
    is_verified?:   boolean;
    is_active?:     boolean;
    last_login_at?: Date;
    created_at?:    Date;
    updated_at?:    Date;
}

export type { ILoginResponse, IUser };
// ILoginResponse is exported via the interface declaration above