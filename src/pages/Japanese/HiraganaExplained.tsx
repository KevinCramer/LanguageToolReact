import { LanguageNames, LearningSections } from '../../../types/LearningSectionsTypes';
import { createURL } from '../../helpers/createURL';
import { languages as languagesVocab } from '../../data/structured-data/words';

import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';

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
    .find((t: any)=> t.slugName === 'hir')
  const hiraganaDakutenWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'hirdak')
  const hiraganaYoonWritingSystem = japaneseWritingSystems?.topics
    .find((t: any)=> t.slugName === 'hiryoon')

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Hiragana Explained</h4>
          <div>
          Learning hiragana is the first step to learning japanese. By learning all 3 concepts below you will learn the basics of Japanese pronunciation. 
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Basic Hiragana</b>  has <a onClick={handleProtectedClick(hiraganaBasicWritingSystem)}
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaBasicWritingSystem)
              }>
                      46 sounds</a>.
          </div>
          <div style={{ paddingTop:'20px' }}>
            <b>Dakuten and Han-Dakuten</b> create another <a onClick={handleProtectedClick(hiraganaDakutenWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaDakutenWritingSystem)
              }>25 hiragana variations
              {hiraganaDakutenWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px' }}></LockIcon> : ''}
            </a>. <br></br>
            Dakuten and han-dakuten are marks added on top of hiragana that alter pronunciation. 
            <div style={{ height: '0px' }}>

            </div>
            The dakuten mark is <b>( ゛)</b>. It adds a <i>voiced</i> sound. There are 20 dakuten variations. <br></br>
            For example: <b>か (ka) → が (ga)</b>. <br></br> 
            <div style={{ height: '0px' }}>

            </div>
            The han-dakuten mark is <b>( ゜)</b>. It creates a  "p" sound. There are 5 variations. <br></br> For example: <b>は (ha) → ぱ (pa)</b>.
            <div style={{ height: '20px' }}>

            </div>      
          </div>
          <div style={{ paddingTop:'0px' }}>
            <b>Yōon</b>  creates an additional <a onClick={handleProtectedClick(hiraganaYoonWritingSystem)} 
              href={
                createURL(
                  LanguageNames.Japanese,
                  LearningSections.WritingSystem,
                  hiraganaYoonWritingSystem)
              }>
                36 hiragana combinations
              {hiraganaYoonWritingSystem?.isLocked &&
                   lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px' }}></LockIcon> : ''}
            </a>
                . <div></div>
            Some hiragana combine to form Yōon sounds. In these combinations,
              the first character remains full-sized, while the second is smaller.
              Examples like <b>きゃ(kya) </b>and <b>しょ(sho)</b> represent single, blended 
              syllables rather than separate sounds. This blending is crucial in words 
              like <br></br><b>きょう(kyou, today)</b> and <b>しょうがっこう(shougakkou, elementary school)</b>. 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default HiraganaExplained;
