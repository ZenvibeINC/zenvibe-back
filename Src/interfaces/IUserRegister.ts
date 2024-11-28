interface IUserRegister {
    id: number,
    name: string,
    email: string,
    password: string,
    phone?: number,
    allowExtraEmails?: boolean;
    // active: boolean
}

export default IUserRegister;