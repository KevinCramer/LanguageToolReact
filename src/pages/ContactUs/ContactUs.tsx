import './ContactUs.scss';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const ContactUs = () => {
  const aTagStyle = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginBottom:'15px'
  }

  const spanStyle = { marginLeft: '20px' }
  return (
    <>
      <div className="contact-us-container">
        <div style={{ color: 'white' }}>
          You can reach out to us at&nbsp;
        </div>
        <a href="mailto:contact@lingocommand.com" style={{ color: 'white' }}>
          contact@lingocommand.com
        </a>
        <div style={{ color: 'white', paddingTop: '50px', paddingBottom:'20px' }}>
          social media:
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '5px',
            textAlign: 'left',
          }}
        >
          <a
            href="https://www.youtube.com/@lingocommand"
            style={ aTagStyle}
          >
            <FaYoutube size={30} />
            <span style={spanStyle}>YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@lingocommand"
            style={aTagStyle}
          >
            <FaTiktok size={30} />
            <span style={spanStyle}>TikTok</span>
          </a>
          <a
            href="https://www.instagram.com/lingocommand/"
            style={aTagStyle}
          >
            <FaInstagram size={30} />
            <span style={spanStyle}>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068758832446"
            style={aTagStyle}
          >
            <FaFacebook size={30} />
            <span style={spanStyle}>Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/company/lingocommand/posts/?feedView=all"
            style={aTagStyle}
          >
            <FaLinkedin size={30} />
            <span style={spanStyle}>LinkedIn</span>
          </a>
          <a
            href="https://x.com/lingocommand"
            style={aTagStyle}
          >
            <FaTwitter size={30} />
            <span style={spanStyle}>Twitter</span>
          </a>
          <a
            href="https://pinterest.com/lingocommand/"
            style={aTagStyle}
          >
            <FaPinterest size={30} />
            <span style={spanStyle}>Pinterest</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
