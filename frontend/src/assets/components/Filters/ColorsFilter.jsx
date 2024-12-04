import React, { useCallback, useState } from 'react'

export const colorSelector = {
    "Black": "#000000",
    "White": "#FFFFFF",
    "Purple": "#8434E1",
    "Gray": "#808080",
    "GrEy": "#808080",
    "Pink": "#FFC0CB",
    "Yellow": "#FFFF00",
    "Green": "#008000",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
}

const ColorsFilter = ({colors}) => {

    const [appliedColors, setAppliedColors] = useState([]);
    const onClickColor = useCallback((item) => {
        if(appliedColors.indexOf(item) > -1) {
            setAppliedColors(appliedColors?.filter(color => color !== item));
        } else {
            setAppliedColors([...appliedColors, item]);
        }
    }, [appliedColors, setAppliedColors]);

    return (
        <div className='flex flex-col mb-4'>
            <p className='text-[16px] uppercase text-black mt-5 font-semibold'>Colors</p>

            <div className="grid grid-cols-4 gap-4 mx-auto px-2 mt-2">
                {colors?.map(item => {
                    return (
                        <div className="flex flex-col items-center justify-center">
                            <div 
                                className="w-8 h-8 border border-gray-200 rounded-lg shadow mb-1 cursor-pointer hover:outline-2 hover:scale-110" 
                                style={{ background: `${colorSelector[item]}` }}
                                onClick={() => onClickColor(item)}
                            ></div>
                            <p className="text-sm text-gray-500 text-center" style={{color: `${appliedColors?.includes(item) ? 'black':''}`}}>{item}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ColorsFilter