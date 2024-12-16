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
    <table style={{ border: '1px solid', borderCollapse: 'collapse', textAlign: 'center' }}>
      <thead>
        <tr style={{ height: '40px' }}>
          <th>A</th>
          <th>I</th>
          <th>U</th>
          <th>E</th>
          <th>O</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: '40px' }}>
          <td>ア (a)</td>
          <td>イ (i)</td>
          <td>ウ (u)</td>
          <td>エ (e)</td>
          <td>オ (o)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>カ (ka)</td>
          <td>キ (ki)</td>
          <td>ク (ku)</td>
          <td>ケ (ke)</td>
          <td>コ (ko)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>サ (sa)</td>
          <td>シ (shi)</td>
          <td>ス (su)</td>
          <td>セ (se)</td>
          <td>ソ (so)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>タ (ta)</td>
          <td>チ (chi)</td>
          <td>ツ (tsu)</td>
          <td>テ (te)</td>
          <td>ト (to)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>ナ (na)</td>
          <td>ニ (ni)</td>
          <td>ヌ (nu)</td>
          <td>ネ (ne)</td>
          <td>ノ (no)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>ハ (ha)</td>
          <td>ヒ (hi)</td>
          <td>フ (fu)</td>
          <td>ヘ (he)</td>
          <td>ホ (ho)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>マ (ma)</td>
          <td>ミ (mi)</td>
          <td>ム (mu)</td>
          <td>メ (me)</td>
          <td>モ (mo)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>ヤ (ya)</td>
          <td></td>
          <td>ユ (yu)</td>
          <td></td>
          <td>ヨ (yo)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>ラ (ra)</td>
          <td>リ (ri)</td>
          <td>ル (ru)</td>
          <td>レ (re)</td>
          <td>ロ (ro)</td>
        </tr>
        <tr style={{ height: '40px' }}>
          <td>ワ (wa)</td>
          <td></td>
          <td>ヲ (wo)</td>
          <td></td>
          <td>ン (n)</td>
        </tr>
      </tbody>
    </table>
  );
  
  const basicHiraganaToKatakanaTable = <table style={{ border: '1px solid black', borderCollapse: 'collapse', textAlign: 'center', width: '100%' }}>
    <thead>
      <tr style={{ height: '40px', backgroundColor: '#f0f0f0' }}>
        <th style={{ border: '1px solid black', width: '50%;' }}>Hiragana</th>
        <th style={{ border: '1px solid black', width: '50%' }}>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>あ (a)</td>
        <td style={{ border: '1px solid black' }}>ア (a)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>い (i)</td>
        <td style={{ border: '1px solid black' }}>イ (i)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>う (u)</td>
        <td style={{ border: '1px solid black' }}>ウ (u)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>え (e)</td>
        <td style={{ border: '1px solid black' }}>エ (e)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>お (o)</td>
        <td style={{ border: '1px solid black' }}>オ (o)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>か (ka)</td>
        <td style={{ border: '1px solid black' }}>カ (ka)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>き (ki)</td>
        <td style={{ border: '1px solid black' }}>キ (ki)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>く (ku)</td>
        <td style={{ border: '1px solid black' }}>ク (ku)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>け (ke)</td>
        <td style={{ border: '1px solid black' }}>ケ (ke)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>こ (ko)</td>
        <td style={{ border: '1px solid black' }}>コ (ko)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>さ (sa)</td>
        <td style={{ border: '1px solid black' }}>サ (sa)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>し (shi)</td>
        <td style={{ border: '1px solid black' }}>シ (shi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>す (su)</td>
        <td style={{ border: '1px solid black' }}>ス (su)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>せ (se)</td>
        <td style={{ border: '1px solid black' }}>セ (se)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>そ (so)</td>
        <td style={{ border: '1px solid black' }}>ソ (so)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>た (ta)</td>
        <td style={{ border: '1px solid black' }}>タ (ta)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ち (chi)</td>
        <td style={{ border: '1px solid black' }}>チ (chi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>つ (tsu)</td>
        <td style={{ border: '1px solid black' }}>ツ (tsu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>て (te)</td>
        <td style={{ border: '1px solid black' }}>テ (te)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>と (to)</td>
        <td style={{ border: '1px solid black' }}>ト (to)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>な (na)</td>
        <td style={{ border: '1px solid black' }}>ナ (na)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>に (ni)</td>
        <td style={{ border: '1px solid black' }}>ニ (ni)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぬ (nu)</td>
        <td style={{ border: '1px solid black' }}>ヌ (nu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ね (ne)</td>
        <td style={{ border: '1px solid black' }}>ネ (ne)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>の (no)</td>
        <td style={{ border: '1px solid black' }}>ノ (no)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>は (ha)</td>
        <td style={{ border: '1px solid black' }}>ハ (ha)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ひ (hi)</td>
        <td style={{ border: '1px solid black' }}>ヒ (hi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ふ (fu)</td>
        <td style={{ border: '1px solid black' }}>フ (fu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>へ (he)</td>
        <td style={{ border: '1px solid black' }}>ヘ (he)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ほ (ho)</td>
        <td style={{ border: '1px solid black' }}>ホ (ho)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ま (ma)</td>
        <td style={{ border: '1px solid black' }}>マ (ma)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>み (mi)</td>
        <td style={{ border: '1px solid black' }}>ミ (mi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>む (mu)</td>
        <td style={{ border: '1px solid black' }}>ム (mu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>め (me)</td>
        <td style={{ border: '1px solid black' }}>メ (me)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>も (mo)</td>
        <td style={{ border: '1px solid black' }}>モ (mo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>や (ya)</td>
        <td style={{ border: '1px solid black' }}>ヤ (ya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ゆ (yu)</td>
        <td style={{ border: '1px solid black' }}>ユ (yu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>よ (yo)</td>
        <td style={{ border: '1px solid black' }}>ヨ (yo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ら (ra)</td>
        <td style={{ border: '1px solid black' }}>ラ (ra)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>り (ri)</td>
        <td style={{ border: '1px solid black' }}>リ (ri)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>る (ru)</td>
        <td style={{ border: '1px solid black' }}>ル (ru)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>れ (re)</td>
        <td style={{ border: '1px solid black' }}>レ (re)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ろ (ro)</td>
        <td style={{ border: '1px solid black' }}>ロ (ro)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>わ (wa)</td>
        <td style={{ border: '1px solid black' }}>ワ (wa)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>を (wo)</td>
        <td style={{ border: '1px solid black' }}>ヲ (wo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ん (n)</td>
        <td style={{ border: '1px solid black' }}>ン (n)</td>
      </tr>
    </tbody>
  </table>

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
        <td>チ (chi) → <b>ヂ (di)¹</b></td>
        <td>ヒ (hi) → ビ (bi)</td>
        <td>ヒ (hi) → ピ (pi)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td>ク (ku) → グ (gu)</td>
        <td>ス (su) → ズ (zu)</td>
        <td>ツ (tsu) → <b>ヅ (du)²</b></td>
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

  const dakutenHiraganaToKatakanaTable = <table style= {{ border: '1px solid black', borderCollapse: 'collapse', textAlign: 'center', width: '100%' }}>
    <thead>
      <tr style= {{ height: '40px', backgroundColor: '#f0f0f0' }}>
        <th style= {{ border: '1px solid black', width: '50%' }}>Hiragana</th>
        <th style= {{ border: '1px solid black', width: '50%' }}>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>が (ga)</td>
        <td style= {{ border: '1px solid black' }}>ガ (ga)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぎ (gi)</td>
        <td style= {{ border: '1px solid black' }}>ギ (gi)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぐ (gu)</td>
        <td style= {{ border: '1px solid black' }}>グ (gu)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>げ (ge)</td>
        <td style= {{ border: '1px solid black' }}>ゲ (ge)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ご (go)</td>
        <td style= {{ border: '1px solid black' }}>ゴ (go)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ざ (za)</td>
        <td style= {{ border: '1px solid black' }}>ザ (za)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>じ (ji)</td>
        <td style= {{ border: '1px solid black' }}>ジ (ji)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ず (zu)</td>
        <td style= {{ border: '1px solid black' }}>ズ (zu)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぜ (ze)</td>
        <td style= {{ border: '1px solid black' }}>ゼ (ze)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぞ (zo)</td>
        <td style= {{ border: '1px solid black' }}>ゾ (zo)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>だ (da)</td>
        <td style= {{ border: '1px solid black' }}>ダ (da)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぢ (di) <small>(pronounced ji)</small></td>
        <td style= {{ border: '1px solid black' }}>ヂ (di)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>づ (du) <small>(pronounced zu)</small></td>
        <td style= {{ border: '1px solid black' }}>ヅ (du)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>で (de)</td>
        <td style= {{ border: '1px solid black' }}>デ (de)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ど (do)</td>
        <td style= {{ border: '1px solid black' }}>ド (do)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ば (ba)</td>
        <td style= {{ border: '1px solid black' }}>バ (ba)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>び (bi)</td>
        <td style= {{ border: '1px solid black' }}>ビ (bi)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぶ (bu)</td>
        <td style= {{ border: '1px solid black' }}>ブ (bu)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>べ (be)</td>
        <td style= {{ border: '1px solid black' }}>ベ (be)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぼ (bo)</td>
        <td style= {{ border: '1px solid black' }}>ボ (bo)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぱ (pa)</td>
        <td style= {{ border: '1px solid black' }}>パ (pa)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぴ (pi)</td>
        <td style= {{ border: '1px solid black' }}>ピ (pi)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぷ (pu)</td>
        <td style= {{ border: '1px solid black' }}>プ (pu)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぺ (pe)</td>
        <td style= {{ border: '1px solid black' }}>ペ (pe)</td>
      </tr>
      <tr style= {{ height: '40px' }}>
        <td style= {{ border: '1px solid black' }}>ぽ (po)</td>
        <td style= {{ border: '1px solid black' }}>ポ (po)</td>
      </tr>
    </tbody>
  </table>

  const yoonHiraganaToKatakanaTable = <table style={{ border: '1px solid black', borderCollapse: 'collapse', textAlign: 'center', width: '100%' }}>
    <thead>
      <tr style={{ height: '40px', backgroundColor: '#f0f0f0' }}>
        <th style={{ border: '1px solid black', width: '50%' }}>Hiragana</th>
        <th style={{ border: '1px solid black', width: '50%' }}>Katakana</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>きゃ (kya)</td>
        <td style={{ border: '1px solid black' }}>キャ (kya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>きゅ (kyu)</td>
        <td style={{ border: '1px solid black' }}>キュ (kyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>きょ (kyo)</td>
        <td style={{ border: '1px solid black' }}>キョ (kyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>しゃ (sha)</td>
        <td style={{ border: '1px solid black' }}>シャ (sha)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>しゅ (shu)</td>
        <td style={{ border: '1px solid black' }}>シュ (shu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>しょ (sho)</td>
        <td style={{ border: '1px solid black' }}>ショ (sho)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ちゃ (cha)</td>
        <td style={{ border: '1px solid black' }}>チャ (cha)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ちゅ (chu)</td>
        <td style={{ border: '1px solid black' }}>チュ (chu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ちょ (cho)</td>
        <td style={{ border: '1px solid black' }}>チョ (cho)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>にゃ (nya)</td>
        <td style={{ border: '1px solid black' }}>ニャ (nya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>にゅ (nyu)</td>
        <td style={{ border: '1px solid black' }}>ニュ (nyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>にょ (nyo)</td>
        <td style={{ border: '1px solid black' }}>ニョ (nyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ひゃ (hya)</td>
        <td style={{ border: '1px solid black' }}>ヒャ (hya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ひゅ (hyu)</td>
        <td style={{ border: '1px solid black' }}>ヒュ (hyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ひょ (hyo)</td>
        <td style={{ border: '1px solid black' }}>ヒョ (hyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>みゃ (mya)</td>
        <td style={{ border: '1px solid black' }}>ミャ (mya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>みゅ (myu)</td>
        <td style={{ border: '1px solid black' }}>ミュ (myu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>みょ (myo)</td>
        <td style={{ border: '1px solid black' }}>ミョ (myo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>りゃ (rya)</td>
        <td style={{ border: '1px solid black' }}>リャ (rya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>りゅ (ryu)</td>
        <td style={{ border: '1px solid black' }}>リュ (ryu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>りょ (ryo)</td>
        <td style={{ border: '1px solid black' }}>リョ (ryo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぎゃ (gya)</td>
        <td style={{ border: '1px solid black' }}>ギャ (gya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぎゅ (gyu)</td>
        <td style={{ border: '1px solid black' }}>ギュ (gyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぎょ (gyo)</td>
        <td style={{ border: '1px solid black' }}>ギョ (gyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>じゃ (jya)</td>
        <td style={{ border: '1px solid black' }}>ジャ (jya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>じゅ (jyu)</td>
        <td style={{ border: '1px solid black' }}>ジュ (jyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>じょ (jyo)</td>
        <td style={{ border: '1px solid black' }}>ジョ (jyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぢゃ (dya)</td>
        <td style={{ border: '1px solid black' }}>ヂャ (dya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぢゅ (dyu)</td>
        <td style={{ border: '1px solid black' }}>ヂュ (dyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぢょ (dyo)</td>
        <td style={{ border: '1px solid black' }}>ヂョ (dyo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>びゃ (bya)</td>
        <td style={{ border: '1px solid black' }}>ビャ (bya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>びゅ (byu)</td>
        <td style={{ border: '1px solid black' }}>ビュ (byu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>びょ (byo)</td>
        <td style={{ border: '1px solid black' }}>ビョ (byo)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぴゃ (pya)</td>
        <td style={{ border: '1px solid black' }}>ピャ (pya)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぴゅ (pyu)</td>
        <td style={{ border: '1px solid black' }}>ピュ (pyu)</td>
      </tr>
      <tr style={{ height: '40px' }}>
        <td style={{ border: '1px solid black' }}>ぴょ (pyo)</td>
        <td style={{ border: '1px solid black' }}>ピョ (pyo)</td>
      </tr>
    </tbody>
  </table>
;
  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Katakana Explained</h4>
          <div>
          Katakana is mainly used to write Japanese loan words. For example in Japanese the word for 'camera' is <b>カメラ (kamera)</b>. Learning all 5 concepts below is essential to learning Japanese.
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
            <div>
              <i style={{ fontSize:'15px' }}>
                  Note 1 - See this diagram for basic <a
                  style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleBasicKatakanaModal}
                >
          pattern
                </a>.
              </i>
              {isBasicKatakanaModalOpen && (
                <div
                  style={{
                    position: 'fixed',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <h3 style={{ margin: 0, textAlign: 'center', flex: 1 }}>Katakana Chart</h3>
                    <button 
                      onClick={toggleBasicKatakanaModal} 
                      style={{ marginBottom: '10px', marginLeft: 'auto' }}
                    >
                      Close
                    </button>
                  </div>
             
                  {basicKatakanaTable}
                </div>
              )}

              {isBasicKatakanaModalOpen && (
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
                  onClick={toggleBasicKatakanaModal}
                />
              )}
            </div>
            <div>
              <i style={{ fontSize:'15px' }}>
                  Note 2 - Each basic katakana has a matching basic hiragana that produces the same sound. See <a
                  style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleBasicConversionModal}
                >
          diagram
                </a>.
              </i>
              {isBasicConversionModalOpen && (
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
                    <button onClick={toggleBasicConversionModal} style={{ marginTop: '10px' }}>
                        Close
                    </button>
                  </div>
                  {basicHiraganaToKatakanaTable}
                </div>
              )}

              {isDakutenModalOpen && (
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
                  onClick={toggleDakutenModal}
                />
              )}
            </div>
             
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
            <div>
              <i style={{ fontSize:'15px' }}>
                  Note 1 - See this useful <a
                  style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleDakutenModal}
                >
          diagram
                </a> for the general pattern.
              </i>
              {isDakutenModalOpen && (
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
                    <button onClick={toggleDakutenModal} style={{ marginTop: '10px' }}>
                        Close
                    </button>
                  </div>
                  {dakutenTable}
                  <div style={{ marginTop: '20px' }}>
                    (1) ヂ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    (2) ヅ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
                  </div>
                </div>
              )}

              {isDakutenConversionModalOpen && (
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
                  onClick={toggleDakutenModal}
                />
              )}
            </div>
            <div>
              <i style={{ fontSize:'15px' }}>
 Note 2 - Also each dakuten/han-dakuten katakana has a matching dakuten/han-dakuten hiragana that produces the same sound. See <a
                  style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleDakutenConversionModal}
                >
          diagram
                </a>.
              </i>
              {isDakutenConversionModalOpen && (
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
                    <button onClick={toggleDakutenConversionModal} style={{ marginTop: '10px' }}>
                        Close
                    </button>
                  </div>
                  {dakutenHiraganaToKatakanaTable}
                </div>
              )}

              {isDakutenModalOpen && (
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
                  onClick={toggleDakutenConversionModal}
                />
              )}
            </div>
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
              <div>
                <i style={{ fontSize:'15px' }}>
                    Note - Each native yōon katakana has a matching yōon hiragana that produces the same sound. See <a
                    style={{ color: 'rgb(13, 110,253)', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={toggleYoonConversionModal}
                  >
          diagram
                  </a>.
                </i>
                {isYoonConversionModalOpen && (
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
                      <button onClick={toggleYoonConversionModal} style={{ marginTop: '10px' }}>
                        Close
                      </button>
                    </div>
                    {yoonHiraganaToKatakanaTable}
                  </div>
                )}

                {isYoonConversionModalOpen && (
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
                    onClick={toggleYoonConversionModal}
                  />
                )}
              </div>
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
