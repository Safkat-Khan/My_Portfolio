import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
   <section className="max-container">
    <h1 className="head-text">
      Hello, I'm a <span className="blue-gradient_text font-semibold drop-shadow">Safkat</span>
    </h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
      <p>
        I am a passionate web developer with a strong interest in building web applications. 
        I have experience in building web applications using JavaScript, React, and Node.js. 
        I am also familiar with the latest web technologies and have a strong understanding of web development. 
        I am a quick learner and always eager to learn new technologies. I am a team player and have experience working in a team environment. 
        I am also a good communicator and have experience working with clients. 
        I am looking for a challenging role where I can use my skills and experience to build web applications.
      </p>
    </div>
    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Skills</h3>

      <div className="mt-16 flex flex-wrap gap-12">
      {skills.map((skill) => (
        <div className="block-container w-20 h-20">
          <div className="btn-back rounded-xl"/>
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img 
            src={skill.imageUrl}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      ))}
      </div>
    </div>

    <div className="py-16">
      <h3 className="subhead-text">Work Exp</h3>
      </div>
   </section>
  )
}

export default About