import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { languages as languagesVocab } from '../../data/structured-data/words';

import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';

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
    .find((t: any)=> t.slugName === 'kat')
  const katakanaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'katdak')
  const katakanaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'katyoon')

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
                  Each basic katakana has a matching basic hiragana that produces the same sound. See diagram.
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
                  See this useful diagram for the general pattern.
                </i>
              </li>
              <li>
                <i style={{ fontSize:'15px' }}>
              Also each dakuten/han-dakuten katakana has a matching dakuten/han-dakuten hiragana that produces the same sound. See diagram.
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
                    Each native yōon katakana has a matching yōon hiragana that produces the same sound. See diagram.
                  </i>
                </li>
              </ul>
            </div>
            <div style={{ paddingTop: '30px' }}>
              <b style={{ fontSize:'20px' }}>Foreign Yōon sounds</b>  leads to an additional: <a onClick={handleProtectedClick(katakanaYoonWritingSystem)} 
                href={
                  createURL(
                    LanguageNames.Japanese,
                    LearningSections.WritingSystem,
                    katakanaYoonWritingSystem)
                }>
                22 katakana combinations
                {katakanaYoonWritingSystem?.isLocked &&
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
