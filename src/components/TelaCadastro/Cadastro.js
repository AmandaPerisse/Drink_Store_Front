import React from 'react';
import styled from 'styled-components';

import Form from "./Form";
import Logar from "./Logar";
import Logo from '../Imgs/Logo';

export default function Cadastro(){

    return (
        <Completo>
            <Alinhar>
                <Logo />
                <Form />
                <Logar />
            </Alinhar>
        </Completo>
    );
}
const Alinhar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;
const Completo = styled.div`
    background-color: #4720D4;
    height: 100vh;
`;