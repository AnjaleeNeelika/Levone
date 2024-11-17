import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skirt from '../../images/white-skirt.jpg'
import YellowSweater from '../../images/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall.jpg'
import './NewArrivals.css'


const items = [{
    title: 'Skirt',
    imagePath: Skirt,
}, {
    title: 'Yellow Turtleneck Sweater',
    imagePath: YellowSweater,
}, {
    title: 'Skirt',
    imagePath: Skirt,
}, {
    title: 'Yellow Turtleneck Sweater',
    imagePath: YellowSweater,
}, {
    title: 'Skirt',
    imagePath: Skirt,
}, {
    title: 'Yellow Turtleneck Sweater',
    imagePath: YellowSweater,
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
        tablet: {
          breakpoint: { max: 1240, min: 940 },
          items: 3
        },
        tablet: {
            breakpoint: { max: 940, min: 640 },
            items: 2
          },
        mobile: {
          breakpoint: { max: 640, min: 520 },
          items: 1.5
        },
        tablet: {
            breakpoint: { max: 520, min: 0 },
            items: 1
        },
    };


    return (
        <div className='my-20 mx-10'>
            <SectionHeading title={'New Arrivals'} />
            <Carousel 
                responsive={responsive} 
                className='mx-10 w-full'
                itemClass='react-slider-custom-item'
            >
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </Carousel>            
        </div>
    )
}

export default NewArrivals