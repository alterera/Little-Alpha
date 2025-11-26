import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#FEFFEF]'>
      <div className='flex flex-col lg:flex-row'>
        {/* Text Content */}
        <div className='flex-1 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col justify-center max-w-7xl mx-auto lg:mx-0'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-4 sm:pb-5 md:pb-6 uppercase text-[#0F715F]'>
            Little Alpha Play School
          </h2>
          <div className='space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ut! Maiores alias fugit tenetur magnam laborum, distinctio animi reprehenderit iste nihil praesentium ea cum sint, reiciendis voluptatem unde architecto dolorum id a dignissimos! Molestiae numquam quae voluptatum tenetur itaque. Minima nihil possimus asperiores dolor nesciunt accusamus dolores atque quaerat iure neque ex, suscipit, velit at est nostrum ullam repellendus facere. Optio earum minima dolor ullam ad tempora, veniam dolores, aspernatur, sed aut consequuntur voluptatum amet iure illum? Beatae eaque culpa harum necessitatibus tenetur, pariatur doloremque sit et mollitia! Beatae distinctio quaerat, reiciendis consequuntur alias quo rem perferendis sint tempore unde.
            </p>
          </div>
          {/* <button className='mt-6 sm:mt-8 md:mt-10 bg-[#0C7C55] hover:bg-[#0a6b4a] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 w-fit text-sm sm:text-base'>
            Read More
          </button> */}

          <div className='mt-6 sm:mt-8 md:mt-10 flex gap-2 items-baseline'>
            <div className='h-8 w-8 bg-pink-400 rounded-tr-full'></div>
            <Link href={'/'}>Read More</Link>
          </div>
        </div>

        {/* Image - Full width from middle to right */}
        <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[500px] xl:min-h-[600px]'>
          <Image 
            src={'/assets/campus/welcome.png'} 
            fill 
            alt='little alpha play school welcome' 
            className='object-cover' 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome