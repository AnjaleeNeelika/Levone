import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'

const NewArrivals = () => {
    return (
        <div className='my-20 mx-10'>
            <SectionHeading title={'New Arrivals'} />
            <div className='px-20'>
                <Card />
            </div>
            
        </div>
    )
}

export default NewArrivals