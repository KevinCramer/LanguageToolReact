import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { japaneseVocabTopicSlugNames, languages as languagesVocab } from '../../data/structured-data/words';

import { useProtectedLink } from '../../helpers/use-protected-link';
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

  const [isBasicKatakanaModalOpen, setBasicKatakanaModalOpen] = useState(false);

  const toggleBasicKatakanaModal = () => {
    setBasicKatakanaModalOpen(!isBasicKatakanaModalOpen);
  };

  const [isDakutenModalOpen, setDakutenModalOpen] = useState(false);

  const toggleDakutenModal = () => {
    setDakutenModalOpen(!isDakutenModalOpen);
  };

  const [isBasicConversionModalOpen, setBasicConversionModalOpen] = useState(false);

  const toggleBasicConversionModal = () => {
    setBasicConversionModalOpen(!isBasicConversionModalOpen);
  };
 
  const [isDakutenConversionModalOpen, setDakutenConversionModalOpen] = useState(false);

  const toggleDakutenConversionModal = () => {
    setDakutenConversionModalOpen(!isDakutenConversionModalOpen);
  };

  const [isYoonConversionModalOpen, setYoonConversionModalOpen] = useState(false);

  const toggleYoonConversionModal = () => {
    setYoonConversionModalOpen(!isYoonConversionModalOpen);
  };

  const basicKatakanaTable = (
    <table>
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
          <td>ア (a)</td>
          <td>イ (i)</td>
          <td>ウ (u)</td>
          <td>エ (e)</td>
          <td>オ (o)</td>
        </tr>
        <tr>
          <td>カ (ka)</td>
          <td>キ (ki)</td>
          <td>ク (ku)</td>
          <td>ケ (ke)</td>
          <td>コ (ko)</td>
        </tr>
        <tr>
          <td>サ (sa)</td>
          <td>シ (shi)</td>
          <td>ス (su)</td>
          <td>セ (se)</td>
          <td>ソ (so)</td>
        </tr>
        <tr>
          <td>タ (ta)</td>
          <td>チ (chi)</td>
          <td>ツ (tsu)</td>
          <td>テ (te)</td>
          <td>ト (to)</td>
        </tr>
        <tr>
          <td>ナ (na)</td>
          <td>ニ (ni)</td>
          <td>ヌ (nu)</td>
          <td>ネ (ne)</td>
          <td>ノ (no)</td>
        </tr>
        <tr>
          <td>ハ (ha)</td>
          <td>ヒ (hi)</td>
          <td>フ (fu)</td>
          <td>ヘ (he)</td>
          <td>ホ (ho)</td>
        </tr>
        <tr>
          <td>マ (ma)</td>
          <td>ミ (mi)</td>
          <td>ム (mu)</td>
          <td>メ (me)</td>
          <td>モ (mo)</td>
        </tr>
        <tr>
          <td>ヤ (ya)</td>
          <td></td>
          <td>ユ (yu)</td>
          <td></td>
          <td>ヨ (yo)</td>
        </tr>
        <tr>
          <td>ラ (ra)</td>
          <td>リ (ri)</td>
          <td>ル (ru)</td>
          <td>レ (re)</td>
          <td>ロ (ro)</td>
        </tr>
        <tr>
          <td>ワ (wa)</td>
          <td></td>
          <td>ヲ (wo)</td>
          <td></td>
          <td>ン (n)</td>
        </tr>
      </tbody>
    </table>
  );
  
  const basicHiraganaToKatakanaTable = <table>
    <thead>
      <tr>
        <th>Hiragana</th>
        <th>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>あ (a)</td>
        <td>ア (a)</td>
      </tr>
      <tr>
        <td>い (i)</td>
        <td>イ (i)</td>
      </tr>
      <tr>
        <td>う (u)</td>
        <td>ウ (u)</td>
      </tr>
      <tr>
        <td>え (e)</td>
        <td>エ (e)</td>
      </tr>
      <tr>
        <td>お (o)</td>
        <td>オ (o)</td>
      </tr>
      <tr>
        <td>か (ka)</td>
        <td>カ (ka)</td>
      </tr>
      <tr>
        <td>き (ki)</td>
        <td>キ (ki)</td>
      </tr>
      <tr>
        <td>く (ku)</td>
        <td>ク (ku)</td>
      </tr>
      <tr>
        <td>け (ke)</td>
        <td>ケ (ke)</td>
      </tr>
      <tr>
        <td>こ (ko)</td>
        <td>コ (ko)</td>
      </tr>
      <tr>
        <td>さ (sa)</td>
        <td>サ (sa)</td>
      </tr>
      <tr>
        <td>し (shi)</td>
        <td>シ (shi)</td>
      </tr>
      <tr>
        <td>す (su)</td>
        <td>ス (su)</td>
      </tr>
      <tr>
        <td>せ (se)</td>
        <td>セ (se)</td>
      </tr>
      <tr>
        <td>そ (so)</td>
        <td>ソ (so)</td>
      </tr>
      <tr>
        <td>た (ta)</td>
        <td>タ (ta)</td>
      </tr>
      <tr>
        <td>ち (chi)</td>
        <td>チ (chi)</td>
      </tr>
      <tr>
        <td>つ (tsu)</td>
        <td>ツ (tsu)</td>
      </tr>
      <tr>
        <td>て (te)</td>
        <td>テ (te)</td>
      </tr>
      <tr>
        <td>と (to)</td>
        <td>ト (to)</td>
      </tr>
      <tr>
        <td>な (na)</td>
        <td>ナ (na)</td>
      </tr>
      <tr>
        <td>に (ni)</td>
        <td>ニ (ni)</td>
      </tr>
      <tr>
        <td>ぬ (nu)</td>
        <td>ヌ (nu)</td>
      </tr>
      <tr>
        <td>ね (ne)</td>
        <td>ネ (ne)</td>
      </tr>
      <tr>
        <td>の (no)</td>
        <td>ノ (no)</td>
      </tr>
      <tr>
        <td>は (ha)</td>
        <td>ハ (ha)</td>
      </tr>
      <tr>
        <td>ひ (hi)</td>
        <td>ヒ (hi)</td>
      </tr>
      <tr>
        <td>ふ (fu)</td>
        <td>フ (fu)</td>
      </tr>
      <tr>
        <td>へ (he)</td>
        <td>ヘ (he)</td>
      </tr>
      <tr>
        <td>ほ (ho)</td>
        <td>ホ (ho)</td>
      </tr>
      <tr>
        <td>ま (ma)</td>
        <td>マ (ma)</td>
      </tr>
      <tr>
        <td>み (mi)</td>
        <td>ミ (mi)</td>
      </tr>
      <tr>
        <td>む (mu)</td>
        <td>ム (mu)</td>
      </tr>
      <tr>
        <td>め (me)</td>
        <td>メ (me)</td>
      </tr>
      <tr>
        <td>も (mo)</td>
        <td>モ (mo)</td>
      </tr>
      <tr>
        <td>や (ya)</td>
        <td>ヤ (ya)</td>
      </tr>
      <tr>
        <td>ゆ (yu)</td>
        <td>ユ (yu)</td>
      </tr>
      <tr>
        <td>よ (yo)</td>
        <td>ヨ (yo)</td>
      </tr>
      <tr>
        <td>ら (ra)</td>
        <td>ラ (ra)</td>
      </tr>
      <tr>
        <td>り (ri)</td>
        <td>リ (ri)</td>
      </tr>
      <tr>
        <td>る (ru)</td>
        <td>ル (ru)</td>
      </tr>
      <tr>
        <td>れ (re)</td>
        <td>レ (re)</td>
      </tr>
      <tr>
        <td>ろ (ro)</td>
        <td>ロ (ro)</td>
      </tr>
      <tr>
        <td>わ (wa)</td>
        <td>ワ (wa)</td>
      </tr>
      <tr>
        <td>を (wo)</td>
        <td>ヲ (wo)</td>
      </tr>
      <tr>
        <td>ん (n)</td>
        <td>ン (n)</td>
      </tr>
    </tbody>
  </table>

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
        <td>カ (ka) → ガ (ga)</td>
        <td>サ (sa) → ザ (za)</td>
        <td>タ (ta) → ダ (da)</td>
        <td>ハ (ha) → バ (ba)</td>
        <td>ハ (ha) → パ (pa)</td>
      </tr>
      <tr>
        <td>キ (ki) → ギ (gi)</td>
        <td>シ (shi) → ジ (ji)</td>
        <td>チ (chi) → <b>ヂ (di)¹</b></td>
        <td>ヒ (hi) → ビ (bi)</td>
        <td>ヒ (hi) → ピ (pi)</td>
      </tr>
      <tr>
        <td>ク (ku) → グ (gu)</td>
        <td>ス (su) → ズ (zu)</td>
        <td>ツ (tsu) → <b>ヅ (du)²</b></td>
        <td>フ (fu) → ブ (bu)</td>
        <td>フ (fu) → プ (pu)</td>
      </tr>
      <tr>
        <td>ケ (ke) → ゲ (ge)</td>
        <td>セ (se) → ゼ (ze)</td>
        <td>テ (te) → デ (de)</td>
        <td>ヘ (he) → ベ (be)</td>
        <td>ヘ (he) → ペ (pe)</td>
      </tr>
      <tr>
        <td>コ (ko) → ゴ (go)</td>
        <td>ソ (so) → ゾ (zo)</td>
        <td>ト (to) → ド (do)</td>
        <td>ホ (ho) → ボ (bo)</td>
        <td>ホ (ho) → ポ (po)</td>
      </tr>
    </tbody>
  </table>

  const dakutenHiraganaToKatakanaTable = <table>
    <thead>
      <tr>
        <th>Hiragana</th>
        <th>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>が (ga)</td>
        <td>ガ (ga)</td>
      </tr>
      <tr>
        <td>ぎ (gi)</td>
        <td>ギ (gi)</td>
      </tr>
      <tr>
        <td>ぐ (gu)</td>
        <td>グ (gu)</td>
      </tr>
      <tr>
        <td>げ (ge)</td>
        <td>ゲ (ge)</td>
      </tr>
      <tr>
        <td>ご (go)</td>
        <td>ゴ (go)</td>
      </tr>
      <tr>
        <td>ざ (za)</td>
        <td>ザ (za)</td>
      </tr>
      <tr>
        <td>じ (ji)</td>
        <td>ジ (ji)</td>
      </tr>
      <tr>
        <td>ず (zu)</td>
        <td>ズ (zu)</td>
      </tr>
      <tr>
        <td>ぜ (ze)</td>
        <td>ゼ (ze)</td>
      </tr>
      <tr>
        <td>ぞ (zo)</td>
        <td>ゾ (zo)</td>
      </tr>
      <tr>
        <td>だ (da)</td>
        <td>ダ (da)</td>
      </tr>
      <tr>
        <td>ぢ (di) <small>(pronounced ji)</small></td>
        <td>ヂ (di)</td>
      </tr>
      <tr>
        <td>づ (du) <small>(pronounced zu)</small></td>
        <td>ヅ (du)</td>
      </tr>
      <tr>
        <td>で (de)</td>
        <td>デ (de)</td>
      </tr>
      <tr>
        <td>ど (do)</td>
        <td>ド (do)</td>
      </tr>
      <tr>
        <td>ば (ba)</td>
        <td>バ (ba)</td>
      </tr>
      <tr>
        <td>び (bi)</td>
        <td>ビ (bi)</td>
      </tr>
      <tr>
        <td>ぶ (bu)</td>
        <td>ブ (bu)</td>
      </tr>
      <tr>
        <td>べ (be)</td>
        <td>ベ (be)</td>
      </tr>
      <tr>
        <td>ぼ (bo)</td>
        <td>ボ (bo)</td>
      </tr>
      <tr>
        <td>ぱ (pa)</td>
        <td>パ (pa)</td>
      </tr>
      <tr>
        <td>ぴ (pi)</td>
        <td>ピ (pi)</td>
      </tr>
      <tr>
        <td>ぷ (pu)</td>
        <td>プ (pu)</td>
      </tr>
      <tr>
        <td>ぺ (pe)</td>
        <td>ペ (pe)</td>
      </tr>
      <tr>
        <td>ぽ (po)</td>
        <td>ポ (po)</td>
      </tr>
    </tbody>
  </table>

  const yoonHiraganaToKatakanaTable = <table>
    <thead>
      <tr>
        <th>Hiragana</th>
        <th>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>きゃ (kya)</td>
        <td>キャ (kya)</td>
      </tr>
      <tr>
        <td>きゅ (kyu)</td>
        <td>キュ (kyu)</td>
      </tr>
      <tr>
        <td>きょ (kyo)</td>
        <td>キョ (kyo)</td>
      </tr>
      <tr>
        <td>しゃ (sha)</td>
        <td>シャ (sha)</td>
      </tr>
      <tr>
        <td>しゅ (shu)</td>
        <td>シュ (shu)</td>
      </tr>
      <tr>
        <td>しょ (sho)</td>
        <td>ショ (sho)</td>
      </tr>
      <tr>
        <td>ちゃ (cha)</td>
        <td>チャ (cha)</td>
      </tr>
      <tr>
        <td>ちゅ (chu)</td>
        <td>チュ (chu)</td>
      </tr>
      <tr>
        <td>ちょ (cho)</td>
        <td>チョ (cho)</td>
      </tr>
      <tr>
        <td>にゃ (nya)</td>
        <td>ニャ (nya)</td>
      </tr>
      <tr>
        <td>にゅ (nyu)</td>
        <td>ニュ (nyu)</td>
      </tr>
      <tr>
        <td>にょ (nyo)</td>
        <td>ニョ (nyo)</td>
      </tr>
      <tr>
        <td>ひゃ (hya)</td>
        <td>ヒャ (hya)</td>
      </tr>
      <tr>
        <td>ひゅ (hyu)</td>
        <td>ヒュ (hyu)</td>
      </tr>
      <tr>
        <td>ひょ (hyo)</td>
        <td>ヒョ (hyo)</td>
      </tr>
      <tr>
        <td>みゃ (mya)</td>
        <td>ミャ (mya)</td>
      </tr>
      <tr>
        <td>みゅ (myu)</td>
        <td>ミュ (myu)</td>
      </tr>
      <tr>
        <td>みょ (myo)</td>
        <td>ミョ (myo)</td>
      </tr>
      <tr>
        <td>りゃ (rya)</td>
        <td>リャ (rya)</td>
      </tr>
      <tr>
        <td>りゅ (ryu)</td>
        <td>リュ (ryu)</td>
      </tr>
      <tr>
        <td>りょ (ryo)</td>
        <td>リョ (ryo)</td>
      </tr>
      <tr>
        <td>ぎゃ (gya)</td>
        <td>ギャ (gya)</td>
      </tr>
      <tr>
        <td>ぎゅ (gyu)</td>
        <td>ギュ (gyu)</td>
      </tr>
      <tr>
        <td>ぎょ (gyo)</td>
        <td>ギョ (gyo)</td>
      </tr>
      <tr>
        <td>じゃ (jya)</td>
        <td>ジャ (jya)</td>
      </tr>
      <tr>
        <td>じゅ (jyu)</td>
        <td>ジュ (jyu)</td>
      </tr>
      <tr>
        <td>じょ (jyo)</td>
        <td>ジョ (jyo)</td>
      </tr>
      <tr>
        <td>ぢゃ (dya)</td>
        <td>ヂャ (dya)</td>
      </tr>
      <tr>
        <td>ぢゅ (dyu)</td>
        <td>ヂュ (dyu)</td>
      </tr>
      <tr>
        <td>ぢょ (dyo)</td>
        <td>ヂョ (dyo)</td>
      </tr>
      <tr>
        <td>びゃ (bya)</td>
        <td>ビャ (bya)</td>
      </tr>
      <tr>
        <td>びゅ (byu)</td>
        <td>ビュ (byu)</td>
      </tr>
      <tr>
        <td>びょ (byo)</td>
        <td>ビョ (byo)</td>
      </tr>
      <tr>
        <td>ぴゃ (pya)</td>
        <td>ピャ (pya)</td>
      </tr>
      <tr>
        <td>ぴゅ (pyu)</td>
        <td>ピュ (pyu)</td>
      </tr>
      <tr>
        <td>ぴょ (pyo)</td>
        <td>ピョ (pyo)</td>
      </tr>
    </tbody>
  </table>
