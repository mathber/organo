import './List.css'

const List = (props) => {

    return (
        <div className='list'>
            <label>{props.label}</label>
            <select
                onChange={event => props.onModify(event.target.value)}
                value={props.value}>
                
                <option value={""}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default List