const About = () => {
  return (
    <div className='flex flex-col justify-center flex-1 px-4'>
      <div className='max-w-screen-md mx-auto  bg-white rounded-md p-2'>
        <div className='p-2'>
          LingoCommand is an educational platform for learning Japanese. It accelerates progress by combining these three key principles:
        </div>
        <ul> 
          <li className='p-2'>
            <b>Customisable Exercises</b>: Select your own Japanese study sessions that perfectly match your learning style and goals with our highly adjustable exercises.
          </li>
          <li className='p-2'>
            <b>Active Recall</b>: Enhance your Japanese retention through consistent memory exercises.
          </li>
          <li className='p-2'>
            <b>Repeated Exposure</b>: Develop your skills through repeated exposure to conversations in Japanese, complemented by targeted reading and listening exercises.
          </li>
        </ul> 
      </div>

    </div>
  );
};

export default About;
