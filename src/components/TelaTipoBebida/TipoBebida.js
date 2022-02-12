import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Titulo from '../../global/Titulo';
import { Bebidas, Bebida } from '../../global/Bebidas';
import Swal from 'sweetalert2';

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

    async function escolherQte(nomeBebida, preco) {
        const compras = [];

        const { value: qtd } = await Swal.fire({ title: "Selecionar quantidade",
                    input: "number",
                    confirmButtonText: 'Adicionar ao carrinho',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    inputAttributes: {
                        min: 0,
                        max: 100,
                        step: 1
                    },
                    inputValue: ""
        })
        compras.push({nomeBebida, preco, qtd})
    }

    useEffect(() => carregarBebida(), [state.tipo])

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
                {info.map(bebida =>
                    <Bebida onClick={() => escolherQte(bebida.nome, bebida.valor)}>
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