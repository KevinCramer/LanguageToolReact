import { useState } from "react"
import {dutch as language} from "../../data/words"
export function Dutch(){
    var x =1;
    var [x,setX] = useState(x)
    const handleClick = () => { return setX(x*(-1))}
        return (
        <div>    
            <h1>Dutch</h1>
                <button onClick={handleClick} >Toggle Languages</button>
                <div>
                    {language.map(word => (<div key={word.englishWord} > {x===1? word.englishWord + " = " + word.foreignWord : word.foreignWord + " = " + word.englishWord} </div>))}
                </div>
        </div>
    )
}

