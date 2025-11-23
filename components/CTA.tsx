import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <div className='w-full relative'>
      <Image src={'/assets/bg/cta.webp'} fill alt='bg image' className='object-cover'/>

      <div className='flex justify-between'>
        <div>
          <h2>Let your child join the fun with Little Alpha</h2>
          <p>At Little Alpha, our ultimate aim is to ignite critical thinking. We strictly do not promote rote learning inquiry-based learning is the backbone of our methodology. We want every learner to think, explore, and learn.</p>
          <button>Learn More</button>
        </div>

        <div>
          <form>
            <h4>Fill out the form & we will get in touch with you!</h4>
            <p>Enquire about the current educational year. Submit message & our team will get back you.</p>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default CTA