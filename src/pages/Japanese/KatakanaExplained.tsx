import { japaneseWritingSystemsTopicSlugNames, writingSystems } from '../../data/structured-data/writingSystems';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';

import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useProtectedLink } from '../../helpers/use-protected-link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const lessonTitles = {
  1: 'Basic Katakana',
  2: 'Katakana with Dakuten and Handakuten',
  3: 'Yoōn Katakana',
  4: 'Foreign Yoōn Katakana',
  5: 'Katakana Long Vowels'

}

const KatakanaExplained = () => { 
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email
  const handleProtectedClick = useProtectedLink();
  const [searchParams, setSearchParams] = useSearchParams();

  const japaneseWritingSystems = writingSystems[0];

  const katakanaBasicWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseWritingSystemsTopicSlugNames.basicKatakana)
  const katakanaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseWritingSystemsTopicSlugNames.katakanaDakuten)
  const katakanaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseWritingSystemsTopicSlugNames.katakanaYoon)

  const katakanaSpecialYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === japaneseWritingSystemsTopicSlugNames.katakanaSpecialYoon)

  // Get the initial lesson number from query params or default to 1
  const initialLesson = parseInt(searchParams.get('lesson') || '1', 10);
  const [currentLesson, setCurrentLesson] = useState(initialLesson);

  useEffect(() => {
  // Update the query parameter whenever the lesson changes
    setSearchParams({ lesson: currentLesson.toString() });
  }, [currentLesson, setSearchParams]);

  const basicKatakanaTable = (
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
            <td className="border border-gray-500 px-4 py-2">ア (a)</td>
            <td className="border border-gray-500 px-4 py-2">イ (i)</td>
            <td className="border border-gray-500 px-4 py-2">ウ (u)</td>
            <td className="border border-gray-500 px-4 py-2">エ (e)</td>
            <td className="border border-gray-500 px-4 py-2">オ (o)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">カ (ka)</td>
            <td className="border border-gray-500 px-4 py-2">キ (ki)</td>
            <td className="border border-gray-500 px-4 py-2">ク (ku)</td>
            <td className="border border-gray-500 px-4 py-2">ケ (ke)</td>
            <td className="border border-gray-500 px-4 py-2">コ (ko)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">サ (sa)</td>
            <td className="border border-gray-500 px-4 py-2">シ (shi)</td>
            <td className="border border-gray-500 px-4 py-2">ス (su)</td>
            <td className="border border-gray-500 px-4 py-2">セ (se)</td>
            <td className="border border-gray-500 px-4 py-2">ソ (so)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">タ (ta)</td>
            <td className="border border-gray-500 px-4 py-2">チ (chi)</td>
            <td className="border border-gray-500 px-4 py-2">ツ (tsu)</td>
            <td className="border border-gray-500 px-4 py-2">テ (te)</td>
            <td className="border border-gray-500 px-4 py-2">ト (to)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ナ (na)</td>
            <td className="border border-gray-500 px-4 py-2">ニ (ni)</td>
            <td className="border border-gray-500 px-4 py-2">ヌ (nu)</td>
            <td className="border border-gray-500 px-4 py-2">ネ (ne)</td>
            <td className="border border-gray-500 px-4 py-2">ノ (no)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ハ (ha)</td>
            <td className="border border-gray-500 px-4 py-2">ヒ (hi)</td>
            <td className="border border-gray-500 px-4 py-2">フ (fu)</td>
            <td className="border border-gray-500 px-4 py-2">ヘ (he)</td>
            <td className="border border-gray-500 px-4 py-2">ホ (ho)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">マ (ma)</td>
            <td className="border border-gray-500 px-4 py-2">ミ (mi)</td>
            <td className="border border-gray-500 px-4 py-2">ム (mu)</td>
            <td className="border border-gray-500 px-4 py-2">メ (me)</td>
            <td className="border border-gray-500 px-4 py-2">モ (mo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ヤ (ya)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ユ (yu)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ヨ (yo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ラ (ra)</td>
            <td className="border border-gray-500 px-4 py-2">リ (ri)</td>
            <td className="border border-gray-500 px-4 py-2">ル (ru)</td>
            <td className="border border-gray-500 px-4 py-2">レ (re)</td>
            <td className="border border-gray-500 px-4 py-2">ロ (ro)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ワ (wa)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ヲ (wo)</td>
            <td className="border border-gray-500 px-4 py-2"></td>
            <td className="border border-gray-500 px-4 py-2">ン (n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const basicHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Katakana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">あ (a)</td>
            <td className="border border-gray-500 px-4 py-2">ア (a)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">い (i)</td>
            <td className="border border-gray-500 px-4 py-2">イ (i)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">う (u)</td>
            <td className="border border-gray-500 px-4 py-2">ウ (u)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">え (e)</td>
            <td className="border border-gray-500 px-4 py-2">エ (e)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">お (o)</td>
            <td className="border border-gray-500 px-4 py-2">オ (o)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">か (ka)</td>
            <td className="border border-gray-500 px-4 py-2">カ (ka)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">き (ki)</td>
            <td className="border border-gray-500 px-4 py-2">キ (ki)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">く (ku)</td>
            <td className="border border-gray-500 px-4 py-2">ク (ku)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">け (ke)</td>
            <td className="border border-gray-500 px-4 py-2">ケ (ke)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">こ (ko)</td>
            <td className="border border-gray-500 px-4 py-2">コ (ko)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">さ (sa)</td>
            <td className="border border-gray-500 px-4 py-2">サ (sa)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">し (shi)</td>
            <td className="border border-gray-500 px-4 py-2">シ (shi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">す (su)</td>
            <td className="border border-gray-500 px-4 py-2">ス (su)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">せ (se)</td>
            <td className="border border-gray-500 px-4 py-2">セ (se)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">そ (so)</td>
            <td className="border border-gray-500 px-4 py-2">ソ (so)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">た (ta)</td>
            <td className="border border-gray-500 px-4 py-2">タ (ta)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ち (chi)</td>
            <td className="border border-gray-500 px-4 py-2">チ (chi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">つ (tsu)</td>
            <td className="border border-gray-500 px-4 py-2">ツ (tsu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">て (te)</td>
            <td className="border border-gray-500 px-4 py-2">テ (te)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">と (to)</td>
            <td className="border border-gray-500 px-4 py-2">ト (to)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">な (na)</td>
            <td className="border border-gray-500 px-4 py-2">ナ (na)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">に (ni)</td>
            <td className="border border-gray-500 px-4 py-2">ニ (ni)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぬ (nu)</td>
            <td className="border border-gray-500 px-4 py-2">ヌ (nu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ね (ne)</td>
            <td className="border border-gray-500 px-4 py-2">ネ (ne)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">の (no)</td>
            <td className="border border-gray-500 px-4 py-2">ノ (no)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">は (ha)</td>
            <td className="border border-gray-500 px-4 py-2">ハ (ha)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ひ (hi)</td>
            <td className="border border-gray-500 px-4 py-2">ヒ (hi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ふ (fu)</td>
            <td className="border border-gray-500 px-4 py-2">フ (fu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">へ (he)</td>
            <td className="border border-gray-500 px-4 py-2">ヘ (he)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ほ (ho)</td>
            <td className="border border-gray-500 px-4 py-2">ホ (ho)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ま (ma)</td>
            <td className="border border-gray-500 px-4 py-2">マ (ma)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">み (mi)</td>
            <td className="border border-gray-500 px-4 py-2">ミ (mi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">む (mu)</td>
            <td className="border border-gray-500 px-4 py-2">ム (mu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">め (me)</td>
            <td className="border border-gray-500 px-4 py-2">メ (me)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">も (mo)</td>
            <td className="border border-gray-500 px-4 py-2">モ (mo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">や (ya)</td>
            <td className="border border-gray-500 px-4 py-2">ヤ (ya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ゆ (yu)</td>
            <td className="border border-gray-500 px-4 py-2">ユ (yu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">よ (yo)</td>
            <td className="border border-gray-500 px-4 py-2">ヨ (yo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ら (ra)</td>
            <td className="border border-gray-500 px-4 py-2">ラ (ra)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">り (ri)</td>
            <td className="border border-gray-500 px-4 py-2">リ (ri)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">る (ru)</td>
            <td className="border border-gray-500 px-4 py-2">ル (ru)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">れ (re)</td>
            <td className="border border-gray-500 px-4 py-2">レ (re)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ろ (ro)</td>
            <td className="border border-gray-500 px-4 py-2">ロ (ro)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">わ (wa)</td>
            <td className="border border-gray-500 px-4 py-2">ワ (wa)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">を (wo)</td>
            <td className="border border-gray-500 px-4 py-2">ヲ (wo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ん (n)</td>
            <td className="border border-gray-500 px-4 py-2">ン (n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const dakutenTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">K → G</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">S → Z</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">T → D</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">H → B</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">H → P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">カ (ka) → ガ (ga)</td>
            <td className="border border-gray-500 px-4 py-2">サ (sa) → ザ (za)</td>
            <td className="border border-gray-500 px-4 py-2">タ (ta) → ダ (da)</td>
            <td className="border border-gray-500 px-4 py-2">ハ (ha) → バ (ba)</td>
            <td className="border border-gray-500 px-4 py-2">ハ (ha) → パ (pa)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">キ (ki) → ギ (gi)</td>
            <td className="border border-gray-500 px-4 py-2">シ (shi) → ジ (ji)</td>
            <td className="border border-gray-500 px-4 py-2">チ (chi) → <b>ヂ (di)¹</b></td>
            <td className="border border-gray-500 px-4 py-2">ヒ (hi) → ビ (bi)</td>
            <td className="border border-gray-500 px-4 py-2">ヒ (hi) → ピ (pi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ク (ku) → グ (gu)</td>
            <td className="border border-gray-500 px-4 py-2">ス (su) → ズ (zu)</td>
            <td className="border border-gray-500 px-4 py-2">ツ (tsu) → <b>ヅ (du)²</b></td>
            <td className="border border-gray-500 px-4 py-2">フ (fu) → ブ (bu)</td>
            <td className="border border-gray-500 px-4 py-2">フ (fu) → プ (pu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ケ (ke) → ゲ (ge)</td>
            <td className="border border-gray-500 px-4 py-2">セ (se) → ゼ (ze)</td>
            <td className="border border-gray-500 px-4 py-2">テ (te) → デ (de)</td>
            <td className="border border-gray-500 px-4 py-2">ヘ (he) → ベ (be)</td>
            <td className="border border-gray-500 px-4 py-2">ヘ (he) → ペ (pe)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">コ (ko) → ゴ (go)</td>
            <td className="border border-gray-500 px-4 py-2">ソ (so) → ゾ (zo)</td>
            <td className="border border-gray-500 px-4 py-2">ト (to) → ド (do)</td>
            <td className="border border-gray-500 px-4 py-2">ホ (ho) → ボ (bo)</td>
            <td className="border border-gray-500 px-4 py-2">ホ (ho) → ポ (po)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const dakutenHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Katakana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">が (ga)</td>
            <td className="border border-gray-500 px-4 py-2">ガ (ga)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぎ (gi)</td>
            <td className="border border-gray-500 px-4 py-2">ギ (gi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぐ (gu)</td>
            <td className="border border-gray-500 px-4 py-2">グ (gu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">げ (ge)</td>
            <td className="border border-gray-500 px-4 py-2">ゲ (ge)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ご (go)</td>
            <td className="border border-gray-500 px-4 py-2">ゴ (go)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ざ (za)</td>
            <td className="border border-gray-500 px-4 py-2">ザ (za)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">じ (ji)</td>
            <td className="border border-gray-500 px-4 py-2">ジ (ji)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ず (zu)</td>
            <td className="border border-gray-500 px-4 py-2">ズ (zu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぜ (ze)</td>
            <td className="border border-gray-500 px-4 py-2">ゼ (ze)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぞ (zo)</td>
            <td className="border border-gray-500 px-4 py-2">ゾ (zo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">だ (da)</td>
            <td className="border border-gray-500 px-4 py-2">ダ (da)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぢ (di) <small>(pronounced ji)</small></td>
            <td className="border border-gray-500 px-4 py-2">ヂ (di)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">づ (du) <small>(pronounced zu)</small></td>
            <td className="border border-gray-500 px-4 py-2">ヅ (du)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">で (de)</td>
            <td className="border border-gray-500 px-4 py-2">デ (de)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ど (do)</td>
            <td className="border border-gray-500 px-4 py-2">ド (do)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ば (ba)</td>
            <td className="border border-gray-500 px-4 py-2">バ (ba)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">び (bi)</td>
            <td className="border border-gray-500 px-4 py-2">ビ (bi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぶ (bu)</td>
            <td className="border border-gray-500 px-4 py-2">ブ (bu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">べ (be)</td>
            <td className="border border-gray-500 px-4 py-2">ベ (be)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぼ (bo)</td>
            <td className="border border-gray-500 px-4 py-2">ボ (bo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぱ (pa)</td>
            <td className="border border-gray-500 px-4 py-2">パ (pa)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぴ (pi)</td>
            <td className="border border-gray-500 px-4 py-2">ピ (pi)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぷ (pu)</td>
            <td className="border border-gray-500 px-4 py-2">プ (pu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぺ (pe)</td>
            <td className="border border-gray-500 px-4 py-2">ペ (pe)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぽ (po)</td>
            <td className="border border-gray-500 px-4 py-2">ポ (po)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const yoonHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Katakana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 px-4 py-2">きゃ (kya)</td>
            <td className="border border-gray-500 px-4 py-2">キャ (kya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">きゅ (kyu)</td>
            <td className="border border-gray-500 px-4 py-2">キュ (kyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">きょ (kyo)</td>
            <td className="border border-gray-500 px-4 py-2">キョ (kyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">しゃ (sha)</td>
            <td className="border border-gray-500 px-4 py-2">シャ (sha)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">しゅ (shu)</td>
            <td className="border border-gray-500 px-4 py-2">シュ (shu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">しょ (sho)</td>
            <td className="border border-gray-500 px-4 py-2">ショ (sho)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ちゃ (cha)</td>
            <td className="border border-gray-500 px-4 py-2">チャ (cha)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ちゅ (chu)</td>
            <td className="border border-gray-500 px-4 py-2">チュ (chu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ちょ (cho)</td>
            <td className="border border-gray-500 px-4 py-2">チョ (cho)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">にゃ (nya)</td>
            <td className="border border-gray-500 px-4 py-2">ニャ (nya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">にゅ (nyu)</td>
            <td className="border border-gray-500 px-4 py-2">ニュ (nyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">にょ (nyo)</td>
            <td className="border border-gray-500 px-4 py-2">ニョ (nyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ひゃ (hya)</td>
            <td className="border border-gray-500 px-4 py-2">ヒャ (hya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ひゅ (hyu)</td>
            <td className="border border-gray-500 px-4 py-2">ヒュ (hyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ひょ (hyo)</td>
            <td className="border border-gray-500 px-4 py-2">ヒョ (hyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">みゃ (mya)</td>
            <td className="border border-gray-500 px-4 py-2">ミャ (mya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">みゅ (myu)</td>
            <td className="border border-gray-500 px-4 py-2">ミュ (myu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">みょ (myo)</td>
            <td className="border border-gray-500 px-4 py-2">ミョ (myo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">りゃ (rya)</td>
            <td className="border border-gray-500 px-4 py-2">リャ (rya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">りゅ (ryu)</td>
            <td className="border border-gray-500 px-4 py-2">リュ (ryu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">りょ (ryo)</td>
            <td className="border border-gray-500 px-4 py-2">リョ (ryo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぎゃ (gya)</td>
            <td className="border border-gray-500 px-4 py-2">ギャ (gya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぎゅ (gyu)</td>
            <td className="border border-gray-500 px-4 py-2">ギュ (gyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぎょ (gyo)</td>
            <td className="border border-gray-500 px-4 py-2">ギョ (gyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">じゃ (jya)</td>
            <td className="border border-gray-500 px-4 py-2">ジャ (jya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">じゅ (jyu)</td>
            <td className="border border-gray-500 px-4 py-2">ジュ (jyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">じょ (jyo)</td>
            <td className="border border-gray-500 px-4 py-2">ジョ (jyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぢゃ (dya)</td>
            <td className="border border-gray-500 px-4 py-2">ヂャ (dya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぢゅ (dyu)</td>
            <td className="border border-gray-500 px-4 py-2">ヂュ (dyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぢょ (dyo)</td>
            <td className="border border-gray-500 px-4 py-2">ヂョ (dyo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">びゃ (bya)</td>
            <td className="border border-gray-500 px-4 py-2">ビャ (bya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">びゅ (byu)</td>
            <td className="border border-gray-500 px-4 py-2">ビュ (byu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">びょ (byo)</td>
            <td className="border border-gray-500 px-4 py-2">ビョ (byo)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぴゃ (pya)</td>
            <td className="border border-gray-500 px-4 py-2">ピャ (pya)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぴゅ (pyu)</td>
            <td className="border border-gray-500 px-4 py-2">ピュ (pyu)</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">ぴょ (pyo)</td>
            <td className="border border-gray-500 px-4 py-2">ピョ (pyo)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  ;

  const LessonContent = () => {
    switch (currentLesson) {
    case 1:
      return (
        <>
          <div>
          Katakana is mainly used to write Japanese loan words. For example 
          in Japanese the word for 'camera' is <b>カメラ (kamera)</b>. 
          Learning all 5 concepts below is essential to learning Japanese.
          </div>
          <div className='py-2'>
            Katakana has 46 basic sounds. See this diagram for pattern:
            <div className='py-4'>
              {basicKatakanaTable}

            </div>
         
            <div className='py-4'>
            Moreover each basic katakana has a matching basic hiragana that produces the 
            same sound. See this diagram: 
              <div className='py-2'>
                {basicHiraganaToKatakanaTable}

              </div>
            </div>
            <div className='flex py-6'>
              <div className='py-4'>
              Now try this exercise:
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center ml-4">
    
                <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105"

                  onClick={handleProtectedClick(katakanaBasicWritingSystem)}
                  href={
                    createURL(
                      LanguageNames.Japanese,
                      LearningSections.WritingSystem,
                      katakanaBasicWritingSystem)
                  }>
        Basic Katakana Exercise
                </a>
              </div>
            </div>
          </div>  
        </>
      );
    case 2:
      return (
        <>
          <div>
            Dakuten and handakuten are marks added on top of katakana (and hiragana) that alter pronunciation. 
            The dakuten mark is <b>( ゛)</b>. There are 20 dakuten variations. 
            For example: <b>カ (ka) → ガ (ga)</b>. <br></br> 
            The handakuten mark is <b>( ゜)</b>. There are 5 variations. 
            For example: <b>ハ (ha) → パ (pa)</b>.
            
                 See this useful diagram
                for the general pattern:
            <div className='py-4'>
              {dakutenTable}
            </div>
            <div className='pb-4'>
              <div>
                    (1) ヂ is written in romaji as <b>di</b> but is pronounced <b>ji</b>.
              </div>
              <div>
                    (2) ヅ is written in romaji as <b>du</b> but is pronounced <b>zu</b>.
              </div>
            </div>
             
            <div className='pt-6 pb-4'>
              Also each dakuten/handakuten katakana has a matching dakuten/hankuten
              hiragana that produces the same sound. See diagram:        
            </div>
                
            {dakutenHiraganaToKatakanaTable}
          </div>
          <div className='flex py-6'>
            <div className='py-4'>
              Now try this exercise:
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center ml-4">
              <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105"
                onClick={handleProtectedClick(katakanaDakutenWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaDakutenWritingSystem)
                }>
              Katakana Dakuten/Handakuten Exercise
                {katakanaDakutenWritingSystem?.isLocked &&
                    lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div>
            Some katakana combine to form Yōon sounds. In these combinations,
            the first character remains full-sized, while the second is smaller. 
            There are 36 of these combinations.
            Examples like <b>キャ (kya) </b>and <b>ミュ (myu)</b> represent single, blended 
            syllables rather than separate sounds. This blending is crucial in words like <br/>
            <b>キャリア (kyaria, career)</b> and <b>ミュージック (myūjikku, music)</b>. 
            
                     Each yōon katakana has a matching yōon hiragana that produces the 
                    same sound. See diagram:
            <div className='py-4'>
              {yoonHiraganaToKatakanaTable}

            </div>
            <div className='flex py-6'>
              <div className='py-4'>
              Now try this exercise:
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center ml-4">
                <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105"
                  onClick={handleProtectedClick(katakanaYoonWritingSystem)}
                  href={
                    createURL(
                      LanguageNames.Japanese,
                      LearningSections.WritingSystem,
                      katakanaYoonWritingSystem)
                  }>
              Yoōn Katakana Exercise
                  {katakanaYoonWritingSystem?.isLocked &&
                    lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
                </a>
              </div>
            </div>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div>
              Some sounds from non Japanese languages cannot be captured by the 
              36 native katakana yōon sounds. For example <b>ヴァ (bwa/va) </b>and <b>フィ (fi) </b>
              are foreign sounds in the Japanese loan words <b>ヴァイオリン (vaiorin, violin)</b> and <b>フィルム (firumu, film)</b> respectively.
              There are 22 Foreign Yōon combinations in total.
          </div>
          <div className='flex py-6'>
            <div className='py-4'>
            Now try this exercise:
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center ml-4">
              <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl text-lg md:text-xl transform transition-transform duration-200 hover:scale-105"
                onClick={handleProtectedClick(katakanaSpecialYoonWritingSystem)}
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaSpecialYoonWritingSystem)
                }>
             Foreign Yoōn Katakana Exercise
                {katakanaSpecialYoonWritingSystem?.isLocked &&
                  lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon/> : ''}
              </a>
            </div>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div>
            <b>Long vowels</b> are handled differently in katakana compared to hiragana.
               Instead of adding extra vowels to extend the sound, katakana uses a simple dash-like
               symbol: <b>ー</b> <br/> This symbol tells you to lengthen the vowel sound of the 
               character it follows. For example:
            <div className='py-2'>            
              <b>サカ (saka) </b> becomes <b>サーカー (sākā, soccer) </b> 
            </div>
            <div></div>
            <div className='py-2'>       
              <b>ノト (noto)</b> becomes  <b>ノート (nōto, notebook)</b>
            </div>
            <div></div>

              The sound is smooth and continuous, not repeated, 
              making it an important part of writing foreign words or names in katakana!
          </div>
        </>
      );
    default:
      return null;
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 md:text-lg">
      {/*@ts-ignore*/}
      <h4 className="text-center text-2xl pt-12">Lesson {currentLesson} - {lessonTitles[currentLesson]}</h4>
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
        <button
          className={`px-4 py-2 border rounded-md ${currentLesson === 4 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentLesson(4)}
        >
        4
        </button>
        <button
          className={`px-4 py-2 border rounded-md ${currentLesson === 5 ? 'bg-gray-300' : 'bg-gray-100'}`}
          onClick={() => setCurrentLesson(5)}
        >
        5
        </button>
      </div>
      <LessonContent />
    </div>
  );
};

export default KatakanaExplained;

