import React from 'react'
import NavigationBar from './assets/components/Navigation/NavigationBar'
import HeroSection from './assets/components/HeroSection/HeroSection'
import NewArrivals from './assets/components/Sections/NewArrivals'
import Category from './assets/components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './assets/components/Footer/Footer'

const Shop = () => {
  return (
    <div>
        <NavigationBar />
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