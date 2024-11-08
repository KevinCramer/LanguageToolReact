import NavbarDark from '../../components/atoms/NavbarDark/NavbarDark'
import './Spanish.scss'

const SpanishStudyGuide = () => { 
 
  return (
    <>
      <div style={{ height:'12px' }}>
      </div>
      <div style={{ backgroundColor:'white', borderRadius: '5px', marginLeft:'12px', marginRight:'12px' }}>
        <NavbarDark />
        <div className="page-container">
          <div className="central-container">
            <h4 style={{ paddingBottom: '30px' }}>Spanish Study Guide</h4>
            <div>
              <b>Phase 1:</b> Study the vocabulary for these topics: <a href="/spanish/vocabulary?s=clo-T0TFT">clothes</a>, <a href="/spanish/vocabulary?s=num-T0TFT">numbers</a>, <a href="/spanish/vocabulary?s=col-T0TFT">colours</a>, <a href="/spanish/vocabulary?s=foo-T0TFT">food</a>, <a href="/spanish/vocabulary?s=hom-T0TFT">home</a>, <a href="/spanish/vocabulary?s=bod-T0TFT">body</a>, <a href="/spanish/vocabulary?s=loc-T0TFT">locations</a>. < br />We recommend you spend no more than 15 minutes studying a topic’s vocabulary before taking a quiz. Then if the grade is below 90% which is completely normal go back and do another round of 15 minutes of studying. Make sure to take breaks, and you can also switch between studying a few topics to mix things up. 
          (If you get 90% or higher  for each quiz without studying the topic in the last 24 hours you are ready to move to phase 2). 
            </div>
            <div style={{ paddingTop:'20px' }}>
              <b>Phase 2:</b> Study the vocabulary for these topics until you get 90% accuracy taking the quiz: <a href="/spanish/vocabulary?s=pro-T0TFT">pronouns</a>, <a href="/spanish/vocabulary?s=que-T0TFT">question words</a>, <a href="/spanish/vocabulary?s=con-T0TFT">conjunctions</a>. < br /> Use same approach as phase 1. 
            </div>
            <div style={{ paddingTop:'20px' }}>
              <b>Phase 3:</b> Study the grammar lessons 1 through 5.   
            </div> 
            <div style={{ paddingTop:'20px' }}>
              <b>Phase 4:</b> Spend 1/3rd of time learning verbs, 1/3 of time learning new vocab, 1/3 of time doing immersion. 
            </div> 
            <div style={{ paddingTop:'20px' }}>
              <b>Phase 5:</b> As proficiency improves continue to further prioritise immersion, until at one point you spend maybe 80% of your time on immersion. 
            </div>
            <i style={{ fontSize:'16px', paddingTop: '100px', paddingBottom: '30px' }}>
        There are about 500 million native Spanish speakers, mainly in Spain and the Americas. Learning Spanish opens doors to new connections, cultures, and job opportunities.
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default SpanishStudyGuide;
