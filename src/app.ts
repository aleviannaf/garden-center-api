import cors from 'cors'
import express, {json, Application } from 'express'
import middlewares from './middlewares'
import productRouter from './routers/product.router'

const app: Application = express()

app.use(json())
app.use(cors({
    origin: '*', 
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }))

app.use('/products', productRouter)

app.use(middlewares.handleErrors)

export default app