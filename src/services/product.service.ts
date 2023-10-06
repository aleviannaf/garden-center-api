import { QueryResult } from "pg"
import { client } from "../database"
import { IProduct, IProductList } from "../interface"

const listProduct = async (): Promise<IProductList> => {
    const queryString: string = `SELECT * FROM products;`

    const queryResult: QueryResult<IProduct> = await client.query(queryString)

    return queryResult.rows
}

export default { listProduct}