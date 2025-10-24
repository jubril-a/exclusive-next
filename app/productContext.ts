'use client'
import { createContext } from "react";

type productData = {
    _id: string,
    productName: string,
    imageUrl: string,
    price: number,
    discount: number,
    product_desc: string,
    stock: number,
    categorySlug: string
}

export const ProductContext = createContext({} as productData)