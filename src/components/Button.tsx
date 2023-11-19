import "./button.css"

const Button = (props: any) => {
    const clickMethod = props.clickMethod
    const ButtonName = props.ButtonName
    return (
        <div>    
                <button className = "btn" onClick={clickMethod}  >{ButtonName}</button>
        </div>
      );
}
 
export default Button;