import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoMini from '../LogoMini/LogoMini'
import Botao from './Botao'
import cerveja from './LogoBebidas/cerveja.png';
import vinho from './LogoBebidas/vinho.png';
import drink from './LogoBebidas/drink.png';
import semalcool from './LogoBebidas/semalcool.png';
import { caminhosSemHeaderFooter } from '../../App';

export default function Header() {
    const location = useLocation();

    if (caminhosSemHeaderFooter.includes(location.pathname)) {
     return null;
    }

    return (
        <Container>
            <CaixaSuperior>
                <LogoMini/>
                <h3>Rua Fulaninho de Tal, 33</h3>
            </CaixaSuperior>
            <Botoes>
                <Botao>
                    <img src={cerveja} alt="cerveja"></img>
                    <span>Cervejas</span>
                </Botao>
                <Botao>
                    <img src={vinho} alt="vinho"></img>
                    <span>Vinhos</span>
                </Botao>
                <Botao>
                    <img src={drink} alt="destilado"></img>
                    <span>Destilados</span>
                </Botao>
                <Botao>
                    <img src={semalcool} alt="drinks"></img>
                    <span>Drinks</span>
                </Botao>
            </Botoes>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    padding: 10px;
`

const CaixaSuperior = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 13px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 6px;
`