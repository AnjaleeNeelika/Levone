import React from 'react'
import propTypes from 'prop-types'

const SectionHeading = ({title}) => {
    return (
        <div className='flex flex-wrap px-5 my-5 items-center gap-4'>
            <div className='border rounded-full bg-black w-2 h-16'></div>
            <p className='text-3xl'>{title}</p>
        </div>
    )
}

// SectionHeading.defaultProps = {

// }

// SectionHeading.propTypes = {
//     title:String
// }

export default SectionHeading