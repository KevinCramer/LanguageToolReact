import './ContactUs.scss'

const ContactUs = () => { 
 
  return (
    <>
      <div className="contact-us-container">
        <div style={{ color: 'white' }}>
          You can reach out to us at&nbsp;
        </div>
        <a href="mailto:contact@lingocommand.com" style={{ color: 'white' }}>
            contact@lingocommand.com
        </a>
        <div style={{ color: 'white' , paddingTop: '50px' }}>
          social media:
        </div>
        <div style={{ display:'flex', flexDirection: 'column', paddingTop: '5px', textAlign: 'center' }}>
          <a href="https://www.youtube.com/@lingocommand" style={{ color: 'white' }}>
            youtube
          </a>
          <a href="https://www.instagram.com/lingocommand/" style={{ color: 'white' }}>
            instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=100068758832446" style={{ color: 'white' }}>
            facebook
          </a>
        </div>
      </div>
      
    </>
  );
}
 
export default ContactUs;
