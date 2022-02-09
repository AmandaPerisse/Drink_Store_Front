import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function Form(){

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
    const [senhaConfirmar, setSenhaConfirmar] = React.useState('');
    
    const navigate = useNavigate();
    function setarCampos(){
        setEmail('');
        setSenha('');
        setNome('');
        setEndereco('');
        setSenhaConfirmar('');
    }
    async function cadastrando(e){
        e.preventDefault();
        try{
            if(senha === senhaConfirmar){
                await axios.post('http://localhost:5000/cadastro', {
                nome: nome,
                email: email,
                endereco: endereco,
                senha: senha
                });
                navigate('/');
            }
            else{
                alert("As senhas não são iguais");
                setarCampos();
            }
        }
        catch(e){
            if(e.response.status == 409){
                alert('Email já cadastrado!');
            }
            else{
                alert('Falha na criação do usuário!');
            }
            setarCampos();
        }
    }

    return (
        
        <>
            <Formulario onSubmit = {cadastrando}>
                <input type="text" onChange = {(e) => setNome(e.target.value)} value = {nome} placeholder='Nome' />
                <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='E-mail'/>
                <input type="text" onChange = {(e) => setEndereco(e.target.value)} value = {endereco} placeholder='Endereço' />
                <input type="password" onChange = {(e) => setSenha(e.target.value)} value = {senha} placeholder='Senha'/>
                <input type="password" onChange = {(e) => setSenhaConfirmar(e.target.value)} value = {senhaConfirmar} placeholder='Confirme a senha'/>
                <Botao type="submit">
                    <h2>Cadastrar</h2>
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