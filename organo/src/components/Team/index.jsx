import Student from '../Student'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secundaryColor }

    return (
        // Se for verdadeiro, retorna o componente <section>
        (props.students.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='students'>
                {props.students.map( student => <Student key={student.name} 
                    name={student.name} 
                    team={student.team} 
                    image={student.image}
                    backgroundColor={props.primaryColor}    
                />)}
            </div>
        </section>
        : ''

        // O mesmo pode ser realizado se ao invés de '?', tivermos && e sem o : ''
    )
}

export default Team