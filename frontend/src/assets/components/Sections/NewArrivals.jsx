import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skirt from '../../images/white-skirt.jpg'
import YellowSweater from '../../images/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall.jpg'
import Blouses from '../../images/blouses-1.jpg'
import MaroonShirt from '../../images/Signature-maroon-log-sleeved-shirt.jpg'
import BrownSaree from '../../images/brown-indian-saree.jpg'
import './NewArrivals.css'


const items = [{
    title: 'Skirts',
    imagePath: Skirt,
}, {
    title: 'Hoodies and Sweatshirts',
    imagePath: YellowSweater,
}, {
    title: 'Blouses',
    imagePath: Blouses,
}, {
    title: 'Shirts',
    imagePath: MaroonShirt,
}, {
    title: 'Sarees',
    imagePath: BrownSaree,
}]


const NewArrivals = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1510 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1510, min: 1240 },
          items: 4
        },
        tablet1: {
          breakpoint: { max: 1240, min: 940 },
          items: 3
        },
        tablet2: {
            breakpoint: { max: 940, min: 640 },
            items: 2
          },
        mobile1: {
          breakpoint: { max: 640, min: 520 },
          items: 1.5
        },
        mobile2: {
            breakpoint: { max: 520, min: 0 },
            items: 1
        },
    };


    return (
        <div className='m-10'>
            <SectionHeading title={'New Arrivals'} />
            <Carousel 
                responsive={responsive} 
                className='w-full py-3 px-8 mx-5'
                itemClass='react-slider-custom-item'
            >
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </Carousel>            
        </div>
    )
}

export default NewArrivals