export interface IUser {
    name: string;
    surname: string;
    patronymic?: string;
    age: number;
    phone: string;
}

export interface ILogin {
    login: string;
    password: string;
}

export interface IUserContact {
    name: string;
    phone: string;
    email: string;
}
