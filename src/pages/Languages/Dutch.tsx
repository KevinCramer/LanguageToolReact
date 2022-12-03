import { useState } from "react"
import {data} from "../../data/words"
export function Dutch(){
    const all_words = data.filter((word) => {return word.language === "Dutch" })

    const clothes = all_words.filter((word) => {return word.topic === "Clothes" })
    const colours = all_words.filter((word) => {return word.topic === "Colours" })
    const numbers = all_words.filter((word) => {return word.topic === "Numbers" })
    const [Clothes,setClothes] = useState(clothes)
    const [Colours,setColours] = useState(colours)
    const [Numbers,setNumbers] = useState(numbers)

    const allCategories = [[clothes,"Clothes"],[colours,"Colours"],[numbers,"Numbers"]]
    const [AllCategories,setAllCategories] = useState(allCategories)





    return (
    <div>    
        <h1>Dutch</h1>
        <p>Clothes: 
            <div>
                {Clothes.map(word => (<div key={word.englishWord} > {word.englishWord} = {word.foreignWord}</div>))}
            </div>
        </p>
        
        <p>Colours: 
            <div>
                {Colours.map(word => (<div key={word.englishWord} > {word.englishWord} = {word.foreignWord}</div>))}
            </div>
        </p>
        
        <p>Numbers: 
            <div>
                {Numbers.map(word => (<div key={word.englishWord} > {word.englishWord} = {word.foreignWord}</div>))}
            </div>
        </p>
        
    </div>
    )
}

