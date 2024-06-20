import './Student.css'

const Student = ({name, image, team, backgroundColor}) => {
    return (
        <div className='student'>
            <div className='cabecalho' style={backgroundColor={backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{team}</h5>
            </div>
        </div>
    )
}

export default Student