;
  return (
    <>
      <div>
        <div>
          <h4>Katakana Explained</h4>
          <div>
          Katakana is mainly used to write Japanese loan words. For example in Japanese the word for 'camera' is <b>カメラ (kamera)</b>. Learning all 5 concepts below is essential to learning Japanese.
          </div>
          <div>
            <b>Basic Katakana</b>  has <a onClick={handleProtectedClick(katakanaBasicWritingSystem)}
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaBasicWritingSystem)
              }>
                      46 sounds</a>. 
            <div>
              <i>
                  Note 1 - See this diagram for basic <a
                  onClick={toggleBasicKatakanaModal}
                >
          pattern
                </a>.
              </i>
              {isBasicKatakanaModalOpen && (
                <div>
                  <div>
                    <h3>Katakana Chart</h3>
                    <button 
                      onClick={toggleBasicKatakanaModal}>
                      Close
                    </button>
                  </div>
             
                  {basicKatakanaTable}
                </div>
              )}

              {isBasicKatakanaModalOpen && (
                <div onClick={toggleBasicKatakanaModal}/>
              )}
            </div>
            <div>
              <i>
                  Note 2 - Each basic katakana has a matching basic hiragana that produces the same sound. See <a
                  onClick={toggleBasicConversionModal}
                >
          diagram
                </a>.
              </i>
              {isBasicConversionModalOpen && (
                <div>
                  <div>
                    <button onClick={toggleBasicConversionModal}>
                        Close
                    </button>
                  </div>
                  {basicHiraganaToKatakanaTable}
                </div>
              )}

              {isDakutenModalOpen && (
                <div onClick={toggleDakutenModal}/>
              )}
            </div>
             
          </div>
          <div>
            <b>Dakuten and Handakuten</b> lead to another <a onClick={handleProtectedClick(katakanaDakutenWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaDakutenWritingSystem)
              }>25 katakana variations
              {katakanaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
            </a>. <br></br>
            Dakuten and handakuten are marks added on top of katakana that alter pronunciation. 
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations. For example: <b>カ (ka) → ガ (ga)</b>. <br></br> 
            The handakuten mark is <b>( ゜)</b>. There are 5 variations. For example: <b>ハ (ha) → パ (pa)</b>.
            <div>
            </div>
            <div>
              <i>
                  Note 1 - See this useful <a
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
                    (1) ヂ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                  </div>
                  <div>
                    (2) ヅ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
                  </div>
                </div>
              )}

              {isDakutenConversionModalOpen && (
                <div onClick={toggleDakutenModal}/>
              )}
            </div>
            <div>
              <i>
 Note 2 - Also each dakuten/handakuten katakana has a matching dakuten/hankuten hiragana that produces the same sound. See <a
                  onClick={toggleDakutenConversionModal}
                >
          diagram
                </a>.
              </i>
              {isDakutenConversionModalOpen && (
                <div>
                  <div>
                    <button onClick={toggleDakutenConversionModal}>
                        Close
                    </button>
                  </div>
                  {dakutenHiraganaToKatakanaTable}
                </div>
              )}

              {isDakutenModalOpen && (
                <div onClick={toggleDakutenConversionModal}/>
              )}
            </div>
          </div>
          <div>
            <b>Native Yōon sounds</b>  leads to an additional: <a onClick={handleProtectedClick(katakanaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  katakanaYoonWritingSystem)
              }>
                36 katakana combinations
              {katakanaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
            </a> 
            <div>
              Some katakana combine to form Yōon sounds. In these combinations,
            the first character remains full-sized, while the second is smaller.
            Examples like <b>キャ (kya) </b>and <b>ミュ (myu)</b> represent single, blended 
            syllables rather than separate sounds. This blending is crucial in words like <br/>
              <b>キャリア (kyaria, career)</b> and <b>ミュージック (myūjikku, music)</b>. 
              <div>
                <i>
                    Note - Each native yōon katakana has a matching yōon hiragana that produces the same sound. See <a
                    onClick={toggleYoonConversionModal}
                  >
          diagram
                  </a>.
                </i>
                {isYoonConversionModalOpen && (
                  <div>
                    <div>
                      <button onClick={toggleYoonConversionModal}>
                        Close
                      </button>
                    </div>
                    {yoonHiraganaToKatakanaTable}
                  </div>
                )}

                {isYoonConversionModalOpen && (
                  <div onClick={toggleYoonConversionModal}/>
                )}
              </div>
            </div>
            <div>
              <b>Foreign Yōon sounds</b>  leads to an additional: <a onClick={handleProtectedClick(katakanaSpecialYoonWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaSpecialYoonWritingSystem)
                }>
                22 katakana combinations
                {katakanaSpecialYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
              <div>
                Some sounds from non Japanese languages cannot be captured by the 36 native katakana 
                yōon sounds. For Example <b>ヴァ (bwa/va) </b>and <b>フィ (fi) </b>
                are foreign sounds in the Japanese loan words <br/><b>ヴァイオリン (vaiorin, violin)</b> and <b>フィルム (firumu, film)</b> respectively.
              </div>
            </div>
            <div>
              <b>Long Vowels</b> In Katakana, long vowels are handled differently compared to Hiragana.
               Instead of adding extra vowels to extend the sound, Katakana uses a simple dash-like symbol: <b>ー</b> <br/>
                This symbol tells you to lengthen the vowel sound of the character it follows. 
                For example:
              <div>              
                <b>サカ (saka) </b> becomes <b>サーカー (sākā, soccer) </b> 
              </div>
              <div></div>
              <div>         
                <b>ノト (noto)</b> becomes  <b>ノート (nōto, notebook)</b>
              </div>
              <div></div>

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
