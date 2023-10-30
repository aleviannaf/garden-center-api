import { AppDataSource } from "../data-source";
import Product from "../entities/Product.entity";
import { Repository } from "typeorm";

const listProduct = async (): Promise<Product[]> => {
    const repo: Repository<Product> = AppDataSource.getRepository(Product);
    const products: Product[] = await repo.find()
    return products
}

export default { listProduct}