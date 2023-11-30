import { Request, Response, NextFunction } from "express"
import PostModel from "../models/post"
import { StatusCodes } from 'http-status-codes'

export const createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const post = await PostModel.create(req.body)
    return res.status(StatusCodes.CREATED).json(post)
}