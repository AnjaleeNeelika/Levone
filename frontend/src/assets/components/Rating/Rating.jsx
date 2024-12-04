import React, { useMemo } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import { IoStar } from 'react-icons/io5';

const Rating = ({ rating }) => {
    const ratingNumber = useMemo(() => {
        return Array(Math.floor(Number(rating))).fill();
    }, [rating]);

    return (
        <div className='flex items-center gap-1.5'>
            {ratingNumber?.map((_, index) => (
                <BsStarFill key={index} className='text-yellow-400' />
            ))}
            {
                new Array(5 - ratingNumber?.length).fill().map((_, index) => (
                    <BsStarFill key={'empty-' + index} className='text-gray-300' />
                ))
            }
            <p className='px-3 text-gray-500'>{rating}</p>
        </div>
    )
}

export default Rating