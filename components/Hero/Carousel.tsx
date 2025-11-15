"use client"

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './DotButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type SlideType = {
  id: number
  image: string
}

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  useEffect(() => {
    if (emblaApi) {
      // Ensure autoplay starts
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <section className="embla w-full mx-auto relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__content relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Hero slide ${slide.id}`}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10">
        <div className="embla__dots flex flex-wrap items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot flex items-center justify-center rounded-full'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
