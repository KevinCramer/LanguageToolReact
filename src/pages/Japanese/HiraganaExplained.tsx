import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { japaneseVocabTopicSlugNames, languages as languagesVocab } from '../../data/structured-data/words';

import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const HiraganaExplained = () => { 
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email
  const handleProtectedClick = useProtectedLink();

  const japaneseWritingSystems = (languagesVocab as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const hiraganaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.basicHiragana)
  const hiraganaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.hiraganaDakuten)
  const hiraganaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.hiraganaYoon)

  const dakutenTable = <table style={{ border:'1' , borderCollapse: 'collapse', textAlign: 'center' }}>
    <thead>
      <tr style={{ height: '40px' }}>
        <th>K → G</th>
        <th>S → Z</th>
        <th>T → D</th>
        <th>H → B</th>
        <th>H → P</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ height: '40px' }}>
        <td>か (ka) → が (ga)</td>
        <td>さ (sa) → ざ (za)</td>
        <td>た (ta) → だ (da)</td>
        <td>は (ha) → ば (ba)</td>
        <td>は (ha) → ぱ (pa)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>き (ki) → ぎ (gi)</td>
        <td>し (shi) → じ (ji)</td>
        <td>ち (chi) → ぢ(di)*</td>
        <td>ひ (hi) → び (bi)</td>
        <td>ひ (hi) → ぴ (pi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>く (ku) → ぐ (gu)</td>
        <td>す (su) → ず (zu)</td>
        <td>つ (tsu) → づ (du)*</td>
        <td>ふ (fu) → ぶ (bu)</td>
        <td>ふ (fu) → ぷ (pu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>け (ke) → げ (ge)</td>
        <td>せ (se) → ぜ (ze)</td>
        <td>て (te) → で (de)</td>
        <td>へ (he) → べ (be)</td>
        <td>へ (he) → ぺ (pe)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>こ (ko) → ご (go)</td>
        <td>そ (so) → ぞ (zo)</td>
        <td>と (to) → ど (do)</td>
        <td>ほ (ho) → ぼ (bo)</td>
        <td>ほ (ho) → ぽ (po)</td>
      </tr>
    </tbody>
  </table>

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Hiragana Explained</h4>
          <div>
          Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b style={{ fontSize: '20px' }}>Basic Hiragana</b>  has <a onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaBasicWritingSystem)
              }>
                      46 sounds</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b style={{ fontSize: '20px' }}>Dakuten and Han-Dakuten</b> lead to another <a onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaDakutenWritingSystem)
              }>25 hiragana variations
              {hiraganaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
            </a>. <br></br>
            Dakuten and han-dakuten are marks added on top of hiragana that alter pronunciation. 
            <div style={{ height: '0px' }}>

            </div>
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations. For example: <b style={{ whiteSpace: 'nowrap' }}>か (ka) → が (ga)</b>. <br></br> 
            <div style={{ height: '0px' }}>

            </div>
            The han-dakuten mark is <b>( ゜)</b>. There are 5 variations.  For example: <b style={{ whiteSpace: 'nowrap' }}>は (ha) → ぱ (pa)</b>.
            <div>
              <i style={{ fontSize:'15px' }}>
                  See this useful <a
                  style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleModal}
                >
          diagram
                </a> for the general pattern.
              </i>
              {isModalOpen && (
                <div
                  style={{
                    position: 'fixed',
                    backgroundColor: 'white',
                    transform: 'translate(0%, -75%)',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                  }}
                >
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'right', marginBottom: '10px' }}>
                    <button onClick={toggleModal} style={{ marginBottom: '10px', 
                    }}>
            Close
                    </button>
                  </div>
                  {dakutenTable}

                  <div style={{ marginTop: '20px' }}>
                    ぢ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    づ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
                  </div>
                  
                </div>
              )}

              {isModalOpen && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 999,
                  }}
                  onClick={toggleModal}
                />
              )}
            </div>
            <div style={{ height: '20px' }}>

            </div>      
          </div>
          <div style={{ paddingTop:'0px' }}>
            <b style={{ fontSize: '20px' }}>Yōon</b>  leads to an additional <a onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaYoonWritingSystem)
              }>
                36 hiragana combinations
              {hiraganaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
            </a>
                . <div></div>
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b style={{ whiteSpace: 'nowrap' }}>きゃ(kya) </b>and <b style={{ whiteSpace: 'nowrap' }}>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
        </div>
        
      </div>
    </>
  );
}
 
export default HiraganaExplained;
