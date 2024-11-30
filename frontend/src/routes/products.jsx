import content from '../data/content.json'
import React from 'react'

const loadProductById = async ({params}) => {
    const product = content?.products?.find((product)=> product?.id?.toString() === params?.productId?.toString());
    return {product};
}

export default loadProductById