import { Key, useState } from "react"

const Button = (props: any) => {
    const clickMethod = props.clickMethod
    const ButtonName = props.ButtonName
    return (
        <div>    
                <button onClick={clickMethod}  >{ButtonName}</button>
        </div>
      );
}
 
export default Button;