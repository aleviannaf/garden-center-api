import { Request, Response } from "express"
import { productService } from "../services"

const listProduct = async (request: Request, response: Response):Promise<Response> =>{
    const data = await productService.listProduct()
    return response.status(200).json(data)
}

export default { listProduct}