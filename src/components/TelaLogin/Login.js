import React from 'react';
import styled from 'styled-components';

import Logo from '../Imgs/Logo';
import Form from "./Form";
import Cadastrar from "./Cadastrar";

export default function Login(){

    return (
        <Completo>
            <Fundo>
               <Logo />
               <Form />
               <Cadastrar />
            </Fundo>
        </Completo>
    );
}
const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;
const Completo = styled.div`
    background-color: #4720D4;
    height: 100vh;
`;