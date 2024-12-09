import './Japanese.scss'
import { languages as allLanguages } from '../../data/structured-data/words';
import { useProtectedLink } from '../../helpers/use-protected-link';
import { useAuth } from '../../contexts/AuthContext';
import { lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
const KanjiExplained = () => { 
  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email
  const handleProtectedClick = useProtectedLink();

  const japaneseWritingSystems = (allLanguages as any[]).find((l: any) => {
    return l.languageName === 'Japanese' && 
           l.topics.some((topic: any) => topic.isAlphabet);
  });

  const firstGradeKanjiWritingSystem = japaneseWritingSystems?.topics.find((t: any) => t.slugName === 'kanji_grade1')

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Kanji Explained</h4>
          <div >

            < a onClick={handleProtectedClick(firstGradeKanjiWritingSystem )} 
              href="/japanese/writing-systems?s=kanji_grade1-T0TFT">
              {firstGradeKanjiWritingSystem?.name.toLocaleLowerCase()}
              {lingoCommandIsLocked && !userIsLoggedIn ? <LockIcon style={{ fontSize: '16px', marginLeft:'5px' }}/> : ''}
            </a> 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default KanjiExplained;
