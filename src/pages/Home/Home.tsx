import './Home.css'
import blackBar from '../../assets/blackBar.png';
import logoSvg from '../../assets/logoSvg.svg';

export function Home(){
  return <div> {/*  outer div needed here for layout; don't use fragment */}
    <div className = "imageContent" >
      <img src ={logoSvg} width={163} height={163} alt="logo"/>
    </div>
    <div className = "content2">
      <h1>LINGO</h1>
      <div className = "imageContent">
        <img src ={blackBar} width={130} height={1} alt="logo"/>
      </div>
      <h4>COMMAND</h4>
      <div> 
        Learn foreign languages faster
      </div>
    </div>    
  </div> 
}