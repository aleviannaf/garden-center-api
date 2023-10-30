import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Product from "../entities/Product.entity";
import { AppError } from "../errors";


const verifyProductIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number | undefined  = req.params.id ? parseInt(req.params.id) : undefined;

    const repo: Repository<Product> = AppDataSource.getRepository(Product);

    if(!id){
        throw new AppError("ID is missing or invalid", 400)
    }

    const product: Product | null = await repo.findOne({where: {id}});

    if (product == null) {
        throw new AppError("Id is not exist", 404);
    }

    next()
}

export default verifyProductIdExist