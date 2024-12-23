import React, { useCallback, useState } from 'react'

const SizeFilter = ({sizes, hideTitle}) => {

    const [appliedSize, setAppliedSize] = useState([]);

    const onClickSize = useCallback((item) => {
        if(appliedSize.indexOf(item) > -1) {
            setAppliedSize(appliedSize?.filter(size => size !== item));
        } else {
            setAppliedSize([...appliedSize, item]);
        }
    }, [appliedSize, setAppliedSize]);

    return (
        <div className='flex flex-col mb-4'>
            {!hideTitle && <p className='text-[16px] uppercase text-black mt-5 font-semibold'>Size</p>}

            <div className="flex flex-wrap px-2 mt-2 gap-3">
                {sizes?.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-2">
                            <div 
                                className="w-16 h-fit text-center gap-2 px-2 py-1 bg-white text-gray-500 border border-gray-500 rounded-lg shadow mb-1 cursor-pointer hover:outline-2 hover:scale-110 hover:bg-black hover:text-white"
                                style={appliedSize.includes(item) ? {
                                    background: 'black',
                                    color: 'white'
                                } : {}}
                                onClick={() => onClickSize(item)}
                            >{item}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SizeFilter