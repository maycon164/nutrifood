import { BadRequestException, CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, throwError } from "rxjs";
import { Prisma } from '@prisma/client'

@Injectable()
export class HandlePrismaExceptions implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                catchError(err => {
                    let overrideException: Error = null;
                    // Todo: Make Logic to override exceptions from Prisma
                    if (err instanceof Prisma.PrismaClientKnownRequestError) {
                        if (err.code == 'P2003') {
                            const fieldName = getEquivalentNameField(err.meta.field_name as string)
                            overrideException = new BadRequestException(`Invalid ${fieldName}`)
                        }
                    }
                    return throwError(() => overrideException)
                })
            )
    }
}

function getEquivalentNameField(fieldName: string) {
    const FieldNameEquivalent: any = {
        'item_snackId_fkey (index)': 'Snack Item'
    }

    if (FieldNameEquivalent[fieldName]) {
        return FieldNameEquivalent[fieldName]
    }

    throw new Error('FieldName not mapped')
}

