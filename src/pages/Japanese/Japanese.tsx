import { NavLink } from 'react-router-dom';
import dartIcon from '../../assets/dart.svg';
import dictionaryIcon from '../../assets/dictionary.svg';
import learningKnowledgeIcon from '../../assets/learningKnowledge.svg';
import penIcon from '../../assets/pen.svg';
import upwardTrendIcon from '../../assets/upward-trend.svg';

interface ResourceLinkProps {
  href: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

const imageDimensions = 80

const ResourceLink = ({ href, icon, alt, children }: ResourceLinkProps) => (
  <a className='flex flex-col items-center m-4' href={href}>
    <img src={icon} width={imageDimensions} height={imageDimensions} alt={alt} />
    <div className='text-center text-blue-500 underline'>{children}</div>
  </a>
);

const Japanese = () => {
  return (
    <div className='max-w-screen-md mx-auto px-4 md:text-lg text-center'>
      <h4 className='text-center text-2xl py-12'>
        Learn Japanese
      </h4>
      <div>
        LingoCommand helps beginners learn Japanese and gain confidence in their skills.
        We also offer valuable content for advanced users. Try our study guide below:
      </div>
      <ResourceLink 
        href='/japanese/study-guide' 
        icon={upwardTrendIcon} 
        alt='Study Guide Icon'
      >
        Study Guide
      </ResourceLink>
      <div>
        Alternatively, you can create your own study plan using the resources available 
        at LingoCommand. The Japanese study materials are divided into four main sections:
      </div>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='mx-'>
          <ResourceLink 
            href='/japanese/writing-systems-explained' 
            icon={penIcon} 
            alt='Writing Systems Icon'
          >
        Writing Systems
          </ResourceLink>
        </div>
        <div className='mx-'>
          <ResourceLink 
            href='/japanese/vocabulary' 
            icon={dictionaryIcon} 
            alt='Vocabulary Icon'
          >
        Vocabulary
          </ResourceLink>
        </div>
        <div className='mx-'>
          <ResourceLink 
            href='/japanese/grammar/keigo' 
            icon={dartIcon} 
            alt='Grammar Icon'
          >
        Grammar
          </ResourceLink>
        </div>
        <div className='mx-'>
          <ResourceLink 
            href='/japanese/reading-listening/aikos-book-sanctuary' 
            icon={learningKnowledgeIcon} 
            alt='Reading and Listening Comprehension Icon'
          >
        Reading / Listening
          </ResourceLink>      
        </div>    
      </div>
      <div className='mt-16'>
        <i>
        The Japanese language has 130 million native speakers, with about 95% residing in Japan. Over the past 40 years,
        the number of people learning Japanese as a second language has increased over twentyfold.
        </i>
      </div>

    </div>
  );
};

export default Japanese;