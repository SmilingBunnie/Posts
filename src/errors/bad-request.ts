import CustomAPIError from "./custom-api";
import { StatusCodes } from 'http-status-codes'

class BadRequestError extends CustomAPIError {
    public statuscode: number

    constructor(message: string) {
        super(message)
        this.statuscode = StatusCodes.BAD_REQUEST
    }
}

export default BadRequestError