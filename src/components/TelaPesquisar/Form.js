import axios from 'axios';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Pesquisar from '../Imgs/PesquisarRoxo'

export default function Form({ setListaBebidas }){

    const navigate = useNavigate();
    const [campoPesquisa, setCampoPesquisa] = React.useState('');
    const {token, setToken} = useContext(UserContext); 

    function setarCampos(){
        setCampoPesquisa('');
    }
    
    function pesquisando(e){
        e.preventDefault();
        const promise = axios.get('http://localhost:5000/pesquisar', {
            pesquisa: campoPesquisa
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            if(response.data){
                setToken(response.data.token);
                setListaBebidas(response.data.bebidas);
                setarCampos();
            }
        });
        promise.catch(e => {
            if(e.response.status === 401){
                alert('Por favor, logue novamente.');
                navigate('/');
            }
            else{
                alert('Falha.');
                setarCampos();
            }
        });
    };

    return (
        
        <>
            <Formulario onSubmit = {pesquisando}>
                <input type="text" onChange = {(e) => setCampoPesquisa(e.target.value)} value = {campoPesquisa} placeholder='O que deseja beber hoje?' />
                <Botao type="submit">
                    <Pesquisar />
                </Botao>
            </Formulario>
        </>
    );
}

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    input{
        height: 40px;
        width: 100%;
        border: 2px solid #4720D4;
    }
    input::placeholder{
        font-size: 14px;
    }
`;
const Botao = styled.button`
    position: absolute;
    right: 15px;
    margin-top: 15px;
`;