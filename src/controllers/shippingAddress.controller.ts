import { ICepData } from "../interface"
import { shippingAddressService } from "../services"
import { Request, Response } from "express"

const retrieveShippingAddress = async (request: Request, response: Response):Promise<Response> =>{
    const cep = Number(request.params.cep)
    const shippingAddress = await shippingAddressService.verifyShippingAddress(cep)
    return response.status(200).json(shippingAddress)
}

export default { retrieveShippingAddress }