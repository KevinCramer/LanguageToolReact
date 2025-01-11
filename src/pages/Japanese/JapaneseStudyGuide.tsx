import { japaneseVocabTopicSlugNames, languages as languagesVocab } from '../../data/structured-data/words';
import { japaneseWritingSystemsTopicSlugNames, writingSystems } from '../../data/structured-data/writingSystems';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { lingoCommandIsLocked, lockIconStyle, protectedLinkStyle } from '../../constants';
import { createURL } from '../../helpers/createURL';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';
import { useState } from 'react';

const useJapaneseVocab = () => {
  const japaneseVocab = languagesVocab[0];

  const getVocabTopic = (slugName: string) => 
    japaneseVocab?.topics.find((t: any) => t.slugName === slugName);

  return {
    clothes: getVocabTopic(japaneseVocabTopicSlugNames.clothes),
    colours: getVocabTopic(japaneseVocabTopicSlugNames.colours),
    numbers: getVocabTopic(japaneseVocabTopicSlugNames.numbers),
    animals: getVocabTopic(japaneseVocabTopicSlugNames.animals),
    body: getVocabTopic(japaneseVocabTopicSlugNames.body),
    daysOfWeek: getVocabTopic(japaneseVocabTopicSlugNames.daysOfWeek),
    foods: getVocabTopic(japaneseVocabTopicSlugNames.food),
    irregularAdjectives: getVocabTopic(japaneseVocabTopicSlugNames.irregularAdjectives),
    locations: getVocabTopic(japaneseVocabTopicSlugNames.locations),
    monthsOfYear: getVocabTopic(japaneseVocabTopicSlugNames.monthsOfYear),
    regularAdjectives: getVocabTopic(japaneseVocabTopicSlugNames.regularAdjectives),
  };
};

const useJapaneseWritingSystems = () => {
  const japaneseWritingSystems = writingSystems[0]

  const getWritingSystemTopic = (slugName: string) => 
    japaneseWritingSystems?.topics.find((t: any) => t.slugName === slugName);

  return {
    basicHiragana: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.basicHiragana),
    hiraganaDakuten: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.hiraganaDakuten),
    hiraganaYoon: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.hiraganaYoon),
    basicKatakana: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.basicKatakana),
    katakanaDakuten: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.katakanaDakuten),
    katakanaYoon: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.katakanaYoon),
    katakanaSpecialYoon: getWritingSystemTopic(japaneseWritingSystemsTopicSlugNames.katakanaSpecialYoon),
  };
};

const TopicLink = ({ topic, section }: { topic: any; section: any }) => {
  // @ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email;
  const handleProtectedClick = useProtectedLink();

  if (!topic) return null;

  return (
    <li>
      <a
        className='text-blue-500 underline'
        onClick={handleProtectedClick(topic)}
        href={createURL(LanguageNames.Japanese, section, topic)}
        style={protectedLinkStyle}
      >
        {topic.name?.toLocaleLowerCase()}
        {topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn && (
          <LockIcon style={lockIconStyle} />
        )}
      </a>
    </li>
  );
};

const JapaneseStudyGuide = () => {
  const vocabTopics = useJapaneseVocab();
  const writingSystems = useJapaneseWritingSystems();
  const [currentStep, setCurrentStep] = useState(1); // Track the active lesson

  const StepContent = () => {
    switch (currentStep) {
    case 1:
      return (
        <div className='py-8 text-center'>
          Spend a few minutes reading about{' '}
          <a className='text-blue-500 underline' href='/japanese/writing-systems-explained'>
          Japanese writing systems
          </a>
        .
        </div>
      );
    case 2:
      return (
        <div className='py-8 text-center'>
           Study{' '}
          <a className='text-blue-500 underline' href='/japanese/hiragana-explained'>
          hiragana
          </a>{' '}
        by mastering:
          <ul className='p-2 flex flex-col items-center'>
            <TopicLink topic={writingSystems.basicHiragana} section={LearningSections.WritingSystem} />
            <TopicLink topic={writingSystems.hiraganaDakuten} section={LearningSections.WritingSystem} />
            <TopicLink topic={writingSystems.hiraganaYoon} section={LearningSections.WritingSystem} />
          </ul>
        </div>

      );
    case 3:
      return (
        <div className='py-8 text-center'>
           Study{' '}
          <a className='text-blue-500 underline' href='/japanese/katakana-explained'>
          katakana
          </a>{' '}
        by mastering:
          <ul className='p-2 flex flex-col items-center'>
            <TopicLink topic={writingSystems.basicKatakana} section={LearningSections.WritingSystem} />
            <TopicLink topic={writingSystems.katakanaDakuten} section={LearningSections.WritingSystem} />
            <TopicLink topic={writingSystems.katakanaYoon} section={LearningSections.WritingSystem} />
            <TopicLink topic={writingSystems.katakanaSpecialYoon} section={LearningSections.WritingSystem} />
          </ul>
        </div>
      );
    case 4:
      return (
        <div className='py-8 text-center'>
           Study{' '}
          <a className='text-blue-500 underline' href='/japanese/kanji-explained'>
          Introduction to Kanji
          </a>
        .
        </div>
      );
    case 5:
      return (
        <div className='py-8 text-center'>
          Watch:{' '}
          <a className='text-blue-500 underline' href='/japanese/how-to-type-japanese'>
          How To Type Japanese
          </a>
        .
        </div>

      );
    case 6:
      return (
        <div className='py-8 text-center'>
           Study the vocabulary for these topics:
          <ul className='p-2 flex flex-col items-center'>
            {Object.entries(vocabTopics).map(([key, topic]) => (
              <TopicLink key={key} topic={topic} section={LearningSections.Vocab} />
            ))}
          </ul>
          <p className='py-2'>
          We recommend studying a topic’s vocabulary for 15 minutes, then taking a quiz. 
          Repeat a quiz until you can comfortable answer 90% or more of the questions correctly. 
          </p>
        </div>

      );
    case 7:
      return (
        <div className='py-8 text-center'>
           Practice{' '}
          <a
            className='text-blue-500 underline'
            href='/japanese/comprehension/aikos-book-sanctuary?eng=F'
          >
          reading and listening comprehension
          </a>
        .
        </div>
      );
    default:
      return null;
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 md:text-lg">
      <h4 className="text-center text-2xl pt-12">Japanese Study Guide  - Step {currentStep}</h4>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 1 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(1)}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 2 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 3 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(3)}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 4 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(4)}
        >
          4
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 5 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(5)}
        >
          5
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 6 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(6)}
        >
          6
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentStep === 7 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentStep(7)}
        >
          7
        </button>
      </div>
      <StepContent />
      <div className='mt-16'>
        <i>
        The Japanese language has 130 million native speakers, with about 95% residing in Japan. Over the past 40 years,
        the number of people learning Japanese as a second language has increased over twentyfold.
        </i>
      </div>
    </div>
  );
};
export default JapaneseStudyGuide;
