import { AppDataSource } from "../data-source";
import Product from "../entities/Product.entity";
import { Repository } from "typeorm";
import { AppError } from "../errors";

const createProduct =  async (data:Omit<Product, 'id'>): Promise<Product> => {
    const repo: Repository<Product> = AppDataSource.getRepository(Product);
    const product = await repo.save(data);
    return product;
}


const listProduct = async (): Promise<Product[]> => {
    const repo: Repository<Product> = AppDataSource.getRepository(Product);
    const products: Product[] = await repo.find();
    return products;
}

const retrieveProduct = async(id:number): Promise<Product> =>{
    const repo: Repository<Product> = AppDataSource.getRepository(Product);
    const product: Product | null = await repo.findOne({where: {id}});

    if (product == null) {
        throw new AppError("Product is not found", 404);
    }

    return product
}

export default { listProduct, retrieveProduct, createProduct }