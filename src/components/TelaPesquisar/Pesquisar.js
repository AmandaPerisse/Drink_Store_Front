import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router';
import Form from "./Form";

export default function PedidosAnteriores() {

    const [listaBebidas, setListaBebidas] = React.useState([]);
    const navigate = useNavigate();
    //const {carrinho, setCarrinho} = useContext(UserContext);

    return (
        <Container>
            <Form lista = {setListaBebidas} />
            <Bebidas>
                <Bebida>
                    <div>Foto</div>
                    <div>
                        <h4>Nome bebida</h4>
                        <h4>Valor</h4>
                    </div>
                </Bebida>
            </Bebidas>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;  
    margin-top: 115px;
    margin-bottom: 40px;  
`
const Pedidos = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
    width: 100%;   
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 10px;
    overflow-y: auto;
    margin-bottom: 20px;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 5px 0px;
`
const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-top: 30px;
`
const Botao = styled.button`
	background-color: #D9BF57;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 100px;
    h3{
        color: white;
    }
`;
const Bebidas = styled.div`
    margin: 15px 0;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Bebida = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 220px;
    width: 142px;
    padding: 6px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;

    img {
        height: 134px;
        width: 121px;
    }
    h4{
        margin-top: 10px;
    }
`;