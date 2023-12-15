import './text.css'
import logo from '../assets/logo.png';

export function Home(){
  return <div>
    <div className = "imageContent">
      <img src ={logo} width={160} height={130} alt="logo"/>
    </div>
    <div className = "content2">
      <h1> 
                        LINGO
      </h1>
      <h5> 
                        COMMAND
      </h5>
    </div>    
  </div> 
}