import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { skills,experiences } from '../constants'

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
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
          <p>
            I've worked as a web developer for the past 3 years. I have experience in building web
             applications using JavaScript, React, and Node.js.Here's a brief overview of my work experience:
          </p>
    </div>

    <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
              <VerticalTimelineElement
              key = {experience.company_name}
              date={experience.date}
              icon={<div className="flex justify-center items-center w-full h-full">
                <img 
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
                />
              </div>}
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow:'none',
              }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                    <p className="text-black-500 font-medium font-base "style={{margin:0}}></p>
                  </h3>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
                  ))
                }
                </ul>
              </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
    </div>
        </div>

   </section>
  )
}

export default About