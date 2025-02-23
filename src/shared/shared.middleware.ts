import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message),
        this.statusCode = statusCode;
    }
}

class SharedMiddlewares {
    handleError(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof AppError) {
            const errorMessage = {message: err.message};
            return res.status(err.statusCode).json(errorMessage);
        }
    
        if (err instanceof ZodError) {
            const errorMessage = {message: err.flatten().fieldErrors};
            return res.status(400).json(errorMessage);
        }
    
        console.log(err);
        const errorMessage = {message: "Internal Server Error"};
        return res.status(500).json(errorMessage);
    };
  
    validateSchema (schema: ZodTypeAny) {
        return (req: Request, res: Response, next: NextFunction): void | Response => {
            const toValidate = req.body;
            const validated = schema.parse(toValidate);
            
            req.body = validated;
            return next();
        };
    }

}

const sharedMiddlewares = new SharedMiddlewares();
export { sharedMiddlewares, AppError };