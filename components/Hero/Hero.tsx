import Carousel from './Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../../styles/embla.css'

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true,
}

type SlideContent = {
  words: Array<{ text: string; color: string }>
  description: string
}

const SLIDES = [
  {
    id: 1,
    image: '/assets/hero/h1.webp',
    content: {
      words: [
        { text: 'Inspire', color: '#FFD700' }, // yellow
        { text: 'Ignite', color: '#FF69B4' }, // pink
        { text: 'Connect', color: '#50C878' }, // green
      ],
      description:
        'A welcoming community that inspires possibilities, connects people, and ignites learning!',
    },
  },
  {
    id: 2,
    image: '/assets/hero/h2.webp',
    content: {
      words: [
        { text: 'Learn', color: '#4A90E2' }, // blue
        { text: 'Grow', color: '#FF6B6B' }, // red
        { text: 'Thrive', color: '#9B59B6' }, // purple
      ],
      description:
        'Empowering young minds to learn, grow, and thrive in a nurturing environment filled with creativity and joy.',
    },
  },
  {
    id: 3,
    image: '/assets/hero/h3.webp',
    content: {
      words: [
        { text: 'Explore', color: '#FFA500' }, // orange
        { text: 'Discover', color: '#00CED1' }, // turquoise
        { text: 'Excel', color: '#9370DB' }, // medium purple
      ],
      description:
        'Creating opportunities for children to explore their interests, discover their passions, and excel in their unique journey of growth.',
    },
  },
]

const Hero = () => {
  return (
    <Carousel slides={SLIDES} options={OPTIONS} />
  )
}

export default Hero