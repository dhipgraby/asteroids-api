import { IsDateString, IsIn, IsOptional } from 'class-validator';
import { Prisma } from "@prisma/client";

export type OrderQueryType = 'asc' | 'desc' | undefined
export type DateQueryFormat = `${string}-${string}-${string}` | undefined;

export class GetByQueryType {
    @IsDateString()
    @IsOptional()
    start_date?: DateQueryFormat;

    @IsDateString()
    @IsOptional()
    end_date?: DateQueryFormat;

    @IsIn(['asc', 'desc', undefined], {
        message: 'Invalid orderBy value. Must be one of "asc", "desc", or undefined.',
    })
    @IsOptional()
    orderBy?: OrderQueryType;
}

export type SeachQueryType = {
    where: Prisma.AsteroidsWhereInput,
    orderBy: Prisma.AsteroidsOrderByWithRelationInput
}