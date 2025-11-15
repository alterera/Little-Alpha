import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#FEFFEF]'>
      <div className='flex gap-5 h-100'>
          <div className='flex-1'>
              <h2 className='text-4xl font-bold py-5 uppercase'>Little Alpha Play School</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias voluptatem voluptatibus ea deserunt, sunt enim doloremque sed voluptates magnam earum repellat consectetur, aut odit ad blanditiis! Non, similique animi!</p>
              <br />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id rem commodi nulla eaque, iste veniam, ipsam possimus praesentium dolorem ratione, asperiores maxime maiores obcaecati autem! Porro aut nemo iste maiores.</p>

              <button>Read More</button>
          </div>

          <div className='relative flex-1'>
            <Image src={'/assets/campus/welcome.png'} fill alt='little alpha play school welcome' className='object-cover' />
          </div>
      </div>
    </div>
  )
}

export default Welcome