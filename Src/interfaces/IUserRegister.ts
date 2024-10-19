interface IUserRegister {
    id: number,
    name: string,
    email: string,
    password: string,
    phone?: number,
    // active: boolean
}

export default IUserRegister;