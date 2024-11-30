import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { product } = useLoaderData();
    const [image, setImage] = useState(product?.images[0] ?? product?.thumbnail);

    return (
        <div className='flex flex-col md:flex-row p-10'>
            <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
                {/* Image */}
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-[100%] md:w-[20%] gap-20'>
                        <div className='h-full flex flex-row md:flex-col justify-center items-center gap-5'>
                            {
                                product?.images?.map((item, index) => (
                                    <button 
                                        className='p-1 rounded-md shadow-md border border-gray-200 hover:scale-105'
                                        onClick={() => setImage(item)}
                                    >
                                        <img src={'../../'+item} alt={'sample-'+index} className='w-[64px] h-[64px] object-cover rounded-md' />
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <img src={`../../` + image} alt={product?.title} className='h-full w-full max-h-[700px] object-cover bg-center border rounded shadow-md' />
                    </div>
                </div>
            </div>
            <div className='w-[60%]'>
                {/* Product Description */}
            </div>
        </div>
    )
}

export default ProductDetails