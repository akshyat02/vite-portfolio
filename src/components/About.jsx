import React from 'react'
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer, textVariant, zoomIn } from '../utils/motion';
import aboutme from "../assets/aboutme.json";


function About() {

  const para1 = "I'm a computer science undergraduate with a passion for full stack development and problem solving using Java. I enjoy building end-to-end applications and have a strong foundation in programming languages. I'm always eager to learn and keep myself up-to-date with the latest trends in the field.";

  const para2 = "With a strong problem-solving mindset and dedication to my work, I believe that I can make valuable contributions to any team. I am committed to continuous growth and development, and am excited to take on new challenges in the field of computer science.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      }
    }
  }
  const letter = {
    hidden: {
      opacity: 0, y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  }


  return (
    <section id="about" className='flex flex-col md:h-screen text-white py-10 justify-center md:justify-start md:ml-20 m-10' >
      <div className='text-center mt-8 md:text-start md:text-4xl'>
        <h3 className='md:text-5xl text-3xl md:leading-normal leading-loose text-white font-bold'>About
          <span className='text-cyan-600'> Me</span>
        </h3>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, }}
        className='flex md:flex-row flex-column'>
        <div className='flex md:flex-row flex-col'>
          <div className='flex-1 text-left mt-5'>
            <div className='paras'>
              <motion.p
                variants={sentence}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, }}
                className='load-screen--message md:text-lg text-sm mb-3'>
                {
                  para1.split("").map((char, index) => (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}>
                      {char}
                    </motion.span>
                  ))
                }
                <br />
                <br />
                {
                  para2.split("").map((char, index) => (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}>
                      {char}
                    </motion.span>
                  ))
                }
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("", "tween", 0, 0.8)}
              initial="hidden"
              whileInView="show"
              className='mt-3'>
              <a href="https://drive.google.com/file/d/1EvHjNGghxGjKBwg8N2YVHVmU705OR2oM/view?usp=sharing" target='_blank' download class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Download my CV</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={zoomIn(0.2, 0.6)}
            initial="hidden"
            animate="show"
            className='flex-1'>
            <Lottie animationData={aboutme} loop={true}></Lottie>
          </motion.div>

        </div>

      </motion.div>
      {/* <div className="blur animate-pulse" style={{ background: "linear-gradient(to left, #c973ff, #aebaf8 );", top: '60rem', filter: 'blur(200px)' }}></div> */}

    </section >
  )
}

export default About