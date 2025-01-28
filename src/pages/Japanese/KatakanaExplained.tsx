import { japaneseWritingSystemsTopicSlugNames, writingSystems } 
  from '../../data/structured-data/writingSystems';
import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { useEffect, useState } from 'react';
import { createURL } from '../../helpers/createURL';
import { lingoCommandIsLocked } from '../../constants';
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
  
  const playAudio = (audioFile:any) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

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

  const basicKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500">
        <TableHeader headers={['A', 'I', 'U', 'E', 'O']} />
        <tbody>
          <tr>
            <TableCell character="ア (a)" audio={hiraganaAudioA} />
            <TableCell character="イ (i)" audio={hiraganaAudioI} />
            <TableCell character="ウ (u)" audio={hiraganaAudioU} />
            <TableCell character="エ (e)" audio={hiraganaAudioE} />
            <TableCell character="オ (o)" audio={hiraganaAudioO} />
          </tr>
          <tr>
            <TableCell character="カ (ka)" audio={hiraganaAudioKa} />
            <TableCell character="キ (ki)" audio={hiraganaAudioKi} />
            <TableCell character="ク (ku)" audio={hiraganaAudioKu} />
            <TableCell character="ケ (ke)" audio={hiraganaAudioKe} />
            <TableCell character="コ (ko)" audio={hiraganaAudioKo} />
          </tr>
          <tr>
            <TableCell character="サ (sa)" audio={hiraganaAudioSa} />
            <TableCell character="シ (shi)" audio={hiraganaAudioShi} />
            <TableCell character="ス (su)" audio={hiraganaAudioSu} />
            <TableCell character="セ (se)" audio={hiraganaAudioSe} />
            <TableCell character="ソ (so)" audio={hiraganaAudioSo} />
          </tr>
          <tr>
            <TableCell character="タ (ta)" audio={hiraganaAudioTa} />
            <TableCell character="チ (chi)" audio={hiraganaAudioChi} />
            <TableCell character="ツ (tsu)" audio={hiraganaAudioTsu} />
            <TableCell character="テ (te)" audio={hiraganaAudioTe} />
            <TableCell character="ト (to)" audio={hiraganaAudioTo} />
          </tr>
          <tr>
            <TableCell character="ナ (na)" audio={hiraganaAudioNa} />
            <TableCell character="ニ (ni)" audio={hiraganaAudioNi} />
            <TableCell character="ヌ (nu)" audio={hiraganaAudioNu} />
            <TableCell character="ネ (ne)" audio={hiraganaAudioNe} />
            <TableCell character="ノ (no)" audio={hiraganaAudioNo} />
          </tr>
          <tr>
            <TableCell character="ハ (ha)" audio={hiraganaAudioHa} />
            <TableCell character="ヒ (hi)" audio={hiraganaAudioHi} />
            <TableCell character="フ (fu)" audio={hiraganaAudioFu} />
            <TableCell character="ヘ (he)" audio={hiraganaAudioHe} />
            <TableCell character="ホ (ho)" audio={hiraganaAudioHo} />
          </tr>
          <tr>
            <TableCell character="マ (ma)" audio={hiraganaAudioMa} />
            <TableCell character="ミ (mi)" audio={hiraganaAudioMi} />
            <TableCell character="ム (mu)" audio={hiraganaAudioMu} />
            <TableCell character="メ (me)" audio={hiraganaAudioMe} />
            <TableCell character="モ (mo)" audio={hiraganaAudioMo} />
          </tr>
          <tr>
            <TableCell character="ヤ (ya)" audio={hiraganaAudioYa} />
            <TableCell />
            <TableCell character="ユ (yu)" audio={hiraganaAudioYu} />
            <TableCell />
            <TableCell character="ヨ (yo)" audio={hiraganaAudioYo} />
          </tr>
          <tr>
            <TableCell character="ラ (ra)" audio={hiraganaAudioRa} />
            <TableCell character="リ (ri)" audio={hiraganaAudioRi} />
            <TableCell character="ル (ru)" audio={hiraganaAudioRu} />
            <TableCell character="レ (re)" audio={hiraganaAudioRe} />
            <TableCell character="ロ (ro)" audio={hiraganaAudioRo} />
          </tr>
          <tr>
            <TableCell character="ワ (wa)" audio={hiraganaAudioWa} />
            <TableCell />
            <TableCell character="ヲ (wo)" audio={hiraganaAudioWo} />
            <TableCell />
            <TableCell character="ン (n)" audio={hiraganaAudioN} />
          </tr>
        </tbody>
      </table>
    </div>
  );

  const hiraganaKatakanaPairs = [
    ['あ (a)', 'ア (a)'],
    ['い (i)', 'イ (i)'],
    ['う (u)', 'ウ (u)'],
    ['え (e)', 'エ (e)'],
    ['お (o)', 'オ (o)'],
    ['か (ka)', 'カ (ka)'],
    ['き (ki)', 'キ (ki)'],
    ['く (ku)', 'ク (ku)'],
    ['け (ke)', 'ケ (ke)'],
    ['こ (ko)', 'コ (ko)'],
    ['さ (sa)', 'サ (sa)'],
    ['し (shi)', 'シ (shi)'],
    ['す (su)', 'ス (su)'],
    ['せ (se)', 'セ (se)'],
    ['そ (so)', 'ソ (so)'],
    ['た (ta)', 'タ (ta)'],
    ['ち (chi)', 'チ (chi)'],
    ['つ (tsu)', 'ツ (tsu)'],
    ['て (te)', 'テ (te)'],
    ['と (to)', 'ト (to)'],
    ['な (na)', 'ナ (na)'],
    ['に (ni)', 'ニ (ni)'],
    ['ぬ (nu)', 'ヌ (nu)'],
    ['ね (ne)', 'ネ (ne)'],
    ['の (no)', 'ノ (no)'],
    ['は (ha)', 'ハ (ha)'],
    ['ひ (hi)', 'ヒ (hi)'],
    ['ふ (fu)', 'フ (fu)'],
    ['へ (he)', 'ヘ (he)'],
    ['ほ (ho)', 'ホ (ho)'],
    ['ま (ma)', 'マ (ma)'],
    ['み (mi)', 'ミ (mi)'],
    ['む (mu)', 'ム (mu)'],
    ['め (me)', 'メ (me)'],
    ['も (mo)', 'モ (mo)'],
    ['や (ya)', 'ヤ (ya)'],
    ['ゆ (yu)', 'ユ (yu)'],
    ['よ (yo)', 'ヨ (yo)'],
    ['ら (ra)', 'ラ (ra)'],
    ['り (ri)', 'リ (ri)'],
    ['る (ru)', 'ル (ru)'],
    ['れ (re)', 'レ (re)'],
    ['ろ (ro)', 'ロ (ro)'],
    ['わ (wa)', 'ワ (wa)'],
    ['を (wo)', 'ヲ (wo)'],
    ['ん (n)', 'ン (n)'],
  ];
  
  const basicHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500 text-base md:text-lg">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200">Katakana</th>
          </tr>
        </thead>
        <tbody>
          {hiraganaKatakanaPairs.map(([hiragana, katakana], index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2">{hiragana}</td>
              <td className="border border-gray-500 px-4 py-2">{katakana}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const dakutenData = [
    {
      kToG: 'カ (ka) → ガ (ga)',
      sToZ: 'サ (sa) → ザ (za)',
      tToD: 'タ (ta) → ダ (da)',
      hToB: 'ハ (ha) → バ (ba)',
      hToP: 'ハ (ha) → パ (pa)'
    },
    {
      kToG: 'キ (ki) → ギ (gi)',
      sToZ: 'シ (shi) → ジ (ji)',
      tToD: 'チ (chi) → ヂ (di)¹',
      hToB: 'ヒ (hi) → ビ (bi)',
      hToP: 'ヒ (hi) → ピ (pi)'
    },
    {
      kToG: 'ク (ku) → グ (gu)',
      sToZ: 'ス (su) → ズ (zu)',
      tToD: 'ツ (tsu) → ヅ (du)²',
      hToB: 'フ (fu) → ブ (bu)',
      hToP: 'フ (fu) → プ (pu)'
    },
    {
      kToG: 'ケ (ke) → ゲ (ge)',
      sToZ: 'セ (se) → ゼ (ze)',
      tToD: 'テ (te) → デ (de)',
      hToB: 'ヘ (he) → ベ (be)',
      hToP: 'ヘ (he) → ペ (pe)'
    },
    {
      kToG: 'コ (ko) → ゴ (go)',
      sToZ: 'ソ (so) → ゾ (zo)',
      tToD: 'ト (to) → ド (do)',
      hToB: 'ホ (ho) → ボ (bo)',
      hToP: 'ホ (ho) → ポ (po)'
    }
      
  ];
 
  const dakutenTableHeaderStyle = 'border border-gray-500 md:px-4 py-2 bg-gray-200';
  const dakutenTableCellStyle = 'border border-gray-500 px-2 py-2 md:py-6 text-center';
  
  // Function to wrap specific parts of the string in bold
  const makeBold = (text:any) => {
    return text.replace(/ ヂ \(di\)¹/g, '<span class="font-bold"> ヂ (di)¹</span>')
      .replace(/ヅ \(du\)²/g, '<span class="font-bold"> ヅ (du)²</span>');
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

  const TableRow = ({ hiragana, katakana, note }: any) => (
    <tr>
      <td className="border border-gray-500 px-4 py-2">
        {hiragana} {note && <small>({note})</small>}
      </td>
      <td className="border border-gray-500 px-4 py-2">{katakana}</td>
    </tr>
  );
  
  const renderRows = (rows: any) =>
    rows.map(({ hiragana, katakana, note }: any, index:any) => (
      <TableRow key={index} hiragana={hiragana} katakana={katakana} note={note} />
    ));
  
  const dakutenHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500 md:text-lg">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200 w-1/2">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200 w-1/2">Katakana</th>
          </tr>
        </thead>
        <tbody>
          {renderRows([
            { hiragana: 'が (ga)', katakana: 'ガ (ga)' },
            { hiragana: 'ぎ (gi)', katakana: 'ギ (gi)' },
            { hiragana: 'ぐ (gu)', katakana: 'グ (gu)' },
            { hiragana: 'げ (ge)', katakana: 'ゲ (ge)' },
            { hiragana: 'ご (go)', katakana: 'ゴ (go)' },
            { hiragana: 'ざ (za)', katakana: 'ザ (za)' },
            { hiragana: 'じ (ji)', katakana: 'ジ (ji)' },
            { hiragana: 'ず (zu)', katakana: 'ズ (zu)' },
            { hiragana: 'ぜ (ze)', katakana: 'ゼ (ze)' },
            { hiragana: 'ぞ (zo)', katakana: 'ゾ (zo)' },
            { hiragana: 'だ (da)', katakana: 'ダ (da)' },
            { hiragana: 'ぢ (di)', katakana: 'ヂ (di)', note: 'pronounced ji' },
            { hiragana: 'づ (du)', katakana: 'ヅ (du)', note: 'pronounced zu' },
            { hiragana: 'で (de)', katakana: 'デ (de)' },
            { hiragana: 'ど (do)', katakana: 'ド (do)' },
            { hiragana: 'ば (ba)', katakana: 'バ (ba)' },
            { hiragana: 'び (bi)', katakana: 'ビ (bi)' },
            { hiragana: 'ぶ (bu)', katakana: 'ブ (bu)' },
            { hiragana: 'べ (be)', katakana: 'ベ (be)' },
            { hiragana: 'ぼ (bo)', katakana: 'ボ (bo)' },
            { hiragana: 'ぱ (pa)', katakana: 'パ (pa)' },
            { hiragana: 'ぴ (pi)', katakana: 'ピ (pi)' },
            { hiragana: 'ぷ (pu)', katakana: 'プ (pu)' },
            { hiragana: 'ぺ (pe)', katakana: 'ペ (pe)' },
            { hiragana: 'ぽ (po)', katakana: 'ポ (po)' },
          ])}
        </tbody>
      </table>
    </div>
  );
  
  const yoonHiraganaToKatakanaTable = (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-500 md:text-lg">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200 w-1/2">Hiragana</th>
            <th className="border border-gray-500 px-4 py-2 bg-gray-200 w-1/2">Katakana</th>
          </tr>
        </thead>
        <tbody>
          {renderRows([
            { hiragana: 'きゃ (kya)', katakana: 'キャ (kya)' },
            { hiragana: 'きゅ (kyu)', katakana: 'キュ (kyu)' },
            { hiragana: 'きょ (kyo)', katakana: 'キョ (kyo)' },
            { hiragana: 'しゃ (sha)', katakana: 'シャ (sha)' },
            { hiragana: 'しゅ (shu)', katakana: 'シュ (shu)' },
            { hiragana: 'しょ (sho)', katakana: 'ショ (sho)' },
            { hiragana: 'ちゃ (cha)', katakana: 'チャ (cha)' },
            { hiragana: 'ちゅ (chu)', katakana: 'チュ (chu)' },
            { hiragana: 'ちょ (cho)', katakana: 'チョ (cho)' },
            { hiragana: 'にゃ (nya)', katakana: 'ニャ (nya)' },
            { hiragana: 'にゅ (nyu)', katakana: 'ニュ (nyu)' },
            { hiragana: 'にょ (nyo)', katakana: 'ニョ (nyo)' },
            { hiragana: 'ひゃ (hya)', katakana: 'ヒャ (hya)' },
            { hiragana: 'ひゅ (hyu)', katakana: 'ヒュ (hyu)' },
            { hiragana: 'ひょ (hyo)', katakana: 'ヒョ (hyo)' },
            { hiragana: 'みゃ (mya)', katakana: 'ミャ (mya)' },
            { hiragana: 'みゅ (myu)', katakana: 'ミュ (myu)' },
            { hiragana: 'みょ (myo)', katakana: 'ミョ (myo)' },
            { hiragana: 'りゃ (rya)', katakana: 'リャ (rya)' },
            { hiragana: 'りゅ (ryu)', katakana: 'リュ (ryu)' },
            { hiragana: 'りょ (ryo)', katakana: 'リョ (ryo)' },
            { hiragana: 'ぎゃ (gya)', katakana: 'ギャ (gya)' },
            { hiragana: 'ぎゅ (gyu)', katakana: 'ギュ (gyu)' },
            { hiragana: 'ぎょ (gyo)', katakana: 'ギョ (gyo)' },
            { hiragana: 'じゃ (jya)', katakana: 'ジャ (jya)' },
            { hiragana: 'じゅ (jyu)', katakana: 'ジュ (jyu)' },
            { hiragana: 'じょ (jyo)', katakana: 'ジョ (jyo)' },
            { hiragana: 'ぢゃ (dya)', katakana: 'ヂャ (dya)' },
            { hiragana: 'ぢゅ (dyu)', katakana: 'ヂュ (dyu)' },
            { hiragana: 'ぢょ (dyo)', katakana: 'ヂョ (dyo)' },
            { hiragana: 'びゃ (bya)', katakana: 'ビャ (bya)' },
            { hiragana: 'びゅ (byu)', katakana: 'ビュ (byu)' },
            { hiragana: 'びょ (byo)', katakana: 'ビョ (byo)' },
            { hiragana: 'ぴゃ (pya)', katakana: 'ピャ (pya)' },
            { hiragana: 'ぴゅ (pyu)', katakana: 'ピュ (pyu)' },
            { hiragana: 'ぴょ (pyo)', katakana: 'ピョ (pyo)' },
          ])}
        </tbody>
      </table>
    </div>
  );

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
            <div className='flex py-6 justify-center'>
              <div className="flex flex-col space-y-2 justify-center items-center ml-4">
    
                <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105"

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
          <div className='flex py-6 justify-center'>
            <div className="flex flex-col space-y-2 justify-center items-center ml-4">
              <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105"
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
            <div className='flex py-6 justify-center'>
              <div className="flex flex-col space-y-2 justify-center items-center ml-4">
                <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105"
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
          <div className='flex py-6 justify-center'>
            <div className="flex flex-col space-y-2 justify-center items-center ml-4">
              <a className=" border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105"
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
    <div className="max-w-screen-md mx-auto px-4 text-lg">
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

