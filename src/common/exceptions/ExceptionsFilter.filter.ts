import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common"
import { Response } from 'express'
// This File will write any Error in a log file that is not already being override by our application  

@Catch()
export class NonHttpExceptionFilter implements ExceptionFilter {

    async catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response: Response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        if (exception instanceof HttpException) {
            console.log('Exception Filter: ', exception)
            return response.status(exception.getStatus()).json(exception.getResponse())

        } else {
            console.log('Exception Filter: ', exception)
            const logError = {
                author: (request as any).user.username,
                timestamp: new Date().toISOString(),
                path: request.url,
                error: exception
            }

            console.log(logError)

            return response.status(500).json({
                error: 'Internal Server Error',
                message: 'Some Internal Error has ocurred',
                statusCode: 500
            })
        }

    }

}