import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome)
            console.log(event)
        }}>

            <TextField margin="normal"
                value={nome}


                onChange={(event) => {
                    let tempNome = event.target.value;
                   
                    if (tempNome.length >= 3) {
                        tempNome =tempNome.substring(0,3)  
                    }
                    setNome(tempNome)
                    console.log(nome)
                }
                
                }
                variant="outlined"
                fullWidth id='nome'
                label='Nome'
                type="text" />


            <TextField margin="normal"
                value={sobrenome}
                onChange={(event) => {
                   setSobrenome(event.target.value)
                }}
                variant="outlined"
                fullWidth id='sobrenome'
                label='Sobrenome'
                type="text" />


            <TextField margin="normal"
                variant="outlined"
                fullWidth id='cpf'
                label='CPF'
                type="text" />

            <FormControlLabel label="Promoções"
                control={<Switch name='Promoções' defaultChecked={true} color='primary' />} />

            <FormControlLabel label="Novidades"
                control={<Switch name='Novidades' defaultChecked={true} color='primary' />} />




            <Button type="submit" variant='contained' color='primary'>Cadastrar</Button>
        </form>);
}

export default FormularioCadastro;