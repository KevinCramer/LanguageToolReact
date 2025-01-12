import { useState } from 'react';
import { japaneseWritingSystemsTopicSlugNames, writingSystems } from '../../data/structured-data/writingSystems';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';

const HiraganaExplained = () => {
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email;
  const handleProtectedClick = useProtectedLink();

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

  const [currentLesson, setCurrentLesson] = useState(1); // Track the active lesson

  const dakutenTable = (
    <div className="flex justify-center my-4">
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 bg-gray-300">K → G</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-300">S → Z</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-300">T → D</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-300">H → B</th>
            <th className="border border-gray-400 px-4 py-2 bg-gray-300">H → P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">か (ka) → が (ga)</td>
            <td className="border border-gray-400 px-4 py-2">さ (sa) → ざ (za)</td>
            <td className="border border-gray-400 px-4 py-2">た (ta) → だ (da)</td>
            <td className="border border-gray-400 px-4 py-2">は (ha) → ば (ba)</td>
            <td className="border border-gray-400 px-4 py-2">は (ha) → ぱ (pa)</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">き (ki) → ぎ (gi)</td>
            <td className="border border-gray-400 px-4 py-2">し (shi) → じ (ji)</td>
            <td className="border border-gray-400 px-4 py-2">ち (chi) → <b>ぢ (di)¹</b></td>
            <td className="border border-gray-400 px-4 py-2">ひ (hi) → び (bi)</td>
            <td className="border border-gray-400 px-4 py-2">ひ (hi) → ぴ (pi)</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">く (ku) → ぐ (gu)</td>
            <td className="border border-gray-400 px-4 py-2">す (su) → ず (zu)</td>
            <td className="border border-gray-400 px-4 py-2">つ (tsu) → <b>づ (du)²</b></td>
            <td className="border border-gray-400 px-4 py-2">ふ (fu) → ぶ (bu)</td>
            <td className="border border-gray-400 px-4 py-2">ふ (fu) → ぷ (pu)</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">け (ke) → げ (ge)</td>
            <td className="border border-gray-400 px-4 py-2">せ (se) → ぜ (ze)</td>
            <td className="border border-gray-400 px-4 py-2">て (te) → で (de)</td>
            <td className="border border-gray-400 px-4 py-2">へ (he) → べ (be)</td>
            <td className="border border-gray-400 px-4 py-2">へ (he) → ぺ (pe)</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">こ (ko) → ご (go)</td>
            <td className="border border-gray-400 px-4 py-2">そ (so) → ぞ (zo)</td>
            <td className="border border-gray-400 px-4 py-2">と (to) → ど (do)</td>
            <td className="border border-gray-400 px-4 py-2">ほ (ho) → ぼ (bo)</td>
            <td className="border border-gray-400 px-4 py-2">ほ (ho) → ぽ (po)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  const basicHiraganaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">A</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">I</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">U</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">E</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">O</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">あ (a)</td>
            <td className="border border-gray-500 px-4 py-2">い (i)</td>
            <td className="border border-gray-500 px-4 py-2">う (u)</td>
            <td className="border border-gray-500 px-4 py-2">え (e)</td>
            <td className="border border-gray-500 px-4 py-2">お (o)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">か (ka)</td>
            <td className="border border-gray-500 px-4 py-2">き (ki)</td>
            <td className="border border-gray-500 px-4 py-2">く (ku)</td>
            <td className="border border-gray-500 px-4 py-2">け (ke)</td>
            <td className="border border-gray-500 px-4 py-2">こ (ko)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">さ (sa)</td>
            <td className="border border-gray-500 px-4 py-2">し (shi)</td>
            <td className="border border-gray-500 px-4 py-2">す (su)</td>
            <td className="border border-gray-500 px-4 py-2">せ (se)</td>
            <td className="border border-gray-500 px-4 py-2">そ (so)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">た (ta)</td>
            <td className="border border-gray-500 px-4 py-2">ち (chi)</td>
            <td className="border border-gray-500 px-4 py-2">つ (tsu)</td>
            <td className="border border-gray-500 px-4 py-2">て (te)</td>
            <td className="border border-gray-500 px-4 py-2">と (to)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">な (na)</td>
            <td className="border border-gray-500 px-4 py-2">に (ni)</td>
            <td className="border border-gray-500 px-4 py-2">ぬ (nu)</td>
            <td className="border border-gray-500 px-4 py-2">ね (ne)</td>
            <td className="border border-gray-500 px-4 py-2">の (no)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">は (ha)</td>
            <td className="border border-gray-500 px-4 py-2">ひ (hi)</td>
            <td className="border border-gray-500 px-4 py-2">ふ (fu)</td>
            <td className="border border-gray-500 px-4 py-2">へ (he)</td>
            <td className="border border-gray-500 px-4 py-2">ほ (ho)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ま (ma)</td>
            <td className="border border-gray-500 px-4 py-2">み (mi)</td>
            <td className="border border-gray-500 px-4 py-2">む (mu)</td>
            <td className="border border-gray-500 px-4 py-2">め (me)</td>
            <td className="border border-gray-500 px-4 py-2">も (mo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">や (ya)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ゆ (yu)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">よ (yo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ら (ra)</td>
            <td className="border border-gray-500 px-4 py-2">り (ri)</td>
            <td className="border border-gray-500 px-4 py-2">る (ru)</td>
            <td className="border border-gray-500 px-4 py-2">れ (re)</td>
            <td className="border border-gray-500 px-4 py-2">ろ (ro)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">わ (wa)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">を (wo)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ん (n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const LessonContent = () => {
    switch (currentLesson) {
    case 1:
      return (
        <div className="py-2">
          <div className="flex flex-col space-y-2 justify-center items-center m-8">
            <a className="text-blue-500  border-[1px] border-b-4 border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-2 rounded-2xl"
              onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
              href={createURL(LanguageNames.Japanese, LearningSections.WritingSystem, hiraganaBasicWritingSystem)}
            >
                Basic Hiragana Exercise
            </a>
          </div>
          <div className="py-2">
        Learning hiragana is the first step to learning Japanese. By learning all three lessons in order, you will learn
        the basics of Japanese pronunciation.
 
          </div>
          <div>
            Firstly hiragana has 46 basic sounds. See this table below for the basic pattern:
          </div>
        
          <div className='py-4'>
            {basicHiraganaTable}
          </div>
          
        </div>
      );
    case 2:
      return (
        <>
          <div className='py-2'>
            <div className='flex flex-col space-y-2 justify-center items-center m-8'>
              <a className="text-blue-500  border-[1px] border-b-4 border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-2 rounded-2xl"
                onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaDakutenWritingSystem)
                }> Hiragana with Dakuten and Handakuten Exercise
                {hiraganaDakutenWritingSystem?.isLocked &&
                    lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
            </div>
            <div>
          Dakuten and Handakuten lead to another 25 hiragana variations. 
            </div>
            <br></br>
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
            <div>
            </div>      
          </div>
          
        </>
      );
    case 3:
      return (
        <div className="py-2">
          <div className='py-2'>
            <div className='flex flex-col space-y-2 justify-center items-center m-8'>
   
              <a className="text-blue-500  border-[1px] border-b-4 border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-2 rounded-2xl"
                onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    hiraganaYoonWritingSystem)
                }>
                Hiragana Yoōn Exercise
                {hiraganaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
            </div>
        Yōon  leads to an additional 36 hiragana variations.
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b>きょ(kyo) </b>and <b>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>
              しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
        </div>
      );
    default:
      return null;
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 md:text-lg">
      <h4 className="text-center text-2xl pt-12">Hiragana Explained - Lesson {currentLesson}</h4>
      {/* Navigation */}
      <div className="flex justify-center items-center space-x-4 mt-8">
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
