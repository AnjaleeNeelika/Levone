import React from 'react'

const Categories = ({types}) => {
    return (
        <div>
            {types?.map((type) => {
                return (
                    <div className='flex items-center gap-2 py-1 px-3 text-gray-500'>
                        <input type="checkbox" name={type?.code} id="" className='border rounded-lg w-4 h-4 accent-black text-black hover:cursor-pointer' />
                        <label htmlFor={type?.code}>{type?.name}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories