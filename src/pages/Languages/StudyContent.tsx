import { useState } from "react"
import {arabic as language} from "../../data/words"

const StudyContent = () => {
    var x =1;
    var setting = "Study"
    var [x,setX] = useState(x)
    const handleClick = () => { return setX(x*(-1))}
    var category = "Clothes"
    var [category,setCategory] = useState(category)
    const changeCategoryToFood = () => { return setCategory("Food")}
    const changeCategoryToClothes = () => { return setCategory("Clothes")}
    const changeCategoryToColours = () => { return setCategory("Colours")}
    const changeCategoryToNumbers = () => { return setCategory("Numbers")}
    var [setting,setSetting] = useState(setting)
    const changeSetting = () => { return setSetting((setting === "Study" ? "Quiz": "Study"))}
    function ToggleQuiz( StudyOrQuiz: string){
        if (StudyOrQuiz === "Study") {
            return (
   
                <div>
                    {category_words.map(word => (<div key={word.englishWord} > {x===1? word.englishWord + " = " + word.foreignWord : word.foreignWord + " = " + word.englishWord} </div>))}
                </div>
        )
        }
        if (StudyOrQuiz === "Quiz") {
            return (
                <div>
                    {category_words.map(word => (<div><div key={word.englishWord} >{x===1? word.englishWord + " = " : word.foreignWord + " = "}  <form style={{ display: 'flex', flexDirection : 'row'}}><input type="text" id="name" /></form></div></div>))}
                    
                </div>
            )
        }

    }

    var category_words = language.filter((word) => {return word.topic === category} )
    return (
        <div>    
            <h1>Arabic</h1>
                <button onClick={handleClick} >Toggle Languages</button>
                <button onClick={changeCategoryToFood} >Food</button>
                <button onClick={changeCategoryToClothes} >Clothes</button>
                <button onClick={changeCategoryToColours} >Colours</button>
                <button onClick={changeCategoryToNumbers} >Numbers</button>
                <button onClick={changeSetting} >Quiz/Study</button>
                <p></p>
                {ToggleQuiz(setting)}
        </div>
      );
}
 
export default StudyContent;