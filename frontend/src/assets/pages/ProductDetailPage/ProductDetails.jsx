import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import content from '../../../data/content.json'
import Rating from '../../components/Rating/Rating';
import SizeFilter from '../../components/Filters/SizeFilter'
import ProductColors from './ProductColors';
import { IoCartOutline, IoShirtOutline } from 'react-icons/io5';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsTruck } from 'react-icons/bs';
import { TbExchange } from 'react-icons/tb';
import SectionHeading from '../../components/Sections/SectionHeading/SectionHeading'
import ProductCard from '../ProductListPage/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getAllProducts } from '../../../api/fetchProducts';

// const categories = content?.filter_categories;

const extraSections = [
    {
        icon: <CiCreditCard1 className='text-2xl text-gray-600' />,
        label: 'Secure Payment'
    },
    {
        icon: <IoShirtOutline className='text-2xl text-gray-500' />,
        label: 'Size & Fit'
    },
    {
        icon: <BsTruck className='text-2xl text-gray-500' />,
        label: 'Free Shipping'
    },
    {
        icon: <TbExchange className='text-2xl text-gray-500' />,
        label: 'Free Shipping & Returns'
    }
];

const ProductDetails = () => {
    const { product } = useLoaderData();
    const [image, setImage] = useState();
    const [breadcrumbLinks, setBreadcrumbLinks] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartState?.cart);
    const [similarProducts, setSimilarProducts] = useState([]);
    const categories = useSelector((state) => state?.categoryState?.categories);


    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.categoryId);
    }, [product, categories]);

    useEffect(() => {
        getAllProducts(product?.categoryId, product?.categoryTypeId).then(res => {
            const excludedProduct = res?.filter((item) => item?.id !== product?.id);
            setSimilarProducts(excludedProduct);
        }).catch(() => {

        })
    }, [product?.categoryId, product?.categoryTypeId, product?.id]);

    // console.log(productCategory)

    useEffect(() => {
        setImage(product?.thumbnail);
        console.log(product);

        setBreadcrumbLinks([]);

        const arrayLinks = [{ title: 'Shop', path: '/' }, 
            {
                title: productCategory?.name,
                path: productCategory?.name
            }
        ];

        const productType = productCategory?.categoryTypes?.find((item) => item?.id === product?.categoryTypeId);
        console.log(productType);

        if (productType) {
            arrayLinks?.push ({
                title: productType?.name,
                path: productType?.name
            })
        }

        setBreadcrumbLinks(arrayLinks);
    }, [productCategory, product]);

    const colors = useMemo(() => {
        const colorSet = _.uniq(_.map(product?.variants, 'color'));
        return colorSet
    }, [product]);

    const sizes = useMemo(() => {
        const sizeSet = _.uniq(_.map(product?.variants, 'size'));
        return sizeSet
    }, [product]);


    return (
        <div>
            <div className='flex flex-col md:flex-row p-10 gap-10 lg:gap-20 justify-center'>
                <div className='w-[100%] lg:w-[50%] md:w-[80%]'>
                    {/* Image */}
                    <div className='flex flex-col md:flex-row gap-10 lg:gap-0'>
                        <div className='w-[100%] md:w-[20%] gap-20'>
                            <div className='h-full flex flex-row md:flex-col justify-center items-center gap-5'>
                                {
                                    product?.productResources?.map((item, index) => (
                                        <button 
                                            key={index}
                                            className='p-1 rounded-md shadow-md border border-gray-200 hover:scale-105'
                                            onClick={() => setImage(item?.url)}
                                        >
                                            <img src={item?.url} alt={'sample-'+index} className='w-[64px] h-[64px] object-cover rounded-md' />
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='lg:w-[80%] w-[100%] mx-auto'>
                            <img src={`../../` + image} alt={product?.name} className='h-full w-full max-h-[700px] object-cover bg-center border rounded shadow-md' />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%] py-5'>
                    {/* Product Description */}
                    <Breadcrumb links={breadcrumbLinks} />

                    <div className='mt-5'>
                        <p className='text-3xl mb-3'>{product?.name}</p>
                        <Rating rating={product?.rating} />                    
                    </div>

                    {/* Price Tag */}
                    <div className='mt-5 text-2xl font-bold'>Rs. {product?.price}</div>
                    
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
                        <SizeFilter sizes={sizes} hideTitle multi={false} />
                    </div>

                    <div className='mt-2'>
                        <p className='font-bold'>Colours Available</p>
                        <ProductColors colors={colors} />
                    </div>

                    <div className='flex mt-10'>
                        <button className='flex items-center justify-center gap-4 px-8 py-3 bg-black text-white rounded-md shadow-md'>
                            <IoCartOutline className='text-2xl' />
                            <div className='font-light'>Add to Cart</div>
                        </button>
                    </div>

                    <div className='w-full mt-8 grid lg:grid-cols-2 grid-cols-1 gap-4 border-t pt-8'>
                        {
                            extraSections?.map((section) => (
                                <div className='flex gap-4 justify-center items-center w-fit'>
                                    <div className='bg-gray-100 p-2 rounded-full shadow-md border'>
                                        {section?.icon}
                                    </div>
                                    <p>{section.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className='px-10 pt-5 pb-10 flex justify-between gap-10'>
                <div className='md:w-[50%] w-full'>
                    <SectionHeading title={'Product Description'} />
                    <p className='mx-10'>{product?.description}</p>
                    <div className='mt-8 mx-10'>
                        <table className='w-full'>
                            <tr>
                                <td className='p-5'>
                                    <p className='text-gray-500'>Fabric</p>
                                    <p>Bio-washable Cotton</p>
                                </td>
                                <td  className='p-5'>
                                    <p className='text-gray-500'>Pattern</p>
                                    <p>Plain</p>
                                </td>
                                <td  className='p-5'>
                                    <p className='text-gray-500'>Fit</p>
                                    <p>Regular-fit</p>
                                </td>
                            </tr>
                            <tr>
                                <td  className='p-5'>
                                    <p className='text-gray-500'>Sleeves</p>
                                    <p>Long-sleeves</p>
                                </td>
                                <td  className='p-5'>
                                    <p className='text-gray-500'>Style</p>
                                    <p>Casual Wear</p>
                                </td>
                                <td  className='p-5'>
                                    {/* <p className='text-gray-500'>Fit</p>
                                    <p>Regular-fit</p> */}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* Video */}
                <div className='md:w-[50%] w-full h-[400px] bg-slate-200'>
                    
                </div>
            </div>

            {/* Similar Products */}
            <div className='px-10 pb-5'>
                <SectionHeading title={'Similar Products'} />
                <div className='py-5 px-10 flex flex-wrap gap-16'>
                    {similarProducts?.map((item, index) => (
                        // console.log(item)
                        <ProductCard key={index} {...item} />
                    ))}   
                    {!similarProducts?.length && <p className='w-fit text-gray-500 text-lg'>No Products Found!</p>}                     
                </div>
            </div>
        </div>
        
    )
}

export default ProductDetails