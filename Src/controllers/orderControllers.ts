import { Request, Response } from "express";
import { createOrderService, getOrderHistoryService } from "../services/orderServices";

export const createOrder =  async (req: Request, res: Response) => {
    //logica para crear una orden
}

export const getOrderHistory =  async (req: Request, res: Response) => {
    //logica para traer el historial de pedidos por usuario
}