import {Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("products")
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 90, unique: true})
    name: string

    @Column("text")
    description: string

    @Column({length: 45})
    type: string

    @Column({default: 0})
    price: number  

    @Column({length: 255})
    image_url: string

    @Column({default: 0})
    old_price:number
}