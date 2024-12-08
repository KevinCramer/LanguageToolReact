import './Japanese.scss'
import { languages as allLanguages } from '../../data/structured-data/words';
import { useProtectedLink } from '../../helpers/use-protected-link';

const KanjiExplained = () => { 
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
              {firstGradeKanjiWritingSystem?.name.toLocaleLowerCase()}{firstGradeKanjiWritingSystem?.isLocked ? '*' : ''}
            </a> 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default KanjiExplained;
