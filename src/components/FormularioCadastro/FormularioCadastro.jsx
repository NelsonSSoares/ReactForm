import React from 'react';
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return (<form>

        <TextField margin="normal" variant="outlined" fullWidth id='nome' label='Nome' type="text" />


        <TextField margin="normal" variant="outlined" fullWidth id='sobrenome' label='Sobrenome' type="text" />


        <TextField margin="normal" variant="outlined" fullWidth id='cpf' label='CPF' type="text" />

        <FormControlLabel label="Promoções" control={<Switch name='Promoções' defaultChecked={true} color='primary' />} />

        <FormControlLabel label="Novidades" control={<Switch name='Novidades' defaultChecked={true} color='primary' />} />




        <Button type="submit" variant='contained' color='primary'>Cadastrar</Button>
    </form>);
}

export default FormularioCadastro;