import { Router } from "express"
import { productController } from "../controllers"
import middlewares from "../middlewares"

const productRouter: Router = Router()

productRouter.post(
    '',
    productController.createProduct
)

productRouter.get(
    '',
    productController.listProduct
)

productRouter.get(
    '/:id',
    middlewares.verifyProductIdExist,
    productController.retrieveProduct
)

export default productRouter