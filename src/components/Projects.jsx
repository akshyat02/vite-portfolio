import React from 'react';
import ProjectCard from './ProjectCard';
import cal from './thumbnail/calculator.jpg'
import we from './thumbnail/weather.jpg'
import what from './thumbnail/whatsmytext.jpg'
import wor from './thumbnail/worldtime.jpg'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Calculator',
      imageSrc: cal,
      link: 'https://akshyat02.github.io/calculator'
    },
    {
      id: 2,
      title: 'Weather',
      imageSrc: we,
      link: 'https://akshyat02.github.io/weather'
    },
    {
      id: 3,
      title: 'WorldTime',
      imageSrc: wor,
      link: 'https://akshyat02.github.io/world-time'
    },
    {
      id: 4,
      title: 'WhatsMyText',
      // imageSrc: 'https://picsum.photos/id/3/300/200',
      imageSrc: what,
      link: 'https://akshyat02.github.io/whatsmytext'
    },
    // add more projects as needed
  ];
  return (
    <>
      <section id="projects" className='flex flex-col pt-10 text-white justify-center md:justify-start '>
        <div className='text-center mt-8 md:text-start md:text-4xl md:ml-20 mx-10'>
          <h3 className='md:text-5xl text-3xl md:leading-normal leading-loose text-white font-bold'>
            <span className='text-cyan-600'>My </span>
            Projects
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-16 mt-4 ">
          {projects.map(project => (
            <ProjectCard key={project.id} title={project.title} description={project.description} imageSrc={project.imageSrc} link={project.link} />
          ))}
        </div>
        
      </section>
    </>
  )

}

export default Projects