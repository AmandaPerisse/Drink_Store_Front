import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Titulo from '../../global/Titulo';
import { Bebidas, Bebida } from '../../global/Bebidas';

export default function TipoBebida() {
    const { token } = useContext(UserContext);
    const { state } = useLocation();
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    async function carregarBebida() {
        try {
            const infoBebidas = await axios.get(`http://localhost:5000/bebidas/${state.tipo}`, { 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setInfo(infoBebidas.data);
            setIsLoading(false)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => carregarBebida(), [])

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
                <h1>{state.tipo}s</h1>
            </Titulo>
            <Bebidas>
                <Bebida>
                    <img src={info[0].img} alt={info[0].nome}/>
                    <p>{info[0].nome}</p>
                    <span>R$ {info[0].valor}</span>
                </Bebida>
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