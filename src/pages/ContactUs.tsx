import { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.youtube.com/@lingocommand', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.tiktok.com/@lingocommand', icon: FaTiktok, label: 'TikTok' },
  { href: 'https://www.instagram.com/lingocommand/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/lingocommand/posts/?feedView=all', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/profile.php?id=100068758832446', icon: FaFacebook, label: 'Facebook' },

];

const ContactUs = () => {
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    
    useEffect(() => {
      // Update the windowWidth state when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      // Add event listener to handle window resizing
      window.addEventListener('resize', handleResize);
      
      // Cleanup event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
      
    return windowWidth;
  };
  
  const width = useWindowWidth(); // Get the current window width
  const isMobile = width < 768; 
  return (
    <div className={`flex flex-col items-center ${isMobile ? 'text-black' : 'text-white'} text-lg`}>
      <div className='pt-24'>
        You can reach out to us at&nbsp;
      </div>
      <a href='mailto:contact@lingocommand.com' className={`${isMobile ? 'text-black' : 'text-white'} underline`}>
        contact@lingocommand.com
      </a>
      <div className='py-8'>
        Social media:
      </div>
      <div>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            className='flex flex-row items-center py-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon size={30} />
            <span className='pl-4'>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
