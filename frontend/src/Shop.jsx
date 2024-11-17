import React from 'react'
import NavigationBar from './assets/components/Navigation/NavigationBar'
import HeroSection from './assets/components/HeroSection/HeroSection'
import NewArrivals from './assets/components/Sections/NewArrivals'
import Category from './assets/components/Sections/Categories/Category'
import content from './data/content.json'

const Shop = () => {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <NewArrivals />
        <Category title={content?.categories[0]?.title} data={content?.categories[0]?.data} />
    </div>
  )
}

export default Shop