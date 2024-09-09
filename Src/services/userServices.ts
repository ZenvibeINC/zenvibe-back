import UserRegisterDto from "../dto/UserRegisterDto";
import IUserRegister from "../interfaces/IUserRegister";


let users: IUserRegister[] = [];
let id: number = 1;

export const registerUserService = async (userData: UserRegisterDto): Promise<IUserRegister> => {

    const newUser: IUserRegister = {
        id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        active: userData.active
    }

    users.push(newUser);
    id++;

    return newUser;
}

export const getUsersServices = async(): Promise<IUserRegister[]> =>{
    return users;
}

//Esta es una funcion unicamente para administradores
export const deleteUserService = async(id:number): Promise<void> => {
    users = users.filter((user: IUserRegister) => {
        return user.id != id;
    })
}

export const loginUserServices = async () => {
    //logica para iniciar sesion, input de la funcion, las credenciales. hacerlo con JWT (autenticacion de tokens)
    //1. Buscar al usuario en la base de datos
    //2. Verificar la contraseña con bcrypt
    // npm install bcryptjs jsonwebtoken
    // npm install --save-dev @types/jsonwebtoken @types/bcryptjs
    //3. Si la contraseña es correcta, generar un token JWT
    //4. Mapear los datos del usuario para la respuesta
    //. Retornar el token y los datos del usuario

}

