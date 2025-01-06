import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const ContactUs = () => {
  
  return (
    <>
      <div>
        <div>
          You can reach out to us at&nbsp;
        </div>
        <a href="mailto:contact@lingocommand.com">
          contact@lingocommand.com
        </a>
        <div>
          Social media:
        </div>
        <div
        >
          <a
            href="https://www.youtube.com/@lingocommand"
            
          >
            <FaYoutube size={30} />
            <span >YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@lingocommand"
          >
            <FaTiktok size={30} />
            <span >TikTok</span>
          </a>
          <a
            href="https://www.instagram.com/lingocommand/"
          >
            <FaInstagram size={30} />
            <span >Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068758832446"
          >
            <FaFacebook size={30} />
            <span >Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/company/lingocommand/posts/?feedView=all"
          >
            <FaLinkedin size={30} />
            <span >LinkedIn</span>
          </a>
          <a
            href="https://pinterest.com/lingocommand/"
          >
            <FaPinterest size={30} />
            <span >Pinterest</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
