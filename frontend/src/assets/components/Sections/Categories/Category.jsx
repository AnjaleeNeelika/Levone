import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import image from '../../../images/pink-women-hoodie.jpeg'
import Card from '../../Card/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const Category = ({title, data}) => {
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
        <div className='mx-10 my-20'>
            <SectionHeading title={title} />
            <Carousel 
                responsive={responsive} 
                className='w-full py-3 px-8 mx-5'
                itemClass='react-slider-custom-item'
            >
                {data && data?.map((item, index) => {
                    return (
                        <Card key={index} title={item?.title} description={item?.description} imagePath={item?.image} actionArrow={true} width="240px" height="300px" />          
                    )
                })}
            </Carousel>  
        </div>
    )
}

export default Category