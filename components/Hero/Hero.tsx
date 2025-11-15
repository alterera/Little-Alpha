import Carousel from './Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../../styles/embla.css'

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true,
}

const SLIDES = [
  {
    id: 1,
    image: '/assets/hero/hero-1.png',
  },
  {
    id: 2,
    image: '/assets/hero/hero-2.png',
  },
]

const Hero = () => {
  return (
    <Carousel slides={SLIDES} options={OPTIONS} />
  )
}

export default Hero