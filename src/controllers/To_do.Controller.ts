import { Request, Response } from 'express';
import { To_do } from '../models/To_do.Model';

export const home = async (req: Request, res: Response) => {
    res.json({msg: "Alisson conseguiu"});
}