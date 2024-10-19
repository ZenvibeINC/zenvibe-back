interface UserRegisterDto {
    name: string,
    email: string,
    password: string,
    phone?: number,
    // active?: booleann
}

export default UserRegisterDto;