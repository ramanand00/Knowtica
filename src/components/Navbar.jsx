import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarRef = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop <= 0) {
        // Top of the page
        gsap.to(navbarRef.current, {
          height: '70px',
          width: '80%',
          paddingTop: '20px',
          paddingBottom: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          duration: 0.1,
          ease: 'power2.out',
        });
      } else if (scrollTop > lastScrollTop.current) {
        // Scrolling down
        gsap.to(navbarRef.current, {
          height: '50px',
          width: '60%',
          paddingTop: '10px',
          paddingBottom: '10px',
          backgroundColor: '#808080',
          borderRadius: '20px',
          duration: 0.1,
          ease: 'power2.out',
        });
      } else {
        // Scrolling up
        gsap.to(navbarRef.current, {
          height: '70px',
          width: '80%',
          paddingTop: '20px',
          paddingBottom: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          duration: 0.1,
          ease: 'power2.out',
        });
      }

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] text-white flex justify-between items-center px-10 h-20 shadow-lg z-50 transition-all duration-300 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px' }}
    >
      <div className="text-2xl font-bold">Knowtica</div>
      <nav className="flex items-center space-x-6">
        <Link to="/components" className="hover:underline">Components</Link>
        <Link to="/docs" className="hover:underline">Docs</Link>
        <Link to="/templates" className="hover:underline">Templates</Link>
        <Link to="/blogs" className="hover:underline">Blogs</Link>
      </nav>
    </header>
  );
};

export default Navbar;
