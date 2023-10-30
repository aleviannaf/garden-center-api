import { Request, Response } from "express"
import { productService } from "../services"

const listProduct = async (request: Request, response: Response):Promise<Response> =>{
    const data = await productService.listProduct()
    return response.status(200).json(data)
}

const retrieveProduct = async (request: Request, response: Response):Promise<Response> =>{
    const id = parseInt(request.params.id)
    const product = await productService.retrieveProduct(id)
    return response.status(200).json(product)
}

export default { listProduct, retrieveProduct}