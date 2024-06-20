import "./Formulario.css"
import { useState } from "react";
import TextField from "../TextField"
import List from "../List";
import Button from "../Button";

const Formulario = (props) => {

    const onSave = (event) => {
        event.preventDefault()
        props.onSubmit({
            name,
            field,
            image,
            team
        })
        setName('')
        setField('')
        setImage('')
        setTeam('')
    }

    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    value={name} 
                    onModify={value => setName(value)}
                    />
                <TextField 
                    required={true} 
                    label="Campo" 
                    value={field} 
                    onModify={value => setField(value)}
                    />
                <TextField 
                    label="Imagem" 
                    value={image} 
                    onModify={value => setImage(value)}
                    />
                <List 
                    label="Time" 
                    itens={props.teams}
                    value={team}
                    onModify={value => setTeam(value)}
                    />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default Formulario