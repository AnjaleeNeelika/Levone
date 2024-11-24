import React, { useMemo } from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'
import content from '../../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';


const categories = content?.filter_categories;

const ProductList = ({categoryType}) => {

    const categoryContent = useMemo(() => {
        return categories?.find((category) => category.code === categoryType);
    }, [categoryType]);

    const productListItems = useMemo(() => {
        return content?.products?.filter((product) => product?.category_id === categoryContent?.id);
    }, [categoryContent]);    

    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] p-8 my-12 ml-12 border rounded-lg shadow-md'>
                    {/* Filters */}
                    <div className='flex justify-between pb-2 border-b border-b-gray-300'>
                        <p className='text-xl text-gray-500'>Filters</p>
                        <HiOutlineAdjustments className='text-2xl text-gray-400' />
                    </div>
                    <div>
                        {/* Product Types */}
                        <p className='text-black font-semibold mt-5 uppercase'>Categories</p>
                        <Categories types={categoryContent?.types} />
                        <hr className='mt-5'></hr>
                    </div>
                    <div>
                        {/* Price */}
                        <PriceFilter />
                        <hr className='mt-7'></hr>
                    </div>
                    <div>
                        {/* Colors */}
                        <ColorsFilter colors={categoryContent?.meta_data?.colors} />
                        <hr className='mt-5'></hr>
                    </div>
                    <div>
                        {/* Sizes */}
                        <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
                    </div>
                </div>

                <div className='p-14 w-full'>
                    {/* Products */}
                    <p className='text-2xl'>{categoryContent?.description}</p>
                    <div className='p-5 flex flex-wrap gap-16'>
                        {productListItems?.map((item, index) => (
                            // console.log(item)
                            <ProductCard key={index} {...item} />
                        ))}                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductList