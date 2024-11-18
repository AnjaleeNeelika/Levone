import React from 'react'

const Footer = ({content}) => {
    return (
        <div className='bg-black w-full text-white'>
            <div className='flex p-8 justify-between gap-10'>
                {content?.items && content?.items?.map((item, index) => {
                    return (
                        <div className='flex flex-col'>
                            <p>{item?.title}</p>
                            {item?.list && item?.list?.map((listItem, index) => 
                                <a href={listItem?.path} className='flex flex-col'>
                                    {listItem?.label}
                                </a>
                            )}
                        </div>
                    )
                })}
            </div>
            <p className='text-sm text-white text-center content-center'>
                {content?.copyright}
            </p>
        </div>
    )
}

export default Footer