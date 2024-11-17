import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

const Category = ({title, data}) => {
    return (
        <div>
            <SectionHeading title={title} />
            {data && data?.map((item, index) => {
                return (
                    <Card title={item?.title} description={item?.description} imagePath={item?.image} actionArrow={true} />
                )
            })}
        </div>
    )
}

export default Category