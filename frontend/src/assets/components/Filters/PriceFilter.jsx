import React, { useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css';

const PriceFilter = () => {

    const [range, setRange] = useState({
        min:50,
        max:250
    })

    return (
        <div className='flex flex-col'>
            <p className='text-[16px] uppercase text-black mt-5 font-semibold'>Price</p>
            <RangeSlider className={'custom-range-slider mt-3'} min={0} max={500} defaultValue={[range.min, range.max]} onInput = {(values) => setRange({
                min:values[0],
                max:values[1]
            })} />

            <div className='flex justify-between gap-5 mt-4 text-gray-500'>
                <div className='w-[100px] p-2 border rounded-md flex items-center justify-center gap-1'>
                    <p>$</p>
                    <input type="number" name="" id="" value={range.min} disabled className='w-full bg-transparent' />
                </div>
                <div className='w-[100px] p-2 border rounded-md flex items-center justify-center gap-1'>
                    <p>$</p>
                    <input type="number" name="" id="" value={range.max} disabled className='w-full bg-transparent' />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter