import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { japaneseVocabTopicSlugNames, languages as languagesVocab } from '../../data/structured-data/words';

import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const KatakanaExplained = () => { 
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email
  const handleProtectedClick = useProtectedLink();

  const japaneseWritingSystems = (languagesVocab as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const katakanaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.basicKatakana)
  const katakanaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaDakuten)
  const katakanaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaYoon)

  const katakanaSpecialYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseVocabTopicSlugNames.katakanaSpecialYoon)

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

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
        <td>カ (ka) → ガ (ga)</td>
        <td>サ (sa) → ザ (za)</td>
        <td>タ (ta) → ダ (da)</td>
        <td>ハ (ha) → バ (ba)</td>
        <td>ハ (ha) → パ (pa)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>キ (ki) → ギ (gi)</td>
        <td>シ (shi) → ジ (ji)</td>
        <td>チ (chi) → ヂ (di)*</td>
        <td>ヒ (hi) → ビ (bi)</td>
        <td>ヒ (hi) → ピ (pi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>ク (ku) → グ (gu)</td>
        <td>ス (su) → ズ (zu)</td>
        <td>ツ (tsu) → ヅ (du)*</td>
        <td>フ (fu) → ブ (bu)</td>
        <td>フ (fu) → プ (pu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>ケ (ke) → ゲ (ge)</td>
        <td>セ (se) → ゼ (ze)</td>
        <td>テ (te) → デ (de)</td>
        <td>ヘ (he) → ベ (be)</td>
        <td>ヘ (he) → ペ (pe)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>コ (ko) → ゴ (go)</td>
        <td>ソ (so) → ゾ (zo)</td>
        <td>ト (to) → ド (do)</td>
        <td>ホ (ho) → ボ (bo)</td>
        <td>ホ (ho) → ポ (po)</td>
      </tr>
    </tbody>
  </table>

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Katakana Explained</h4>
          <div>
          Learning katakana is the second step to learning japanese. By learning all 5 concepts below you will learn the basics of pronouncing Japanese loan words. 
          </div>
          <div style={{ paddingTop:'30px' }}>
            <b style={{ fontSize:'20px' }}>Basic Katakana</b>  has <a onClick={handleProtectedClick(katakanaBasicWritingSystem)}
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaBasicWritingSystem)
              }>
                      46 sounds</a>. 
            <ul>
              <li>
                <i style={{ fontSize:'15px' }}>
                  Each basic katakana has a matching basic hiragana that produces the same sound. Diagram coming soon.
                </i>
              </li>
            </ul>
          </div>
          <div style={{ paddingTop:'30px' }}>
            <b style={{ fontSize:'20px' }}>Dakuten and Han-Dakuten</b> lead to another <a onClick={handleProtectedClick(katakanaDakutenWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaDakutenWritingSystem)
              }>25 katakana variations
              {katakanaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
            </a>. <br></br>
            Dakuten and han-dakuten are marks added on top of katakana that alter pronunciation. 
            <div style={{ height: '0px' }}>

            </div>
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations. For example: <b style={{ whiteSpace: 'nowrap' }}>カ (ka) → ガ (ga)</b>. <br></br> 
            The han-dakuten mark is <b>( ゜)</b>. There are 5 variations. For example: <b style={{ whiteSpace: 'nowrap' }}>ハ (ha) → パ (pa)</b>.
            <div style={{ height:'10px' }}>
            </div>
            <ul>
              <li>
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
                      padding: '20px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                      zIndex: 1000,
                    }}
                  >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'right', marginBottom: '10px' }}>
                      <button onClick={toggleModal} style={{ marginTop: '10px' }}>
                        Close
                      </button>
                    </div>
                    {dakutenTable}
                    <div style={{ marginTop: '20px' }}>
                    チ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                    </div>
                    <div style={{ marginTop: '10px' }}>
                    ツ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
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
              </li>
              <li>
                <i style={{ fontSize:'15px' }}>
              Also each dakuten/han-dakuten katakana has a matching dakuten/han-dakuten hiragana that produces the same sound. Diagram coming soon.
                </i>
              </li>
            </ul>
          </div>
          <div style={{ paddingTop:'30px' }}>
            <b style={{ fontSize:'20px' }}>Native Yōon sounds</b>  leads to an additional: <a onClick={handleProtectedClick(katakanaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaYoonWritingSystem)
              }>
                36 katakana combinations
              {katakanaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
            </a> 
            <div>
              Some katakana combine to form Yōon sounds. In these combinations,
            the first character remains full-sized, while the second is smaller.
            Examples like <b>キャ (kya) </b>and <b>ミュ (myu)</b> represent single, blended 
            syllables rather than separate sounds. This blending is crucial in words like <br/>
              <b>キャリア (kyaria, career)</b> and <b>ミュージック (myūjikku, music)</b>. 
              <ul>
                <li>
                  <i style={{ fontSize:'15px' }}>
                    Each native yōon katakana has a matching yōon hiragana that produces the same sound. Diagram coming soon.
                  </i>
                </li>
              </ul>
            </div>
            <div style={{ paddingTop: '30px' }}>
              <b style={{ fontSize:'20px' }}>Foreign Yōon sounds</b>  leads to an additional: <a onClick={handleProtectedClick(katakanaSpecialYoonWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaSpecialYoonWritingSystem)
                }>
                22 katakana combinations
                {katakanaSpecialYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
              </a>
              <div>
                Some sounds from non Japanese languages cannot be captured by the 36 native katakana 
                yōon sounds. For Example <b>ヴァ (bwa/va) </b>and <b>フィ (fi) </b>
                are foreign sounds in the Japanese loan words <br/><b>ヴァイオリン (vaiorin, violin)</b> and <b>フィルム (firumu, film)</b> respectively.
              </div>
            </div>
            <div style={{ paddingTop:'30px' }}>
              <b style={{ fontSize:'20px' }}>Long Vowels</b> In Katakana, long vowels are handled differently compared to Hiragana.
               Instead of adding extra vowels to extend the sound, Katakana uses a simple dash-like symbol: <b>ー</b> <br/>
                This symbol tells you to lengthen the vowel sound of the character it follows. 
                For example:

              <div style={{ height:'20px' }}></div>
              <div>              
                <b>サカ (saka) </b> becomes <b>サーカー (sākā, soccer) </b> 
              </div>
              <div style={{ height:'20px' }}></div>
              <div>         
                <b>ノト (noto)</b> becomes  <b>ノート (nōto, notebook)</b>
              </div>
              <div style={{ height:'20px' }}></div>

              The sound is smooth and continuous, not repeated, 
              making it an important part of writing foreign words or names in Katakana!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default KatakanaExplained;
