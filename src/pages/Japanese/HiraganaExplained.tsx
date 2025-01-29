import { consistentStyles, lingoCommandHasLoginLock } from '../../constants';
import { japaneseWritingSystemsTopicSlugNames, writingSystems } 
  from '../../data/structured-data/writingSystems';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { useEffect, useState } from 'react';
import { createURL } from '../../helpers/createURL';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';
import { useSearchParams } from 'react-router-dom';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

/* eslint-disable sort-imports */
import hiraganaAudioA from '../../data/raw-data/audio_vocab/japanese/hiragana/a.mp3'
import hiraganaAudioI from '../../data/raw-data/audio_vocab/japanese/hiragana/i.mp3'
import hiraganaAudioU from '../../data/raw-data/audio_vocab/japanese/hiragana/u.mp3'
import hiraganaAudioE from '../../data/raw-data/audio_vocab/japanese/hiragana/e.mp3'
import hiraganaAudioO from '../../data/raw-data/audio_vocab/japanese/hiragana/o.mp3'
import hiraganaAudioKa from '../../data/raw-data/audio_vocab/japanese/hiragana/ka.mp3'
import hiraganaAudioKi from '../../data/raw-data/audio_vocab/japanese/hiragana/ki.mp3'
import hiraganaAudioKu from '../../data/raw-data/audio_vocab/japanese/hiragana/ku.mp3'
import hiraganaAudioKe from '../../data/raw-data/audio_vocab/japanese/hiragana/ke.mp3'
import hiraganaAudioKo from '../../data/raw-data/audio_vocab/japanese/hiragana/ko.mp3'
import hiraganaAudioSa from '../../data/raw-data/audio_vocab/japanese/hiragana/sa.mp3'
import hiraganaAudioShi from '../../data/raw-data/audio_vocab/japanese/hiragana/shi.mp3'
import hiraganaAudioSu from '../../data/raw-data/audio_vocab/japanese/hiragana/su.mp3'
import hiraganaAudioSe from '../../data/raw-data/audio_vocab/japanese/hiragana/se.mp3'
import hiraganaAudioSo from '../../data/raw-data/audio_vocab/japanese/hiragana/so.mp3'
import hiraganaAudioTa from '../../data/raw-data/audio_vocab/japanese/hiragana/ta.mp3'
import hiraganaAudioChi from '../../data/raw-data/audio_vocab/japanese/hiragana/chi.mp3'
import hiraganaAudioTsu from '../../data/raw-data/audio_vocab/japanese/hiragana/tsu.mp3'
import hiraganaAudioTe from '../../data/raw-data/audio_vocab/japanese/hiragana/te.mp3'
import hiraganaAudioTo from '../../data/raw-data/audio_vocab/japanese/hiragana/to.mp3'
import hiraganaAudioNa from '../../data/raw-data/audio_vocab/japanese/hiragana/na.mp3'
import hiraganaAudioNi from '../../data/raw-data/audio_vocab/japanese/hiragana/ni.mp3'
import hiraganaAudioNu from '../../data/raw-data/audio_vocab/japanese/hiragana/nu.mp3'
import hiraganaAudioNe from '../../data/raw-data/audio_vocab/japanese/hiragana/ne.mp3'
import hiraganaAudioNo from '../../data/raw-data/audio_vocab/japanese/hiragana/no.mp3'
import hiraganaAudioHa from '../../data/raw-data/audio_vocab/japanese/hiragana/ha.mp3'
import hiraganaAudioHi from '../../data/raw-data/audio_vocab/japanese/hiragana/hi.mp3'
import hiraganaAudioFu from '../../data/raw-data/audio_vocab/japanese/hiragana/fu.mp3'
import hiraganaAudioHe from '../../data/raw-data/audio_vocab/japanese/hiragana/he.mp3'
import hiraganaAudioHo from '../../data/raw-data/audio_vocab/japanese/hiragana/ho.mp3'
import hiraganaAudioMa from '../../data/raw-data/audio_vocab/japanese/hiragana/ma.mp3'
import hiraganaAudioMi from '../../data/raw-data/audio_vocab/japanese/hiragana/mi.mp3'
import hiraganaAudioMu from '../../data/raw-data/audio_vocab/japanese/hiragana/mu.mp3'
import hiraganaAudioMe from '../../data/raw-data/audio_vocab/japanese/hiragana/me.mp3'
import hiraganaAudioMo from '../../data/raw-data/audio_vocab/japanese/hiragana/mo.mp3'
import hiraganaAudioYa from '../../data/raw-data/audio_vocab/japanese/hiragana/ya.mp3'
import hiraganaAudioYu from '../../data/raw-data/audio_vocab/japanese/hiragana/yu.mp3'
import hiraganaAudioYo from '../../data/raw-data/audio_vocab/japanese/hiragana/yo.mp3'
import hiraganaAudioRa from '../../data/raw-data/audio_vocab/japanese/hiragana/ra.mp3'
import hiraganaAudioRi from '../../data/raw-data/audio_vocab/japanese/hiragana/ri.mp3'
import hiraganaAudioRu from '../../data/raw-data/audio_vocab/japanese/hiragana/ru.mp3'
import hiraganaAudioRe from '../../data/raw-data/audio_vocab/japanese/hiragana/re.mp3'
import hiraganaAudioRo from '../../data/raw-data/audio_vocab/japanese/hiragana/ro.mp3'
import hiraganaAudioWa from '../../data/raw-data/audio_vocab/japanese/hiragana/wa.mp3'
import hiraganaAudioWo from '../../data/raw-data/audio_vocab/japanese/hiragana/wo.mp3'
import hiraganaAudioN from '../../data/raw-data/audio_vocab/japanese/hiragana/n.mp3'
/* eslint-enable sort-imports */

