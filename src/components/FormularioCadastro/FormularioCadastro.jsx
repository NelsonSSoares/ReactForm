import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [errors, setErrors] = useState({cpf:{valido:true, texto:''}})
    //const aoEnviar = props.aoEnviar;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome,sobrenome,cpf, novidades, promocoes})
        }}>

            <TextField margin="normal"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
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
                value={cpf}
                onChange={(event)=>{
                    setCpf(event.target.value);
                }}

                onBlur={(event)=>{
                    const valido = validarCpf(cpf)
                    setErrors({cpf:valido})
                }}

                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                variant="outlined"
                fullWidth id='cpf'
                label='CPF'
                type="text" />

            <FormControlLabel label="Promoções"
                control={<Switch name='Promoções'
                checked={promocoes}
                onChange={(event)=>{
                    setPromocoes(event.target.checked)
                }}
                color='primary' />} />

            <FormControlLabel label="Novidades"
            control={<Switch name='Novidades'
            checked={novidades}
            onChange={(event)=>{
                
                setNovidades(event.target.checked)
            }}
            color='primary' />} />




            <Button type="submit" variant='contained' color='primary'>Cadastrar</Button>
        </form>);
}


export default FormularioCadastro;