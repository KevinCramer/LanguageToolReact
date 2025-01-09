import manStudying from '../assets/man-studying.jpg';
import womanStudying from '../assets/woman-studying.jpg'

const About = () => {
  return (
    <div className='flex flex-col justify-center flex-1 px-4'>
      <div className='max-w-screen-md mx-auto  md:text-lg rounded-md'>
        <h4 className='text-center text-2xl py-12'>Our Mission</h4>
        <div className='pb-2'>
        LingoCommand is dedicated to helping people learn Japanese in a streamlined and efficient way. It accelerates your progress by combining these three key principles:
        </div>
        <ul> 
          <li className='py-2'>
            <b>Customisable Exercises</b>: Select your own Japanese study sessions that perfectly match your learning style and goals with our highly adjustable exercises.
          </li>
          <li className='py-2'>
            <b>Active Recall</b>: Enhance your Japanese retention through consistent memory exercises.
          </li>
          <li className='py-2'>
            <b>Repeated Exposure</b>: Develop your skills through repeated exposure to conversations in Japanese, complemented by targeted reading and listening exercises.
          </li>
        </ul> 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
          <img src={manStudying} alt='Image 1' className='rounded-lg' />
          <img src={womanStudying} alt='Image 6' className='rounded-lg' />
        </div>
      </div>
     
    </div>
  );
};

export default About;
