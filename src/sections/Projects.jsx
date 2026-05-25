import React from 'react';
import project1Img from '../assets/pos.png';
import project3Img from '../assets/trading.png';
import project2Img from '../assets/invoice.png';
import { BsArrowUpRight } from 'react-icons/bs';
import { DiGithub } from 'react-icons/di';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const projects = [
  {
    title: "POS",
     descreption: "Modern POS application with 4 pages: Admin for products, Billing, Expense tracking, and Sales records",
    image: project1Img,
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://sunny-pasca-9d6cd2.netlify.app//",
  
  },
  {
    title: "Invoice Generating App",
     descreption: "Modern invoice generation tool with paid invoice features, client management, automatic calculations, and organized record keeping for easy tracking.",
    image: project2Img,
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://spiffy-bombolone-0ccece.netlify.app/",

  },
  {
    title: "Trading Web App",
    descreption: "Modern decentralized trading platform with live market tracking, real-time trading, token swaps, and advanced analytics for seamless crypto trading.",
    image: project3Img,
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://majestic-bubblegum-e59f83.netlify.app//",
   
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Feature Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that <span className='font-serif italic font-normal text-white'>make an impact</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            This section showcases my recent projects, highlighting my skills, creativity, problem-solving, and expertise in full stack web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                  <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* overlay links */}
              <div
  className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 
  group-hover:opacity-100 transition-opacity duration-200'
>
  <a
    href={project.link}
    className='p-3 rounded-full glass hover:bg-primary
    hover:text-primary-foreground transition-all'
  >
    <BsArrowUpRight className='h-6 w-6' />
  </a>
</div>
              </div>
              {/* content */}
               <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <BsArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.descreption}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              
             
            </div>
          ))}
        </div>
        {/* view all cta */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            View All the Projects
            <BsArrowUpRight className='w-6 h-5'/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;