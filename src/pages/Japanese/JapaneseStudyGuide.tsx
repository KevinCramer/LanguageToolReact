import { japaneseVocabTopicSlugNames, languages as languagesVocab } from '../../data/structured-data/words';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { lingoCommandIsLocked, lockIconStyle, protectedLinkStyle } from '../../constants';
import { createURL } from '../../helpers/createURL';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';

const useJapaneseVocab = () => {
  const japaneseVocab = (languagesVocab as any[]).find((l: any) => 
    l.languageName === 'Japanese' && l.topics.some((topic: any) => !topic.isAlphabet)
  );

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
  const japaneseWritingSystems = (languagesVocab as any[]).find((l: any) => 
    l.languageName === 'Japanese' && l.topics.some((topic: any) => topic.isAlphabet)
  );

  const getWritingSystemTopic = (slugName: string) => 
    japaneseWritingSystems?.topics.find((t: any) => t.slugName === slugName);

  return {
    basicHiragana: getWritingSystemTopic(japaneseVocabTopicSlugNames.basicHiragana),
    hiraganaDakuten: getWritingSystemTopic(japaneseVocabTopicSlugNames.hiraganaDakuten),
    hiraganaYoon: getWritingSystemTopic(japaneseVocabTopicSlugNames.hiraganaYoon),
    basicKatakana: getWritingSystemTopic(japaneseVocabTopicSlugNames.basicKatakana),
    katakanaDakuten: getWritingSystemTopic(japaneseVocabTopicSlugNames.katakanaDakuten),
    katakanaYoon: getWritingSystemTopic(japaneseVocabTopicSlugNames.katakanaYoon),
    katakanaSpecialYoon: getWritingSystemTopic(japaneseVocabTopicSlugNames.katakanaSpecialYoon),
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

  return (
    <div className='max-w-screen-md mx-auto px-2 md:text-lg'>
      <h4 className='text-center text-2xl py-10'>Japanese Study Guide</h4>

      <div className='py-2'>
        <b>Phase 1:</b> Spend a few minutes reading about{' '}
        <a className='text-blue-500 underline' href='/japanese/writing-systems-explained'>
          Japanese writing systems
        </a>
        .
      </div>
      <div className='py-2'>
        <b>Phase 2:</b> Study{' '}
        <a className='text-blue-500 underline' href='/japanese/hiragana-explained'>
          hiragana
        </a>{' '}
        by mastering:
        <ul className='pl-2'>
          <TopicLink topic={writingSystems.basicHiragana} section={LearningSections.WritingSystem} />
          <TopicLink topic={writingSystems.hiraganaDakuten} section={LearningSections.WritingSystem} />
          <TopicLink topic={writingSystems.hiraganaYoon} section={LearningSections.WritingSystem} />
        </ul>
      </div>

      <div className='py-2'>
        <b>Phase 3:</b> Study{' '}
        <a className='text-blue-500 underline' href='/japanese/katakana-explained'>
          katakana
        </a>{' '}
        by mastering:
        <ul className='pl-2'>
          <TopicLink topic={writingSystems.basicKatakana} section={LearningSections.WritingSystem} />
          <TopicLink topic={writingSystems.katakanaDakuten} section={LearningSections.WritingSystem} />
          <TopicLink topic={writingSystems.katakanaYoon} section={LearningSections.WritingSystem} />
          <TopicLink topic={writingSystems.katakanaSpecialYoon} section={LearningSections.WritingSystem} />
        </ul>
      </div>

      <div className='py-2'>
        <b>Phase 4:</b> Study{' '}
        <a className='text-blue-500 underline' href='/japanese/kanji-explained'>
          Introduction to Kanji
        </a>
        .
      </div>

      <div className='py-2'>
        <b>Phase 5:</b> Watch:{' '}
        <a className='text-blue-500 underline' href='/japanese/how-to-type-japanese'>
          How To Type Japanese
        </a>
        .
      </div>

      <div className='py-2'>
        <b>Phase 6:</b> Study the vocabulary for these topics:
        <ul className='pl-2'>
          {Object.entries(vocabTopics).map(([key, topic]) => (
            <TopicLink key={key} topic={topic} section={LearningSections.Vocab} />
          ))}
        </ul>
        <p className='py-2'>
          We recommend studying a topic’s vocabulary for 15 minutes, then taking a quiz. 
          Repeat a quiz until you can comfortable answer 90% or more of the questions correctly. 
        </p>
      </div>

      <div className='py-2'>
        <b>Phase 7:</b> Practice{' '}
        <a
          className='text-blue-500 underline'
          href='/japanese/comprehension/aikos-book-sanctuary?eng=F'
        >
          reading and listening comprehension
        </a>
        .
      </div>
      <i>
        The Japanese language has 130 million native speakers, with about 95% residing in Japan. Over the past 40 years,
        the number of people learning Japanese as a second language has increased over twentyfold.
      </i>
    </div>
  );
};

export default JapaneseStudyGuide;
