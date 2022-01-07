import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';
class App extends React.Component {
  render() { 
    return <Container component="article" maxWidth="sm">
      <Typography variant='h2' align='center' component='hq'>Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={onSubmitForm} validarCpf={validarCpf}/>
    </Container>;
  }
}

function onSubmitForm(dados){
  console.log(dados)
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:'CPF deve conter 11 digitos'}
  }else{
    return {valido:true, texto:''}
  }
}
 
export default App;

/*
function App() {
  return (
    <h1>Formulario de Cadastro</h1>
  );
}
export default App;
*/

