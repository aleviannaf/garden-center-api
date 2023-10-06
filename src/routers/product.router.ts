import { Router } from "express"
import { productController } from "../controllers"

const productRouter: Router = Router()

productRouter.get(
    '',
    productController.listProduct
)

export default productRouter