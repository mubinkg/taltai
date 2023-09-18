import React from 'react'
import ServiceUserComment from './ServiceUserComment'

const Service = () => {
  return (
    <div className='container mx-auto mt-10'>
        <div className='flex justify-between items-center'>
            <h2 className='text-5xl font-semibold'>
            Our Services made for you
            </h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='flex justify-between'>
            <ServiceUserComment/>
            <ServiceUserComment/>
            <ServiceUserComment/>
        </div>
    </div>
  )
}

export default Service