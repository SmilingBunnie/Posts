import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import CustomError from '../errors/custom-error'

function errorHandlerMiddleware(
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let customError: CustomError = new CustomError(
        err.statuscode || StatusCodes.INTERNAL_SERVER_ERROR,
        err.message || 'Something went wrong, please try again later'
        )
        return res.status(customError.statuscode).json({message: customError.message})
}

export default errorHandlerMiddleware