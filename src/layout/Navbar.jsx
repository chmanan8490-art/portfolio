import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button';
import { HiMenu, HiX } from "react-icons/hi"; // Heroicons menu icon

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
    const [isScrolled, setisScrolled] = useState(false)
  useEffect(() => {
  const handleScrolled = () => {
    setisScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScrolled);

  return () => {
    window.removeEventListener("scroll", handleScrolled);
  };
}, []);
  
    return (
  <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled
      ? "glass-strong py-3 border-none shadow-none"
      : "bg-transparent py-5 border-none"
  }`}
>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                {/* Logo on the left */}
                <a href="#hero" className='text-xl font-bold tracking-light hover:text-primary'>
                    Ab Manan <span className="text-primary">.</span>
                </a>

                {/* Desktop nav */}

                <div className='hidden md:flex gap-1 items-center'>
                    <div className='glass rounded-full px-3 py-3 flex items-center gap-5'>
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                </div>
                {/* call to action button */}
              <div className='hidden md:flex'>
  <Button
    size="sm"
    onClick={() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact me
  </Button>
</div>
                {/* mobile screen */}
                <button onClick={()=>setisMobileMenuOpen((prev)=>!prev)}
                className='md:hidden p-2 text-foreground'>
{isMobileMenuOpen ? < HiX size={24}/> :<HiMenu size={25}/>}
                </button>
            </nav>
            {/* mobile menu code */}

            {isMobileMenuOpen && (<div className='md:hidden glass-strong animate-fade-in'>
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                       {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className='text-lg text-muted-foreground hover:text-foreground py-2'
                        >
                            {link.label}
                            
                        </a>
                    ))}
                     <Button size="sm">Contact me</Button>
                </div>
                

            </div>)}
        </header>
    )
}

export default Navbar