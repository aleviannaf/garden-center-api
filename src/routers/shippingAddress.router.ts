import { Router } from "express"
import { shippingAddressController } from "../controllers"


const shippingRouter: Router = Router()

shippingRouter.get(
    '/:cep',
    shippingAddressController.retrieveShippingAddress
)

export default shippingRouter