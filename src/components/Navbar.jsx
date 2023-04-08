import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { headerVariants } from '../utils/motion';

function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const menulinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });


  return (
    <>
      <motion.nav
        initial="hidden"
        animate="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.05 }}
        className={`fixed w-full z-[999] border-white border-0 md:p-0 p-1 mt-1.5 ${sticky ? "bg-white text-gray-900 whitebar" : "text-white"}`}>
        <div className='flex justify-between items-center'>
          <motion.div
            className="md:mx-9 mx-2">
            <h4 className={`${sticky ? "text-3xl fixed top-1 md:top-0" : "text-5xl effect-shine"} font-bold font-Pacifico transition-all`}>ap.</h4>
          </motion.div>
          <div className={` ${sticky ? "bg-white/0" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-l-full`}>
            <ul className='flex items-center justify-center gap-1 text-lg'>
              {
                menulinks?.map((menu, i) => (
                  <li key={i} className=" relative px-5 hover:text-cyan-600 group">
                    <a href={menu?.link}>{menu?.name}</a>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-1/3 transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-1/3 transition-all"></span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div
            onClick={() => { setOpen(!open) }}
            className={`z-[999] ${open ? "hidden" : "block"} text-4xl md:hidden flex items-center md:mx-9 mx-1`}>
            <ion-icon name="reorder-three-outline"></ion-icon>
          </div>
          <div
            onClick={() => { setOpen(!open) }}
            className={`z-[999] ${open ? "block" : "hidden"} text-4xl text-gray-900 md:hidden flex items-center md:mx-9 mx-1`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/*  */}
          <div className={` ${open ? "right-0" : "right-[-100%]"} duration-500 text-gray-900 md:hidden absolute bg-white/95 -m-5 top-0 right-0 bottom-0 w-2/3 navheight`}>
            <ul className='flex flex-col justify-center items-start h-full gap-10 py-2 px-9 text-xl font-bold'>
              {
                menulinks?.map((menu, i) => (
                  <li key={i} className="hover:text-cyan-600 group px-6 " onClick={() => { setOpen(!open) }}>
                    <a href={menu?.link}>{menu?.name}</a>
                    <span className="absolute top-200 left-10 w-0 h-1 bg-gray-900 group-hover:w-2/5 transition-all"></span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        {/* </nav> */}
      </motion.nav>
    </>
  )
}

export default Navbar