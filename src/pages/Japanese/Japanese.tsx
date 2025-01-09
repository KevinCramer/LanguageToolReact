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

const ResourceLink = ({ href, icon, alt, children }: ResourceLinkProps) => (
  <a className='flex flex-col items-center m-4' href={href}>
    <img src={icon} width={80} height={80} alt={alt} />
    <div className='text-center text-blue-500 underline'>{children}</div>
  </a>
);

const Japanese = () => {
  return (
    <div className='max-w-screen-md mx-auto px-4 text-lg'>
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
      <ResourceLink 
        href='/japanese/writing-systems-explained' 
        icon={penIcon} 
        alt='Writing Systems Icon'
      >
        Writing Systems
        <br/>
        (Alphabets)
      </ResourceLink>
      <ResourceLink 
        href='/japanese/vocabulary' 
        icon={dictionaryIcon} 
        alt='Vocabulary Icon'
      >
        Vocabulary
      </ResourceLink>
      <ResourceLink 
        href='/japanese/grammar/keigo' 
        icon={dartIcon} 
        alt='Grammar Icon'
      >
        Grammar
      </ResourceLink>
      <ResourceLink 
        href='/japanese/comprehension/aikos-book-sanctuary' 
        icon={learningKnowledgeIcon} 
        alt='Reading and Listening Comprehension Icon'
      >
        Reading and Listening
        <br/>
        Comprehension
      </ResourceLink>   
    </div>
  );
};

export default Japanese;