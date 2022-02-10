import React from 'react';
import styled from 'styled-components';
import Titulo from '../../global/Titulo';
import { Bebidas, Bebida } from '../../global/Bebidas';

export default function Inicio() {
    return (
        <Container>
            <Titulo>
                <div className="barra"></div>
                <h1>Cervejas</h1>
            </Titulo>
            <Bebidas>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Vinhos</h1>
            </Titulo>
            <Bebidas>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Destilados</h1>
            </Titulo>
            <Bebidas>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Drinks</h1>
            </Titulo>
            <Bebidas>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
                <Bebida/>
            </Bebidas>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 118px 10px 60px;
    overflow-y: scroll;
`

