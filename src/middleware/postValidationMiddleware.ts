import { Request, Response, NextFunction, RequestHandler } from 'express'
import Joi from 'joi'
import BadRequestError from "../errors/bad-request"

function postValidationMiddleware(schema: Joi.Schema): RequestHandler {
    return async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const validateOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
        }

        try{
            const value = await schema.validateAsync(req.body, validateOptions)
            req.body = value
            next()
        }catch(err: any) {
            const errors: string[] = []
            err.details.forEach((error: Joi.ValidationErrorItem): void => {
                errors.push(error.message)
            })
            throw new BadRequestError(`${errors}`)
        }
    }
}

export default postValidationMiddleware