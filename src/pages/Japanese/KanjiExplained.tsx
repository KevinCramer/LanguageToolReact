import { useProtectedLink } from '../../helpers/use-protected-link';
import './Japanese.scss'

const KanjiExplained = () => { 
  const handleProtectedClick = useProtectedLink();

  return (
    <>
      <div className="page-container">
        <div className="central-container">
          <h4 style={{ paddingBottom: '30px' }}>Kanji Explained</h4>
          <div >
            <a onClick={handleProtectedClick} href="/japanese/writing-systems?s=kanji_grade1-T0TFT">First grade kanji</a> 
          </div>
        </div>
      </div>
    </>
  );
}
 
export default KanjiExplained;
