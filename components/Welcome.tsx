import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#FEFFEF]'>
      <div className='flex gap-5 h-150'>
          <div className='flex-1 pl-35 py-10'>
              <h2 className='text-4xl font-bold pb-5 uppercase'>Little Alpha Play School</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ut! Maiores alias fugit tenetur magnam laborum, distinctio animi reprehenderit iste nihil praesentium ea cum sint, reiciendis voluptatem unde architecto dolorum id a dignissimos! Molestiae numquam quae voluptatum tenetur itaque. Minima nihil possimus asperiores dolor nesciunt accusamus dolores atque quaerat iure neque ex, suscipit, velit at est nostrum ullam repellendus facere. Optio earum minima dolor ullam ad tempora, veniam dolores, aspernatur, sed aut consequuntur voluptatum amet iure illum? Beatae eaque culpa harum necessitatibus tenetur, pariatur doloremque sit et mollitia! Beatae distinctio quaerat, reiciendis consequuntur alias quo rem perferendis sint tempore unde.</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam incidunt cumque quia, praesentium nostrum et architecto sit sunt aliquid voluptates modi officia facilis natus voluptatem eaque, ab cum, vero itaque corrupti doloremque dolor. Eum eligendi nesciunt nihil quisquam similique iure fuga nulla nam veritatis, aspernatur, quam ipsa, et aliquid adipisci quibusdam dolorum error distinctio mollitia reprehenderit? Incidunt autem eveniet sint vero iste voluptatem inventore, provident architecto tempore facilis? Velit, nostrum provident incidunt quidem ipsa voluptatibus quisquam hic dolores. Labore.</p>

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