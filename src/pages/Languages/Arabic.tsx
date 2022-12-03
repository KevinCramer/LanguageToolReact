import { useState } from "react"
export function Arabic(){
    const all_words =[ 
        {language: "Arabic", topic: "Food", englishWord: "potato", foreignWord: "batatis (بَطَاطِس)"},
        {language: "Arabic", topic: "Food", englishWord: "bread", foreignWord: "khubz (خُبْز)"},
        {language: "Arabic", topic: "Colours", englishWord: "yellow", foreignWord: "asfar (أَصْفَر)"},
        {language: "Arabic", topic: "Colours", englishWord: "blue", foreignWord: "azraq (أَزْرَق)"},
        {language: "Arabic", topic: "Numbers", englishWord: "two", foreignWord: "ithnain (اِثْنَان)"},
        {language: "Arabic", topic: "Numbers", englishWord: "five", foreignWord: "khamsah (خَمْسَة)"},
        {language: "Arabic", topic: "Numbers", englishWord: "one", foreignWord: "waheed (وَاحِد)"}
    ]
    
        const clothes = all_words.filter((word) => {return word.topic === "Food" })
        const colours = all_words.filter((word) => {return word.topic === "Colours" })
        const numbers = all_words.filter((word) => {return word.topic === "Numbers" })
        const [Clothes,setClothes] = useState(clothes)
        const [Colours,setColours] = useState(colours)
        const [Numbers,setNumbers] = useState(numbers)
    
        const allCategories = [[clothes,"Clothes"],[colours,"Colours"],[numbers,"Numbers"]]
        const [AllCategories,setAllCategories] = useState(allCategories)
    
    
    
    
    
        return (
        <div>    
            <h1>Arabic</h1>
            <p>Food: 
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
    