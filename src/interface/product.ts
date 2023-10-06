import { productListSchema, productSchema } from "../schemas";


type IProduct = Zod.infer<typeof productSchema>
type IProductList = Zod.infer<typeof productListSchema>

export { IProduct, IProductList }