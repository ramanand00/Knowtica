import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#222] text-[#eee] px-5 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-between">
        
        {/* About Us */}
        <div className="min-w-[220px] flex-1">
          <h3 className="text-[#ff6f61] text-lg font-semibold mb-4">About Us</h3>
          <p className="text-[#ccc] leading-relaxed">
            We are dedicated to providing the best content and resources for our users. 
            Stay connected and enjoy our services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="min-w-[220px] flex-1">
  <h3 className="text-[#ff6f61] text-lg font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-[#ccc]">
    {[
      { name: 'Home', path: '/' },
      { name: 'Docs', path: '/docs' },
      { name: 'Blog', path: '/blogs' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
    ].map(link => (
      <li key={link.name}>
        <Link
          to={link.path}
          className="hover:text-[#ff6f61] transition-colors duration-300"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* Contact Us */}
        <div className="min-w-[220px] flex-1">
          <h3 className="text-[#ff6f61] text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-[#ccc] mb-2">Email: SoftRiseup@gmail.com</p>
          <p className="text-[#ccc] mb-2">Phone: +977 9829704557</p>
          <p className="text-[#ccc]">Address: 56400, Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div className="min-w-[220px] flex-1">
  <h3 className="text-[#ff6f61] text-lg font-semibold mb-4">Follow Us</h3>
  <div className="flex gap-4">
    {[
      { name: "FB", url: "https://www.facebook.com/ramanand.mandal.464613" },
      { name: "LI", url: "https://www.linkedin.com/in/ramanand-mandal-24a124324/" },
      { name: "IN", url: "https://www.instagram.com/ramanand_mandal_001/" },
      { name: "GH", url: "https://github.com/ramanand00" },
    ].map((platform, i) => (
      <a
        key={i}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-[#444] hover:bg-[#ff6f61] text-white flex items-center justify-center font-semibold transition"
        aria-label={platform.name}
      >
        {platform.name}
      </a>
    ))}
  </div>
</div>


      </div>

      {/* Bottom Footer */}
      <div className="text-center border-t border-[#444] mt-10 pt-5 text-sm text-[#aaa]">
        © 2025 Knowtica. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
