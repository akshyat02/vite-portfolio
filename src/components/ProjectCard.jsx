import React from 'react';
// import imag from './thumbnail/calculator.jpg'

const ProjectCard = ({ imageSrc, title, link }) => {
    return (
        <a href={link} target='_blank'>
            <div className="max-w-sm mx-auto group">
                <div className="bg-white group-hover:bg-transparent group-hover:border-4 group-hover:border-y-4 group-hover:p-1 group-hover:border-gray-50 shadow-lg rounded-lg overflow-hidden p-2 transition ease-in-out duration-300">
                    <div className="opacity-90 group-hover:opacity-1 group-hover:scale-105 transition ease-in-out duration-300">
                        <img className="w-full h-48 object-cover rounded-lg" src={imageSrc} alt={title} />
                        {/* <img className="w-full h-48 object-cover rounded-lg" src={imag} alt={title} /> */}
                        {/* {console.log(imageSrc)} */}
                    </div>
                    <div className="py-4 px-6">
                        <h1 className="lg:text-2xl text-xl font-semibold text-gray-800 group-hover:text-white transition ease-in-out duration-300">{title}</h1>
                    </div>

                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
