"use client"

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './DotButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type SlideContent = {
  words: Array<{ text: string; color: string }>
  description: string
}

type SlideType = {
  id: number
  image: string
  content: SlideContent
}

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 })
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
                {/* Text Content Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 flex flex-col items-start justify-end z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
                  {/* Title with colored words */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.content.words.map((word, index) => (
                      <React.Fragment key={index}>
                        <h1
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                          style={{ color: word.color }}
                        >
                          {word.text}
                        </h1>
                        {index < slide.content.words.length - 1 && (
                          <div
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-white/80"
                            aria-hidden="true"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  {/* Description */}
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium max-w-2xl sm:max-w-3xl leading-relaxed drop-shadow-lg text-left">
                    {slide.content.description}
                  </p>
                </div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-30">
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
