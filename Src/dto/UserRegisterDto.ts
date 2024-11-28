interface UserRegisterDto {
    name: string,
    email: string,
    password: string,
    phone?: number,
    allowExtraEmails?: boolean;
    // active?: booleann
}

export default UserRegisterDto;