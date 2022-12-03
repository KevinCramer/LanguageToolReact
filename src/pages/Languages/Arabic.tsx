import { useState } from "react"
import {arabic as language} from "../../data/words"

export function Arabic(){
    var x =1;
    var [x,setX] = useState(x)
    const handleClick = () => { return setX(x*(-1))}
    var category = "Food"
    var [category,setCategory] = useState(category)
    const changeCategoryToFood = () => { return setCategory("Food")}
    const changeCategoryToColours = () => { return setCategory("Colours")}
    const changeCategoryToNumbers = () => { return setCategory("Numbers")}


    var category_words = language.filter((word) => {return word.topic === category} )

        return (
        <div>    
            <h1>Arabic</h1>
                <button onClick={handleClick} >Toggle Languages</button>
                <button onClick={changeCategoryToFood} >Food</button>
                <button onClick={changeCategoryToColours} >Colours</button>
                <button onClick={changeCategoryToNumbers} >Numbers</button>
                <p></p>
                <div>
                    {category_words.map(word => (<div key={word.englishWord} > {x===1? word.englishWord + " = " + word.foreignWord : word.foreignWord + " = " + word.englishWord} </div>))}
                </div>
        </div>
        )
    }
    