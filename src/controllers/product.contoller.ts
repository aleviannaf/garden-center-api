import { Request, Response } from "express"
import { productService } from "../services"

const createProduct  = async (request: Request, response: Response):Promise<Response> =>{
    const data = await productService.createProduct(request.body)
    return response.status(201).json(data)
}

const listProduct = async (request: Request, response: Response):Promise<Response> =>{
    const data = await productService.listProduct()
    return response.status(200).json(data)
}

const retrieveProduct = async (request: Request, response: Response):Promise<Response> =>{
    const id = parseInt(request.params.id)
    const product = await productService.retrieveProduct(id)
    return response.status(200).json(product)
}

export default { listProduct, retrieveProduct, createProduct}