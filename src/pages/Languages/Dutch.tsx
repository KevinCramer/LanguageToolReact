import { useState } from "react"

export function Dutch(){
    const all_words =[ 
    {language: "Dutch", topic: "Clothes", englishWord: "trousers", foreignWord: "broek"},
    {language: "Dutch", topic: "Clothes", englishWord: "sweater", foreignWord: "trui"},
    {language: "Dutch", topic: "Colours", englishWord: "red", foreignWord: "rood"},
    {language: "Dutch", topic: "Colours", englishWord: "blue", foreignWord: "blauw"},
    {language: "Dutch", topic: "Numbers", englishWord: "six", foreignWord: "zes"},
    {language: "Dutch", topic: "Numbers", englishWord: "eight", foreignWord: "acht"},
    {language: "Dutch", topic: "Numbers", englishWord: "eleven", foreignWord: "elf"}
]

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

