interface UserRegisterDto {
    name: string,
    email: string,
    password: string,
    phone?: number,
    // active?: boolean
}

export default UserRegisterDto;