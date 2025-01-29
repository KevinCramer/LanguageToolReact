import { consistentStyles } from '../../constants';
import PageTitle from '../../components/atoms/PageTitle';

const KanjiExplained = () => { 

  const tableCellStyle = 'border border-gray-500 px-4 py-2';

  const KanjiRow = ({ kanji, meaning, onyomi, kunyomi }: any) => (
    <tr>
      <td className={tableCellStyle}>{kanji}</td>
      <td className={tableCellStyle}>{meaning}</td>
      <td className={tableCellStyle}>{onyomi}</td>
      <td className={tableCellStyle}>{kunyomi}</td>
    </tr>
  );
  
  const kanjiTable = (
    <table className="text-base md:text-lg table-auto border-collapse border border-gray-500 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className={tableCellStyle}>Kanji</th>
          <th className={tableCellStyle}>Meaning</th>
          <th className={tableCellStyle}>On’yomi</th>
          <th className={tableCellStyle}>Kun’yomi</th>
        </tr>
      </thead>
      <tbody>
        <KanjiRow kanji="火" meaning="Fire" onyomi="Ka, Hi" kunyomi="Hi, Ho" />
        <KanjiRow kanji="山" meaning="Mountain" onyomi="San, Zan" kunyomi="Yama" />
      </tbody>
    </table>
  );
    
  return (
    <div className='max-w-screen-md mx-auto px-4'>
      <PageTitle title='Kanji Explained' />
      <div className='py-2'>
        Kanji are characters used in the Japanese writing system, originally borrowed from Chinese characters. They represent ideas or meanings rather than just sounds. Each kanji can have multiple meanings and pronunciations depending on the context.
      </div>
      <div className='py-2'>
        <div>Kanji usually have two types of readings:</div>
        <div><b>On’yomi:</b> Based on the original Chinese pronunciation.</div>
        <div><b>Kun’yomi:</b> The native Japanese pronunciation.</div>
      </div>
      <div className='py-2'>
        Here are some examples:     
        {kanjiTable}
      </div>
      <div className='py-2'>
        <div>Moreover, kanji combine with other kanji, hiragana, or katakana to form words.</div>
        <div>For example: <b>火</b> (fire) + <b>山</b> (mountain) = <b>火山</b> (volcano).</div>
      </div>
      <div>
        Having said that, at LingoCommand we strongly recommend you avoid spending too much time studying kanji in isolation. Instead, we suggest you learn Japanese vocabulary, which will allow you to naturally gain familiarity with kanji over time. 

      </div>        
      <div className="flex flex-col space-y-2 justify-center items-center m-4">
        <a className={`border-[1px] border-b-4 ${consistentStyles.blueBackground}
         ${consistentStyles.darkBlueBorder} bg-200 text-center text-white p-2 
         rounded-2xl transform transition-transform duration-200 hover:scale-105`}
        href='vocabulary?s=clo-T2TFT'>
                      Kanji Vocabulary Exercises
        </a>
      </div>
    </div>
  );
}

export default KanjiExplained;
