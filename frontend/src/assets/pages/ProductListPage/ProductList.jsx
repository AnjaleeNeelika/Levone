import React, { useEffect, useMemo, useState } from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'
import content from '../../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';
import { getAllProducts } from '../../../api/fetchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/features/common'
import fetchCategories from '../../../api/fetchCategories';


const categories = content?.filter_categories;

const ProductList = ({categoryType}) => {
    const [allCategories, setAllCategories] = useState([]);
    // const categoryData = useSelector((state) => state?.categoryState?.categories);
    const categoryData = useSelector((state) => state?.categoryState?.allCategories);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const colors = categories?.find(category => category.code === categoryType)?.meta_data?.colors || [];
    const sizes = categories?.find(category => category.code === categoryType)?.meta_data?.sizes || [];


    // const categoryContent = useMemo(() => {
    //     return categories?.find((category) => category.code === categoryType);
    // }, [categoryType]);

    // const productListItems = useMemo(() => {
    //     return content?.products?.filter((product) => product?.category_id === categoryContent?.id);
    // }, [categoryContent]);  

    // const category = useMemo(() => {
    //     return categoryData?.find(element => element?.code === categoryType);
    // }, [categoryData, categoryType]);

    useEffect(() => {
        dispatch(setLoading(true));
        fetchCategories()
            .then((res) => {
                setAllCategories(res);
            })
            .catch((err) => {
                console.error("Error fetching categories: ", err);
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }, [dispatch]);

    const categoryContent = useMemo(() => {
        return allCategories?.find((category) => category.code === categoryType);
    }, [categoryType, allCategories]); 

    const category = useMemo(() => {
        return categoryData?.find(element => element?.code === categoryType);
    }, [categoryData, categoryType]);
   
    
    // useEffect(() => {
    //     dispatch(setLoading(true));

    //     getAllProducts(category?.id).then(res => {
    //         console.log(category?.id);
    //         setProducts(res);
    //     }).catch(err => {

    //     }).finally(() => {
    //         dispatch(setLoading(false));
    //     })
    // }, [category, dispatch]);


    useEffect(() => {
        if (categoryContent) {
            dispatch(setLoading(true));
            getAllProducts(categoryContent?.id).then(res => {
                setProducts(res);
            }).catch(err => {
                console.error("Error fetching products:", err);
            }).finally(() => {
                dispatch(setLoading(false));
            });
        }
    }, [categoryContent, dispatch]);
    
    console.log(products);


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
                        <Categories types={categoryContent?.categoryTypeList} />
                        <hr className='mt-5'></hr>
                    </div>
                    <div>
                        {/* Price */}
                        <PriceFilter />
                        <hr className='mt-7'></hr>
                    </div>
                    <div>
                        {/* Colors */}
                        <ColorsFilter colors={colors} />
                        <hr className='mt-5'></hr>
                    </div>
                    <div>
                        {/* Sizes */}
                        <SizeFilter sizes={sizes} />
                    </div>
                </div>

                <div className='p-14 w-full'>
                    {/* Products */}
                    <p className='text-2xl'>{category?.description}</p>
                    <div className='p-5 flex flex-wrap gap-16'>
                        {products?.map((item, index) => (
                            // console.log(item)
                            <ProductCard key={item?.id+"_"+index} {...item} title={item?.name} />
                        ))}                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductList