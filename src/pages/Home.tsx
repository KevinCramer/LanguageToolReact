import './text.css'
import blackBar from '../assets/blackBar.png';
import logo from '../assets/logo.png';

export function Home(){
  return <div>
    <div className = "imageContent">
      <img src ={logo} width={160} height={130} alt="logo"/>
    </div>
    <div className = "content2">
      <h1 style ={{ marginBottom: '0.1rem' }}> 
                        LINGO
      </h1>
      <div className = "imageContent">
        <img src ={blackBar} width={130} height={1} alt="logo"/>
      </div>
      <h4> 
                        COMMAND
      </h4>
      <>
        <hr/>
      </>
      <div> 
        Built to help you learn foreign languages faster.
      </div>
    </div>    
  </div> 
}