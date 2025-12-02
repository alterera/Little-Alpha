"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Welcome = () => {
  // Animation variants for text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  // Waving animation for hand - using animate prop directly

  return (
    <div className='bg-[#FEFFEF] relative overflow-hidden'>
      <motion.div
        animate={{
          rotate: [0, 14, -8, 14, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: 2,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
        className="absolute z-0 top-20 sm:top-32 md:top-40 left-4 sm:left-10 md:left-20 opacity-10"
      >
        <Image
          src={'/assets/shapes/hand.svg'}
          height={400}
          width={400}
          alt='hand'
          className='w-82 h-82 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80'
        />
      </motion.div>
      <div className='flex flex-col lg:flex-row z-10'>
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col justify-center max-w-7xl mx-auto lg:mx-0'
        >
          <motion.h2
            variants={itemVariants}
            className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-4 sm:pb-5 md:pb-6 uppercase text-[#0F715F]'
          >
            Welcome to Little Alpha
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className='space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed font-medium'
          >
            <p>
            At Little Alpha, education is more than academics — it's a journey of growth, curiosity, and discovery. Our mission is to offer holistic learning that seamlessly brings together academic excellence, strong values, and innovative thinking. We are committed to nurturing young minds who can think critically, act responsibly, and grow into compassionate, globally aware citizens.
              <br/><br/>
              At Little Alpha, holistic development is our priority. Through the integration of essential 21st-century skills, we ensure that every learner grows not just academically, but emotionally, socially, and creatively. Because here, every child is an Alpha - confident, curious, and ready to lead.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='mt-6 sm:mt-8 md:mt-10 flex gap-2 items-baseline'
          >
            <div className='h-8 w-8 bg-pink-400 rounded-tr-full'></div>
            <Link href={'/about'} className="hover:text-[#0F715F] transition-colors font-semibold">
              Read More
            </Link>
          </motion.div>
        </motion.div>

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