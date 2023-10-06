import { z } from "zod"

const productSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(90),
    description: z.string().max(255),
    price: z.number().positive(),
    type: z.string().max(45),
    image_url: z.string().max(255)
})

const  productListSchema = productSchema.array()

export { productSchema, productListSchema }