import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import content from '../../../data/content.json'
import Rating from '../../components/Rating/Rating';
import SizeFilter from '../../components/Filters/SizeFilter'
import ProductColors from './ProductColors';

const categories = content?.filter_categories;

const ProductDetails = () => {
    const { product } = useLoaderData();
    const [image, setImage] = useState(product?.images[0] ?? product?.thumbnail);
    const [breadcrumbLinks, setBreadcrumbLinks] = useState([]);

    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id);
    }, []);

    useEffect(() => {
        setBreadcrumbLinks([]);

        const arrayLinks = [{title: 'Shop', path: '/'}, {
            title: productCategory?.name,
            path: productCategory?.path
        }];

        const productType = productCategory?.types?.find((item) => item?.type_id === product?.type_id);

        if (productType) {
            arrayLinks?.push({
                title:productType?.name,
                path: productType?.name
            })
        }

        setBreadcrumbLinks(arrayLinks)
    }, [productCategory, product])

    return (
        <div className='flex flex-col md:flex-row p-10 gap-10'>
            <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
                {/* Image */}
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-[100%] md:w-[20%] gap-20'>
                        <div className='h-full flex flex-row md:flex-col justify-center items-center gap-5'>
                            {
                                product?.images?.map((item, index) => (
                                    <button 
                                    key={index}
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
                <Breadcrumb links={breadcrumbLinks} />

                <div className='mt-5'>
                    <p className='text-3xl mb-3'>{product?.title}</p>
                    <Rating rating={product?.rating} />                    
                </div>
                
                <div className='flex flex-col mt-5'>
                    <div className='flex gap-5'>
                        <p className='font-bold'>Select Size</p>
                        <Link 
                            className='text-gray-500 hover:text-gray-900'
                            to={'https://en.wikipedia.org/wiki/Clothing_sizes'}
                        >
                            {'Size Guide ->'}
                        </Link>
                    </div>
                    <SizeFilter sizes={product?.size} hideTitle />
                </div>

                <div className='mt-2'>
                    <p className='font-bold'>Colours Available</p>
                    <ProductColors colors={product?.color} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails