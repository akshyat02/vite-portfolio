import React from 'react'
import Lottie from "lottie-react";

import javalogo from "../assets/logo/javalogo.json";
import reactlogo from "../assets/logo/reactlogo.json";
import flutterlogo from "../assets/logo/flutterlogo.json";
import nodelogo from "../assets/logo/nodelogo.json";
import pythonlogo from "../assets/logo/pythonlogo.json";
import gitlogo from "../assets/logo/gitlogo.json";
import figmalogo from "../assets/logo/figmalogo.json";
import htmllogo from "../assets/logo/htmllogo.json";
import csslogo from "../assets/logo/csslogo.json";
import jslogo from "../assets/logo/jslogo.json";
import phplogo from "../assets/logo/phplogo.json";
import sqllogo from "../assets/logo/sqllogo.json";

function Skills() {
    const skill = [
        {},
    ]
    return (
        <section id="skills" className=' relative flex flex-col text-white pt-10 mb-2 justify-center md:justify-start'>
            <div className='text-center mt-8 md:text-start md:text-4xl md:ml-20 mx-10'>
                <h3 className='md:text-5xl text-3xl md:leading-normal leading-loose text-white font-bold'>
                    <span className='text-cyan-600'>My </span>
                    Skills
                </h3>
            </div>
            <div className='relative '>
                <div class="custom-shape-divider-bottom-1678254480">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-top-1678254989">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,256L80,256C160,256,320,256,480,240C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg> */}
                <div class="grid md:grid-cols-6 gap-5 grid-cols-4 bg-white px-2 my-4 md:my-8">
                    <div>
                        <Lottie animationData={javalogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={reactlogo} loop={true}></Lottie>
                    </div>
                    <div className="rounded-full scale-75">
                        <Lottie animationData={flutterlogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={nodelogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={pythonlogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={gitlogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={figmalogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={htmllogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={csslogo} loop={true}></Lottie>
                    </div>
                    <div className='scale-90'>
                        <Lottie animationData={jslogo} loop={true}></Lottie>
                    </div>
                    <div className='scale-75'>
                        <Lottie animationData={phplogo} loop={true}></Lottie>
                    </div>
                    <div>
                        <Lottie animationData={sqllogo} loop={true}></Lottie>
                    </div>
                </div>
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,250.7C480,277,600,235,720,213.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg> */}
            </div>
        </section>
    )
}

export default Skills