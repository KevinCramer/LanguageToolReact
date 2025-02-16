import PageTitle from '../../../components/atoms/PageTitle';
import { consistentStyles } from '../../../constants';

const JapaneseWritingSystems = () => {
  const sections = [
    {
      title: 'Hiragana',
      // eslint-disable-next-line @stylistic/js/max-len
      description: 'a phonetic writing system used for native Japanese words. (It has 46 basic characters)',
      link: '/japanese/hiragana-explained',
    },
    {
      title: 'Katakana',
      // eslint-disable-next-line @stylistic/js/max-len
      description: 'a phonetic writing system mainly used for loan words from other languages. (It has 46 basic characters)',
      link: '/japanese/katakana-explained',
    },
    {
      title: 'Kanji',
      // eslint-disable-next-line @stylistic/js/max-len
      description: 'a non-phonetic writing system. (It has over 50,000 characters). The Japanese government has designated 2,136 characters as \'Jōyō kanji\' (\'daily use kanji\'). High school students are expected to be able to read and write these kanji by the time they graduate.',
      link: '/japanese/kanji-explained',
    },
  ];

  const romajiSection = (
    <div className='pt-4 pb-2'>
      Finally, <b>Romaji (ローマ字)</b> is the Romanized version of the Japanese writing system.
      It uses the Latin alphabet to represent Japanese sounds, making it easier for people who
      are not familiar with Japanese characters (like kanji, hiragana, or katakana) to read and
      pronounce Japanese words.
    </div>
  );

  const typingJapaneseSection = (
    <div className='py-2'>
      <a className={`${consistentStyles.blueText} underline`} href='/japanese/how-to-type-japanese'>
        How to Type Japanese
      </a>
    </div>
  );

  return (
    <div className='max-w-screen-md mx-auto px-4 text-lg'>
      <PageTitle title='Japanese Writing Systems' />
      <div className={`${consistentStyles.textBlack} py-2`}>The Japanese language has 3 writing systems:</div>
      {sections.map((section, index) => (
        <div className={` ${consistentStyles.textBlack} py-2`} key={index}>
          <a className={`${consistentStyles.blueText} underline`} href={section.link}>
            {section.title}
          </a>
           &nbsp;- {section.description}
        </div>
      ))}
      <div className={`${consistentStyles.textBlack}`}>
        {romajiSection}
      </div>
      {typingJapaneseSection}
    </div>
  );
};

export default JapaneseWritingSystems;
