export {};
class ApiError extends Error{
    constructor(status: number, message: string) {
        super();
        // @ts-ignore
        this.status = status
        this.message = message
    }

    static badRequest(message: string) {
        return new ApiError(484, message)
    }

    static internal(message: string) {
        return new ApiError(500, message)
    }
    static forbidden(message: string) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError
