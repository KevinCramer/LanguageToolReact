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
            YouTube
          </a>
          <a href="https://www.tiktok.com/@lingocommand" style={{ color: 'white' }}>
            TikTok
          </a>
          <a href="https://www.instagram.com/lingocommand/" style={{ color: 'white' }}>
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=100068758832446" style={{ color: 'white' }}>
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/lingocommand/posts/?feedView=all" style={{ color: 'white' }}>
            LinkedIn
          </a>
          <a href="https://x.com/lingocommand" style={{ color: 'white' }}>
            Twitter
          </a>
          <a href="https://pinterest.com/lingocommand/" style={{ color: 'white' }}>
            Pinterest
          </a>
          
        </div>
      </div>
      
    </>
  );
}
 
export default ContactUs;
