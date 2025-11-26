import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='w-full bg-[#ffe4db] relative overflow-hidden'>
        {/* Decorative Icons - Responsive positioning */}
        <Image 
          src={'/assets/icons/sun.svg'} 
          height={100} 
          width={100} 
          alt='sun' 
          className='absolute right-4 sm:right-8 md:right-12 lg:right-20 top-20 sm:top-32 md:top-40 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-30' 
        />
        <Image 
          src={'/assets/icons/curve.svg'} 
          height={100} 
          width={80} 
          alt='curve' 
          className='absolute right-0 sm:right-4 md:right-8 lg:right-20 top-10 sm:top-16 md:top-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30' 
        />
        <Image 
          src={'/assets/icons/heart.svg'} 
          height={100} 
          width={80} 
          alt='heart' 
          className='absolute left-4 sm:left-8 md:left-12 lg:left-20 top-32 sm:top-48 md:top-60 lg:top-70 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-30' 
        />
        
        <div className='max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
            {/* Header Section */}
            <div className='flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
                  Little Alpha <span className='text-[#0F715F]'>Gallery</span>
                </h2>
                <p className='text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-2xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, veritatis!
                </p>
                <Button 
                  effect="shine" 
                  className='bg-[#f54900] text-white font-semibold hover:bg-[#ff7b08] cursor-pointer hover:shadow-sm mt-2 sm:mt-4'
                >
                    View all glimpses
                </Button>
            </div>

            {/* Gallery Images Section - Responsive */}
            <div className='mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-visible'>
                <div className='relative w-full sm:w-auto flex justify-end'>
                  <Image 
                    src={'/assets/blog-1.png'} 
                    height={400} 
                    width={400} 
                    alt='gallery' 
                    className='rotate-12 w-fit sm:w-[100px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                  />
                </div>
                <div className='relative w-fit sm:w-auto -mt-4 sm:mt-0 sm:-ml-4 md:-ml-6 lg:-ml-8'>
                  <Image 
                    src={'/assets/blog-1.png'} 
                    height={400} 
                    width={400} 
                    alt='gallery' 
                    className='-rotate-10 w-fit sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                  />
                </div>
                <div className='relative w-full sm:w-auto -mt-4 sm:mt-0 sm:-ml-4 md:-ml-6 lg:-ml-8'>
                  <Image 
                    src={'/assets/blog-1.png'} 
                    height={400} 
                    width={400} 
                    alt='gallery' 
                    className='rotate-15 w-fit sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery