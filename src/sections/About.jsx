import React from 'react'
import { BiCode } from 'react-icons/bi'
import { BiRocket } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BsLightbulb } from 'react-icons/bs'
const highlights=[
  {
    icon:BiCode,
    title:"Clean Code",
  description: "Readable, organized, maintainable, reusable, efficient, consistent, scalable, simple, structured, optimized"
  },
  {
    icon: BiRocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: BiUser,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: BsLightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
]
const About = () => {
  return (
  <section id='about' className='py-32 relative overflow-hidden'>
  <div className='flex'>
    <div className='mx-auto container px-6 relative z-10'>
      {/* left and right columns wrapper */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

        {/* left column */}
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            Building Future,
            <span className='font-serif italic font-normal text-white'>One Component at a time</span>
          </h2>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>
              I am a passionate full stack developer and software engineer with 1+ year experience, focused on MERN stack, problem solving, building web applications, writing maintainable code, and exploring new technologies.
            </p>
            <p>
              I am specialized in Tailwind CSS, React JS, Firebase, and modern frontend development, while also learning backend MERN stack technologies, APIs, databases, authentication, and server-side development.
            </p>
            <p>
              When I am coding, I explore new technologies, experiment with different frameworks, and continuously learn new concepts. I enjoy solving problems, improving my skills, building creative projects, discovering best practices, and staying updated with the latest trends in web development and software engineering.
            </p>
          </div>
          <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
            <p className='text-lg font-medium italic text-foreground'>
              My mission is to become one of the top developers in Pakistan and eventually work at Google. I aim to continuously improve my skills, master the MERN stack, solve complex problems, build innovative and high-quality web applications, explore new technologies, and contribute to impactful projects that drive efficiency, creativity, and user satisfaction.
            </p>
          </div>
        </div>

        {/* right column */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {highlights.map((item, idx) => (
            <div key={idx} className='glass p-6 rounded-2xl animate-fade-in' style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className='w-12 h-12 rounded-xl bg-primary/10 flex justify-center items-center mb-4 hover:bg-primary/200'>
                <item.icon className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
  )
}

export default About
