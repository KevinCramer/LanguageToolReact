import './text.css'
import logo from './logo.png';

export function Home(){
  return <div>
    <div className = "imageContent">
      <img src ={logo} width={180} height={150}/>
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