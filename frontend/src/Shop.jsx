import React, { useEffect } from 'react'
import HeroSection from './assets/components/HeroSection/HeroSection'
import NewArrivals from './assets/components/Sections/NewArrivals'
import Category from './assets/components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './assets/components/Footer/Footer'
import fetchCategories from './api/fetchCategories'
import { useDispatch } from 'react-redux'
import { loadCategories } from './assets/store/features/category'
import { setLoading } from './assets/store/features/common'

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        fetchCategories().then(res => {
            dispatch(loadCategories(res));
        }).catch(err => {
            
        }).finally(() => {
            dispatch(setLoading(false));
        })
    }, [dispatch]);

    return (
        <div>
            <HeroSection />
            <NewArrivals />
            {content?.categories && content?.categories?.map((item, index) =>
                <Category key={item?.title + index} {...item}  />
            )}
            <Footer content={content?.footer} />
        </div>
    )
}

export default Shop