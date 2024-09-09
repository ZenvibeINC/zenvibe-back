import { Request, Response } from "express";
import { registerUserService, getUsersServices, deleteUserService } from "../services/userServices";
import IUserRegister from "../interfaces/IUserRegister";

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, phone, active } = req.body;

    const newUser: IUserRegister = await registerUserService ({ name, email, phone, active });
    

    res.status(201).json(newUser);
}

export const getUsers = async(req: Request, res: Response) => {
    const users: IUserRegister[] = await getUsersServices();

    res.status(200).json(users);
}

export const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.body;
    await deleteUserService(id);

    return res.status(202).json({message: `User with ID ${id}, successfully removed`})    
}

export const loginUser = async(req: Request, res: Response) => {}