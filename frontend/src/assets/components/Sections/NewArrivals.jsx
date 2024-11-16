import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
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
    return (
        <div className='my-20 mx-10'>
            <SectionHeading title={'New Arrivals'} />
            <div className='flex flex-row px-20 gap-36 w-fit mt-10'>
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </div>
            
        </div>
    )
}

export default NewArrivals