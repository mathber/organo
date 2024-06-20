import "./TextField.css";

const TextField = (props) => {

    const onModify = (event) => {
        props.onModify(event.target.value)
    }

    return (
        <div className="textfield">
            <label>{props.label}</label>
            <input onChange={onModify} 
                required={props.required} 
                placeholder={`Digite o seu ${props.label}`}/>
        </div>
    )

}

export default TextField