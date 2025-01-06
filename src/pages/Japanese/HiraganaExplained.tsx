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

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4>Hiragana Explained</h4>
          <div>
          Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. 
          </div>
          <div>
            <b>Basic Hiragana</b>  has <a onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaBasicWritingSystem)
              }>
                      46 sounds</a>. See this table for the basic 
            <a onClick={toggleBasicHiraganaModal}>
          pattern
            </a>
            {isBasicHiraganaModalOpen && (
              <div>
                <div>
                  <div>
                    <h3>Hiragana Chart</h3>
                    <button 
                      onClick={toggleBasicHiraganaModal}>
    Close
                    </button>
                  </div>
             
                </div>
                {basicHiraganaTable}                  
              </div>
            )}

            {isBasicHiraganaModalOpen && (
              <div
                onClick={toggleBasicHiraganaModal}
              />
            )}
          </div>
          <div>
            <b>Dakuten and Handakuten</b> lead to another <a onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaDakutenWritingSystem)
              }>25 hiragana variations
              {hiraganaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
            </a>. <br></br>
            Dakuten and handakuten are marks added on top of hiragana that alter pronunciation. 
            <div>
            </div>
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations. For example: <b>か (ka) → が (ga)</b>. <br></br> 
            <div>

            </div>
            The handakuten mark is <b>( ゜)</b>. There are 5 variations.  For example: <b>は (ha) → ぱ (pa)</b>.
            <div>
              <i>
                  See this useful <a
                  onClick={toggleDakutenModal}
                >
          diagram
                </a> for the general pattern.
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
          <div>
            <b>Yōon</b>  leads to an additional <a onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaYoonWritingSystem)
              }>
                36 hiragana combinations
              {hiraganaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
            </a>
                . <div></div>
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b>きょ(kyo) </b>and <b>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
        </div>
        
      </div>
    </>
  );
}
 
export default HiraganaExplained;
