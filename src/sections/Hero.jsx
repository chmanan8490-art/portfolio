import React from 'react'
import IMg from "../assets/hero-bg.jpg";
import { Button } from '../components/Button';
import { BiArrowToRight } from 'react-icons/bi';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { FaDownload, FaFacebook } from 'react-icons/fa';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import haseebblack from "../assets/hp.png";
import { BiChevronDown } from 'react-icons/bi';
const skills = [
  "React",
  "Javascript",
  "Html",
  "Node.js",
  "Css",
  "Bootstrap",
  "Tailwind Css",
  "Wordpress",
  "PHP",
  "Communication",
  "Vercel",
  "Speaking English",
  "Figma",
  "Git",
  "GitHub Actions",
];


const Hero = () => {
  return (
   
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* BG */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      src={IMg}
      alt="Hero image"
      className="h-full w-full object-cover opacity-40"
    />
  </div>

  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 via-background/80 to-background" />

  {/* green dots */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        style={{
          backgroundColor: "#20B2A6",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
animation:`slow-drift ${15+Math.random()*20}s ease-in-out infinite`,
animationDelay:`${Math.random()*5}s`,

        }}
      />
    ))}
  </div>

  {/* your content */}
 <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
    {/* left column  Text Content*/}
    <div className='space-y-8'>
      <div className='animate-fade-in'>
        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full
        glass text-sm  text-primary'>
        <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>Software Engineer.Mern Stack Developer
        </span>
      </div>
      {/* headlines */}
      <div className='space-y-4 '>
        <h1 className='text-5xl md:text-6xl lg:text-7xl
        animate-fade-in font-bold leading-tight animation-delay-100'>Web <span className='text-primary glow-text '>Developer</span>
        <br />
        Experience 
        <br />
        <span className='font-serif italic  front-normal text-white'>
          Pericision
        </span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300'>
          Passionate MERN Stack Developer with experience in building modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in creating clean UI, REST APIs, authentication systems, and full-stack projects with a focus on performance and user experience.

        </p>
      </div>
      {/* CTA */}
      <div className='flex items-center gap-2'>
      <div className='flex flex-col sm:flex-row items-center gap-4'>
<Button
  size="lg"
  id="contact-btn"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Contact Me
  <BiArrowToRight className='w-5 h-5' />
</Button>

<a href="/manancv.pdf" download="manancv.pdf">
  <AnimatedBorderButton>
    <FaDownload className='w-5 h-5 mr-2' />
    Download CV
  </AnimatedBorderButton>
</a>
</div>
      </div>
      {/* social links */}
    <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
  <span className='text-sm text-muted-foreground'>Follow:</span>
  {[
    { icon: BsGithub, href: "https://github.com/mhaseeb6662-spec" },
    { icon: LiaLinkedin, href: "https://www.linkedin.com/in/abdul-manan-1a6a93378/" },
   {
  icon: BsWhatsapp,
  href: "#"
},
     { icon: FaFacebook, href: "#" },
  ].map((social, idx) => {
    const Icon = social.icon; // assign component
    return (
      <a key={idx} href={social.href} className='p-2 rounded-full glass
       hover:bg-primary/10 hover:text-primary transition-all duration-300'>
        <Icon className='w-5 h-5' />
      </a>
    );
  })}
</div>

    </div>
    {/* right column  Profile image*/}
    <div>
      {/* profile images */}
      <div className='relative animate-fade-in animation-delay-300'>
        <div className='relative max-w-lg  mx-auto'>

           <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
          <div className='relative glass rounded-3xl p-2 glow-border'>
          <img src={haseebblack} alt="" className='w-full aspect-[4/5]
          object-cover rounded-2xl' />
          {/* floadting Badge */}
          <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 
          animate-float'>
            <div className='flex items-center gap-3'>
            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
            <span className='text-sm font-medium'>Available For Work</span>
            </div>
          </div>
          {/* Status badge */}
          <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float
          animation-delay-500'>
            <div className='text-2xl text-bold text-primary'>+1</div>
            <div className='text-xs text-muted-foreground'>Years Exp.</div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* skill section */}
  <div className='mt-20 animate-fade-in animation-delay-600'>
    <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies i work with</p>
  </div>
  <div className='relative overflow-hidden'>
  <div className='flex  animate-marquee' >
    {[...skills,...skills].map((skills,idx)=>(
      <div key={idx} className='flex-shrink-0 px-8 py-4'>
        <span className='text-xl font-semibold text-muted-foreground/50
         hover:text-muted-foreground transition-colors'>{skills}</span>
      </div>
    ))}
  </div>
  </div>
  {/* scroll */}
   <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <BiChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
 </div>
</section>
  )
}

export default Hero
