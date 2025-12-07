import React from 'react'
import CompareImage from './ui/CompareImage'

const ImageComprison = () => {
  return (
    <div className='w-full h-fit rounded-2xl relative overflow-hidden text-sm md:text-2xl font-montserrat'>
      <CompareImage />
      <h1 className='bg-yellow-400 md:px-4 md:py-3 px-2  absolute top-0 left-0 z-2 '>Before</h1>
      <h1 className='bg-yellow-400 md:px-4 md:py-3 px-2  absolute top-0 right-0 z-2 '>After</h1>
    </div>
  )
}

export default ImageComprison