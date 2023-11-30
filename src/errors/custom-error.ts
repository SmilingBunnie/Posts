import CustomAPIError from "./custom-api"

class CustomError extends CustomAPIError {
    public message: string
    public statuscode: number

    constructor(statuscode: number, message: string) {
        super(message)
        this.statuscode = statuscode
        this.message = message
    }
}

export default CustomError