const lessonTitles = {
  1: 'Basic Hiragana',
  2: 'Hiragana with Dakuten and Handakuten',
  3: 'Yoōn Hiragana'
}

const playAudio = (audioFile:any) => {
  const audio = new Audio(audioFile);
  audio.play();
};

const HiraganaExplained = () => {
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email;
  const handleProtectedClick = useProtectedLink();
  const [searchParams, setSearchParams] = useSearchParams();

  const japaneseWritingSystems = writingSystems[0];

  const hiraganaBasicWritingSystem = japaneseWritingSystems?.topics.find(
    (t: any) => t.slugName === japaneseWritingSystemsTopicSlugNames.basicHiragana
  );
  const hiraganaDakutenWritingSystem = japaneseWritingSystems?.topics.find(
    (t: any) => t.slugName === japaneseWritingSystemsTopicSlugNames.hiraganaDakuten
  );
  const hiraganaYoonWritingSystem = japaneseWritingSystems?.topics.find(
    (t: any) => t.slugName === japaneseWritingSystemsTopicSlugNames.hiraganaYoon
  );

  // Get the initial lesson number from query params or default to 1
  const initialLesson = parseInt(searchParams.get('lesson') || '1', 10);
  const [currentLesson, setCurrentLesson] = useState(initialLesson);

  useEffect(() => {
  // Update the query parameter whenever the lesson changes
    setSearchParams({ lesson: currentLesson.toString() });
  }, [currentLesson, setSearchParams]);
  
  const dakutenData = [
    {
      kToG: 'か (ka) → が (ga)',
      sToZ: 'さ (sa) → ざ (za)',
      tToD: 'た (ta) → だ (da)',
      hToB: 'は (ha) → ば (ba)',
      hToP: 'は (ha) → ぱ (pa)'
    },
    {
      kToG: 'き (ki) → ぎ (gi)',
      sToZ: 'し (shi) → じ (ji)',
      tToD: 'ち (chi) → ぢ (di)¹', // This needs to be bold
      hToB: 'ひ (hi) → び (bi)',
      hToP: 'ひ (hi) → ぴ (pi)'
    },
    {
      kToG: 'く (ku) → ぐ (gu)',
      sToZ: 'す (su) → ず (zu)',
      tToD: 'つ (tsu) → づ (du)²', // This needs to be bold
      hToB: 'ふ (fu) → ぶ (bu)',
      hToP: 'ふ (fu) → ぷ (pu)'
    },
    {
      kToG: 'け (ke) → げ (ge)',
      sToZ: 'せ (se) → ぜ (ze)',
      tToD: 'て (te) → で (de)',
      hToB: 'へ (he) → べ (be)',
      hToP: 'へ (he) → ぺ (pe)'
    },
    {
      kToG: 'こ (ko) → ご (go)',
      sToZ: 'そ (so) → ぞ (zo)',
      tToD: 'と (to) → ど (do)',
      hToB: 'ほ (ho) → ぼ (bo)',
      hToP: 'ほ (ho) → ぽ (po)'
    }
  ];
 
  const dakutenTableHeaderStyle = 'border border-gray-500 md:px-4 py-2 bg-gray-200';
  const dakutenTableCellStyle = 'border border-gray-500 px-2 py-2 md:py-6 text-center';
  
  // Function to wrap specific parts of the string in bold
  const makeBold = (text:any) => {
    return text.replace(/ぢ \(di\)¹/g, '<span class="font-bold">ぢ (di)¹</span>')
      .replace(/づ \(du\)²/g, '<span class="font-bold">づ (du)²</span>');
  };
  
  const dakutenTable = (
    <div className="flex justify-center my-4">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className={dakutenTableHeaderStyle}>K → G</th>
            <th className={dakutenTableHeaderStyle}>S → Z</th>
            <th className={dakutenTableHeaderStyle}>T → D</th>
            <th className={dakutenTableHeaderStyle}>H → B</th>
            <th className={dakutenTableHeaderStyle}>H → P</th>
          </tr>
        </thead>
        <tbody>
          {dakutenData.map((row, index) => (
            <tr key={index}>
              <td className={dakutenTableCellStyle} dangerouslySetInnerHTML={{ __html: makeBold(row.kToG) }}></td>
              <td className={dakutenTableCellStyle} dangerouslySetInnerHTML={{ __html: makeBold(row.sToZ) }}></td>
              <td className={dakutenTableCellStyle} dangerouslySetInnerHTML={{ __html: makeBold(row.tToD) }}></td>
              <td className={dakutenTableCellStyle} dangerouslySetInnerHTML={{ __html: makeBold(row.hToB) }}></td>
              <td className={dakutenTableCellStyle} dangerouslySetInnerHTML={{ __html: makeBold(row.hToP) }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  const TableHeader = ({ headers }: any) => (
    <thead>
      <tr>
        {headers.map((header: any) => (
          <th key={header} className="border border-gray-500 px-4 py-2 bg-gray-200">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
  
  const TableCell = ({ character, audio }: any) => {
    if(character) {
      return (
        <td className="border border-gray-500 relative group">
          <div
            className="border px-1 md:px-4 py-2 text-center cursor-pointer md:text-lg"
            onClick={() => playAudio(audio)}
          >
            {character}
          </div>
          <span className="absolute right-0 bottom-0 text-sm text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
            <VolumeUpIcon style={{ fontSize: 16, color: 'black' }} />
          </span>
        </td>
      )
    }
    else {
      return ( <td className="border border-gray-500 px-4 py-2"></td>
      )
    }
   
  }
  
  const basicHiraganaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <TableHeader headers={['A', 'I', 'U', 'E', 'O']} />
        <tbody>
          <tr>
            <TableCell character="あ (a)" audio={hiraganaAudioA} />
            <TableCell character="い (i)" audio={hiraganaAudioI} />
            <TableCell character="う (u)" audio={hiraganaAudioU} />
            <TableCell character="え (e)" audio={hiraganaAudioE} />
            <TableCell character="お (o)" audio={hiraganaAudioO} />
          </tr>
          <tr>
            <TableCell character="か (ka)" audio={hiraganaAudioKa} />
            <TableCell character="き (ki)" audio={hiraganaAudioKi} />
            <TableCell character="く (ku)" audio={hiraganaAudioKu} />
            <TableCell character="け (ke)" audio={hiraganaAudioKe} />
            <TableCell character="こ (ko)" audio={hiraganaAudioKo} />
          </tr>
          <tr>
            <TableCell character="さ (sa)" audio={hiraganaAudioSa} />
            <TableCell character="し (shi)" audio={hiraganaAudioShi} />
            <TableCell character="す (su)" audio={hiraganaAudioSu} />
            <TableCell character="せ (se)" audio={hiraganaAudioSe} />
            <TableCell character="そ (so)" audio={hiraganaAudioSo} />
          </tr>
          <tr>
            <TableCell character="た (ta)" audio={hiraganaAudioTa} />
            <TableCell character="ち (chi)" audio={hiraganaAudioChi} />
            <TableCell character="つ (tsu)" audio={hiraganaAudioTsu} />
            <TableCell character="て (te)" audio={hiraganaAudioTe} />
            <TableCell character="と (to)" audio={hiraganaAudioTo} />
          </tr>
          <tr>
            <TableCell character="な (na)" audio={hiraganaAudioNa} />
            <TableCell character="に (ni)" audio={hiraganaAudioNi} />
            <TableCell character="ぬ (nu)" audio={hiraganaAudioNu} />
            <TableCell character="ね (ne)" audio={hiraganaAudioNe} />
            <TableCell character="の (no)" audio={hiraganaAudioNo} />
          </tr>
          <tr>
            <TableCell character="は (ha)" audio={hiraganaAudioHa} />
            <TableCell character="ひ (hi)" audio={hiraganaAudioHi} />
            <TableCell character="ふ (fu)" audio={hiraganaAudioFu} />
            <TableCell character="へ (he)" audio={hiraganaAudioHe} />
            <TableCell character="ほ (ho)" audio={hiraganaAudioHo} />
          </tr>
          <tr>
            <TableCell character="ま (ma)" audio={hiraganaAudioMa} />
            <TableCell character="み (mi)" audio={hiraganaAudioMi} />
            <TableCell character="む (mu)" audio={hiraganaAudioMu} />
            <TableCell character="め (me)" audio={hiraganaAudioMe} />
            <TableCell character="も (mo)" audio={hiraganaAudioMo} />
          </tr>
          <tr>
            <TableCell character="や (ya)" audio={hiraganaAudioYa} />
            <TableCell />
            <TableCell character="ゆ (yu)" audio={hiraganaAudioYu} />
            <TableCell />
            <TableCell character="よ (yo)" audio={hiraganaAudioYo} />
          </tr>
          <tr>
            <TableCell character="ら (ra)" audio={hiraganaAudioRa} />
            <TableCell character="り (ri)" audio={hiraganaAudioRi} />
            <TableCell character="る (ru)" audio={hiraganaAudioRu} />
            <TableCell character="れ (re)" audio={hiraganaAudioRe} />
            <TableCell character="ろ (ro)" audio={hiraganaAudioRo} />
          </tr>
          <tr>
            <TableCell character="わ (wa)" audio={hiraganaAudioWa} />
            <TableCell />
            <TableCell character="を (wo)" audio={hiraganaAudioWo} />
            <TableCell />
            <TableCell character="ん (n)" audio={hiraganaAudioN} />
          </tr>
        </tbody>
      </table>
    </div>
  );

  const LessonContent = () => {
    switch (currentLesson) {
    case 1:
      return (
        <div>
          <div>
        Learning hiragana is the first step to learning Japanese. By learning all three lessons in order, you will learn
        the basics of Japanese pronunciation.
 
          </div>
          <div>
            Firstly hiragana has 46 basic character. See this table below for the basic pattern:
          </div>
        
          <div className='py-4'>
            {basicHiraganaTable}
          </div>
          <div className='flex py-6 justify-center'>
            <div className="flex flex-col space-y-2 justify-center items-center ml-4">
              <a className={`border-[1px] border-b-4 ${consistentStyles.blueBackground} ${consistentStyles.darkBlueBorder} bg-200 text-center ${consistentStyles.textWhite} p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105`}

                onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
                href={createURL(LanguageNames.Japanese, LearningSections.WritingSystem, hiraganaBasicWritingSystem)}
              >
                Basic Hiragana Exercise
              </a>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <>
          <div>
            <div>
          Dakuten and handakuten are marks added on top of hiragana that alter pronunciation. 
            </div>
            <div>
            </div>
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations.
            For example: <b>か (ka) → が (ga)</b>. 
            <div>
            </div>
            The handakuten mark is <b>( ゜)</b>. There are 5 variations.
            For example: <b>は (ha) → ぱ (pa)</b>.
            <div>
              <div>
                See this useful diagram for the general pattern:
              </div>
              <div className='py-4'>
                {dakutenTable}
                <div>
                    (1) ぢ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                </div>
                <div>
                    (2) づ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
                </div>       
              </div>
            </div>
            <div className='flex py-6 justify-center'>
              <div className='flex flex-col space-y-2 justify-center items-center ml-4'>
                <a className={`border-[1px] border-b-4 ${consistentStyles.blueBackground} ${consistentStyles.darkBlueBorder} bg-200 text-center ${consistentStyles.textWhite} p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105`}
                  onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} 
                  href={
                    createURL(
                      LanguageNames.Japanese,
                      LearningSections.WritingSystem,
                      hiraganaDakutenWritingSystem)
                  }> Hiragana with Dakuten and Handakuten Exercise
                  {hiraganaDakutenWritingSystem?.hasLoginLock &&
                    lingoCommandHasLoginLock && !userIsLoggedIn ? <LockIcon/> : ''}
                </a>
              </div>    
            </div>
            
          </div>
          
        </>
      );
    case 3:
      return (
        <div >
          <div>
            Some hiragana combine to form Yōon sounds. In these combinations,
            the first character remains full-sized, while the second is smaller. 
            There are 36 of these combinations. 
            Examples include <b>きょ(kyo) </b>and <b>しょ(sho)</b> which represent single blended 
            syllables rather than separate sounds. This blending is crucial in words 
            like <b>きょう(kyou, today)</b> and <b>
            しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
          <div className='flex py-6 justify-center'>
            <div className='flex flex-col space-y-2 justify-center items-center ml-4'>
              <a className={`border-[1px] border-b-4 ${consistentStyles.blueBackground} ${consistentStyles.darkBlueBorder} bg-200 text-center ${consistentStyles.textWhite} p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105`}
                onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaYoonWritingSystem)
                }>
                Yoōn Hiragana Exercise
                {hiraganaYoonWritingSystem?.hasLoginLock &&
                   lingoCommandHasLoginLock && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
            </div>
          </div>
         
        </div>
      );
    default:
      return null;
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 text-lg">
      {/*@ts-ignore*/}
      <h4 className="text-center text-2xl pt-12">Lesson {currentLesson} - {lessonTitles[currentLesson]}</h4>
      {/* Navigation */}
      <div className="flex justify-center items-center space-x-4 mt-8 mb-6">
        <button
          className={`px-4 py-2 border rounded-md ${currentLesson === 1 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentLesson(1)}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentLesson === 2 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentLesson(2)}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentLesson === 3 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentLesson(3)}
        >
          3
        </button>
      </div>
      <LessonContent />
    </div>
  );
};

export default HiraganaExplained;
