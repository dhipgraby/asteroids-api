import { Prisma } from '@prisma/client'
import { GetByQueryType } from '../asteroids/dto/queries.dto';

export const getByIdQuery = (id: number) => {
    const query: Prisma.AsteroidsWhereUniqueInput = { id: Number(id) }
    return { where: query }
}

export const getByDateQuery = ({ start_date, end_date, orderBy }: GetByQueryType) => {

    const order: Prisma.AsteroidsOrderByWithRelationInput = {
        discovered: (orderBy ? orderBy : 'asc'),
    };

    const where: Prisma.AsteroidsWhereInput = {
        discovered: {
            ...(start_date
                ? {
                    gte: new Date(start_date),
                }
                : {}),
            ...(end_date
                ? {
                    lte: new Date(end_date),
                }
                : {}),
        },
    };

    return {
        where: where,
        orderBy: order
    }
}