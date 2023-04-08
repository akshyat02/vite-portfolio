import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

import hero from '../assets/hero.jpg';
import { fadeIn, staggerContainer } from '../utils/motion';


function Hero() {
  const socials = [
    { name: 'logo-linkedin', link: 'https://linkedin.com/in/akshyat02' },
    { name: 'logo-twitter', link: 'https://twitter.com/akshyat02' },
    { name: 'logo-instagram', link: 'https://instagram.com/akshyat02' },
    { name: 'logo-facebook', link: 'https://fb.com/akshyat02' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.7,
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    }
  }

  const item = {
    hidden: {
      x: 0,
      y: 100,
      scale: 0, opacity: 0
    },
    show: {
      x: 0, y: 0,
      scale: 1, opacity: 1,
      transition: {
        type: "tween",
        ease: "backOut",
      },
    }
  }

  return (
    <section
      id="home"
      className='herosection min-h-screen flex md:flex-row-reverse flex-col py-10 border-0 border-white items-center'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.05 }}
        className='md:flex-1 w-3/4 overflow-hidden h-30'>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="person group">
          <img src={hero} alt="HERO.alt" srcset="" className='hover:shadow-lg w-30 blob no-repeat ease-in-out duration-500 opacity-90 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-110' />
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.05 }}
        className="flex-1 md:text-left md:ml-20">
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
        >
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-loose text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello!
              <br />
            </span>
            My name is <span className='highlight-container'><span className='highlight'>Akshyat Patra</span></span>.
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          className='text-gray-400'>
          <span>
            <br />
            and I am
          </span>
          <h4 className='md:text-2xl text-xl md:leading-normal leading-loose font-semibold text-gray-300'>
            <TypeAnimation
              sequence={[
                'a Coder',
                1000,
                'a Full Stack Developer',
                1000,
                'a Java Developer',
                1000,
                'a Problem Solver',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em' }}
            />
          </h4>
        </motion.div>
        
        <motion.div
          variants={fadeIn("", "tween", 0.5, 1)}
          initial="hidden"
          animate="show"
          className='mt-10'>
          <a href="#contact" class="px-5 py-2.5 relative rounded-full group font-medium text-white inline-block hover:scale-105 transition-all">
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-cyan-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-cyan-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-cyan-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-cyan-600 from-blue-500"></span>
            <span class="relative">Connect with me</span>
          </a>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className='flex justify-center md:gap-7 gap-8 mt-3 md:justify-start'>
          {
            socials?.map(icon => (
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }} >
                <motion.div
                  variants={item}
                  viewport={{ once: false, amount: 0.005 }}
                  key={icon} className="text-2xl text-gray-200">
                  <a href={icon?.link} target='_blank'>
                    <ion-icon name={icon?.name}></ion-icon>
                  </a>
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      <div className="blur" style={{ background: '#c1f5ff', width:'22rem', top:'-5%', animation: 'pulse 3s linear infinite'}}></div>
      <motion.div className="blur" style={{ background: '#e2d1f9', top: '25rem', left: '0rem', filter: 'blur(220px)' }}></motion.div>

    </section>
  )
}

export default Hero