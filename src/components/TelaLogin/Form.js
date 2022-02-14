import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import UserContext from '../contexts/UserContext';

export default function Form(){

    const { setToken } = useContext(UserContext);
    const { setEndereco } = useContext(UserContext);
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const navigate = useNavigate();
    function setarCampos(){
        setEmail('');
        setSenha('');
    }
    async function logando(e){
        e.preventDefault();
        try{
            const response = await axios.post('https://back-projeto-drink-store.herokuapp.com/login', {
                email: email,
                senha: senha
            });
            if(response.data){
                setToken(response.data.token);
                setEndereco(response.data.endereco);
                navigate('/bebidas');
                console.log(response.data)
            }
            else{
                alert('E-mail ou senha inválidos!');
                setarCampos();
            }
        }
        catch(e){
            alert('Falha na autenticação!');
        }
    }

    return (
        
        <>
            <Formulario onSubmit = {logando}>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='E-mail'/>
                <input type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='Senha'/>
                <Botao type="submit">
                    <h2>Entrar</h2>
                </Botao>
            </Formulario>
        </>
    );
}

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input{
        width: 326px;
    }
`;
const Botao = styled.button`
	background-color: #D9BF57;
    margin-top: 20px;
    width: 100%;
    height: 46px;
    border-radius: 100px;
    h2{
        color: white;
    }
`;