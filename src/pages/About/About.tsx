import './About.scss';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const About = () => {
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
        <div style={{ color: 'black', backgroundColor: 'white', padding:'5px', borderRadius: '10px', maxWidth: '820px', fontSize: '22px', marginTop:'100px' }}>
          <div style={{ fontSize: '22px', marginTop:'10px' }}>
          LingoCommand is an educational platform for foreign language learning. It boosts language learning by combining these key principles:
          </div>
          <ul> 
            <li style={{ marginTop: '20px' }}>
              <b>Active Recall</b>: Enhance your language retention through memory exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Repeated Exposure</b>: Master your target language naturally through exposure to real-world conversations with reading and listening exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Customisable Settings</b>: We provide highly customisable language learning exercises so you can tailor your learning experience to match your needs exactly.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
