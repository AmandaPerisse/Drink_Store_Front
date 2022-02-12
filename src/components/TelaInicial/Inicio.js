import React, { useEffect } from 'react';
import { useContext, useState } from 'react'
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Titulo from '../../global/Titulo';
import { Bebidas, Bebida } from '../../global/Bebidas';

export default function Inicio() {
    const { token } = useContext(UserContext);
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    async function carregarBebidas() {
        try {
            const infoBebidas = await axios.get('http://localhost:5000/bebidas', { 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setInfo(infoBebidas.data);
            setIsLoading(false);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => carregarBebidas(), [])

    if (isLoading) {
        return (
            <h1 style={{color: 'white', fontSize: '25px', display: 'flex', justifyContent: 'center', padding: '50%'}}>
                Carregando...
            </h1>
        )
    }

    return (
        <Container>
            <Titulo>
                <div className="barra"></div>
                <h1>Cervejas</h1>
            </Titulo>
            <Bebidas>
                {info.filter(bebida => bebida.tipo === 'Cerveja')
                    .map(bebida =>
                    <Bebida>
                        <img src={bebida.img} alt={bebida.nome}/>
                        <p>{bebida.nome}</p>
                        <span>R$ {bebida.valor}</span>
                    </Bebida>
                )}
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Vinhos</h1>
            </Titulo>
            <Bebidas>
                {info.filter(bebida => bebida.tipo === 'Vinho')
                    .map(bebida =>
                    <Bebida>
                        <img src={bebida.img} alt={bebida.nome}/>
                        <p>{bebida.nome}</p>
                        <span>R$ {bebida.valor}</span>
                    </Bebida>
                )}
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Destilados</h1>
            </Titulo>
            <Bebidas>
                {info.filter(bebida => bebida.tipo === 'Destilado')
                    .map(bebida =>
                    <Bebida>
                        <img src={bebida.img} alt={bebida.nome}/>
                        <p>{bebida.nome}</p>
                        <span>R$ {bebida.valor}</span>
                    </Bebida>
                )}
            </Bebidas>
            <Titulo>
                <div className="barra"></div>
                <h1>Drinks</h1>
            </Titulo>
            <Bebidas>
                {info.filter(bebida => bebida.tipo === 'Drink')
                    .map(bebida =>
                    <Bebida>
                        <img src={bebida.img} alt={bebida.nome}/>
                        <p>{bebida.nome}</p>
                        <span>R$ {bebida.valor}</span>
                    </Bebida>
                )}
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

