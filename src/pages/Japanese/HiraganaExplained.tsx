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

  const dakutenTable = <table>
    <thead>
      <tr>
        <th>K → G</th>
        <th>S → Z</th>
        <th>T → D</th>
        <th>H → B</th>
        <th>H → P</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>か (ka) → が (ga)</td>
        <td>さ (sa) → ざ (za)</td>
        <td>た (ta) → だ (da)</td>
        <td>は (ha) → ば (ba)</td>
        <td>は (ha) → ぱ (pa)</td>
      </tr>
      <tr>
        <td>き (ki) → ぎ (gi)</td>
        <td>し (shi) → じ (ji)</td>
        <td>ち (chi) → <b>ぢ(di)¹</b></td>
        <td>ひ (hi) → び (bi)</td>
        <td>ひ (hi) → ぴ (pi)</td>
      </tr>
      <tr>
        <td>く (ku) → ぐ (gu)</td>
        <td>す (su) → ず (zu)</td>
        <td>つ (tsu) → <b>づ (du)²</b></td>
        <td>ふ (fu) → ぶ (bu)</td>
        <td>ふ (fu) → ぷ (pu)</td>
      </tr>
      <tr>
        <td>け (ke) → げ (ge)</td>
        <td>せ (se) → ぜ (ze)</td>
        <td>て (te) → で (de)</td>
        <td>へ (he) → べ (be)</td>
        <td>へ (he) → ぺ (pe)</td>
      </tr>
      <tr>
        <td>こ (ko) → ご (go)</td>
        <td>そ (so) → ぞ (zo)</td>
        <td>と (to) → ど (do)</td>
        <td>ほ (ho) → ぼ (bo)</td>
        <td>ほ (ho) → ぽ (po)</td>
      </tr>
    </tbody>
  </table>

  const basicHiraganaTable = <table>
    <thead>
      <tr>
        <th>A</th>
        <th>I</th>
        <th>U</th>
        <th>E</th>
        <th>O</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>あ (a)</td>
        <td>い (i)</td>
        <td>う (u)</td>
        <td>え (e)</td>
        <td>お (o)</td>
      </tr>
      <tr>
        <td>か (ka)</td>
        <td>き (ki)</td>
        <td>く (ku)</td>
        <td>け (ke)</td>
        <td>こ (ko)</td>
      </tr>
      <tr>
        <td>さ (sa)</td>
        <td>し (shi)</td>
        <td>す (su)</td>
        <td>せ (se)</td>
        <td>そ (so)</td>
      </tr>
      <tr>
        <td>た (ta)</td>
        <td>ち (chi)</td>
        <td>つ (tsu)</td>
        <td>て (te)</td>
        <td>と (to)</td>
      </tr>
      <tr>
        <td>な (na)</td>
        <td>に (ni)</td>
        <td>ぬ (nu)</td>
        <td>ね (ne)</td>
        <td>の (no)</td>
      </tr>
      <tr>
        <td>は (ha)</td>
        <td>ひ (hi)</td>
        <td>ふ (fu)</td>
        <td>へ (he)</td>
        <td>ほ (ho)</td>
      </tr>
      <tr>
        <td>ま (ma)</td>
        <td>み (mi)</td>
        <td>む (mu)</td>
        <td>め (me)</td>
        <td>も (mo)</td>
      </tr>
      <tr>
        <td>や (ya)</td>
        <td></td>
        <td>ゆ (yu)</td>
        <td></td>
        <td>よ (yo)</td>
      </tr>
      <tr>
        <td>ら (ra)</td>
        <td>り (ri)</td>
        <td>る (ru)</td>
        <td>れ (re)</td>
        <td>ろ (ro)</td>
      </tr>
      <tr>
        <td>わ (wa)</td>
        <td></td>
        <td>を (wo)</td>
        <td></td>
        <td>ん (n)</td>
      </tr>
    </tbody>
  </table>

  const [isDakutenModalOpen, setDakutenModalOpen] = useState(false);

  const toggleDakutenModal = () => {
    setDakutenModalOpen(!isDakutenModalOpen);
  };

  const [isBasicHiraganaModalOpen, setBasicHiraganaModalOpen] = useState(false);

  const toggleBasicHiraganaModal = () => {
    setBasicHiraganaModalOpen(!isBasicHiraganaModalOpen);
  };

  const LessonContent = () => {
    switch (currentLesson) {
    case 1:
      return (
        <div className="py-2">
          <div>
            <b className="underline">Lesson 1: </b>
          </div>
            Basic hiragana has 46 sounds. See this table for the basic{' '}
          <span className="text-blue-500 underline" onClick={toggleBasicHiraganaModal}>
              pattern
          </span>
          {isBasicHiraganaModalOpen && (
            <div>
              <div>
                <h3>Hiragana Chart</h3>
                <button onClick={toggleBasicHiraganaModal}>Close</button>
              </div>
              {basicHiraganaTable}
            </div>
          )}
          <div className="flex flex-col space-y-2 justify-center items-center m-8">
            <a
              className="text-black border text-center border-black bg-gray-200 active:bg-gray-50 hover:bg-gray-400 p-2 rounded-md"
              onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
              href={createURL(LanguageNames.Japanese, LearningSections.WritingSystem, hiraganaBasicWritingSystem)}
            >
                Basic Hiragana Exercise
            </a>
          </div>
        </div>
      );
    case 2:
      return (
        <>
          <div className='py-2'>
            <div>
              <b className='underline'>Lesson 2: </b>
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
              <i>
            See this useful <span className='text-blue-500 underline'
                  onClick={toggleDakutenModal}>
              diagram
                </span> for the general pattern.
              </i>
              {isDakutenModalOpen && (
                <div>
                  <div>
                    <button onClick={toggleDakutenModal}>
                  Close
                    </button>
                  </div>
                  {dakutenTable}
                  <div>
                    (1) ぢ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                  </div>
                  <div>
                    (2) づ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
                  </div>       
                </div>
              )}
              {isDakutenModalOpen && (
                <div
                  onClick={toggleDakutenModal}
                />
              )}
            </div>
            <div>
            </div>      
          </div>
          <div className='flex flex-col space-y-2 justify-center items-center m-8'>
            <a className='text-black border text-center border-black bg-gray-200 active:bg-gray-50 hover:bg-gray-400 border-black p-2 rounded-md'
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
        </>
      );
    case 3:
      return (
        <div className="py-2">
          <div className='py-2'>
            <div>
              <b className='underline'>Lesson 3: </b>
            </div>
        Yōon  leads to an additional 36 hiragana variations.
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b>きょ(kyo) </b>and <b>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>
              しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
          <div className='flex flex-col space-y-2 justify-center items-center m-8'>
   
            <a className='text-black border text-centers border-black bg-gray-200 active:bg-gray-50 hover:bg-gray-400 border-black p-2 rounded-md'
              onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaYoonWritingSystem)
              }>
               Study Hiragana Yoōn combinations
              {hiraganaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
            </a>
          </div>
        </div>
      );
    default:
      return null;
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 md:text-lg">
      <h4 className="text-center text-2xl py-12">Hiragana Explained</h4>
      <div className="py-2">
        Learning hiragana is the first step to learning Japanese. By learning all three lessons in order, you will learn
        the basics of Japanese pronunciation.
      </div>

      {/* Display Lesson Content */}
      <LessonContent />

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
    </div>
  );
};

export default HiraganaExplained;
