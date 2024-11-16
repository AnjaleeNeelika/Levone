import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skirt from '../../images/white-skirt.jpg'
import YellowSweater from '../../images/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall.jpg'


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
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };


    return (
        <div className='my-20 mx-10'>
            <SectionHeading title={'New Arrivals'} />
            <Carousel responsive={responsive} className='pl-20'>
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </Carousel>            
        </div>
    )
}

export default NewArrivals