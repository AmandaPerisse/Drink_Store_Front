import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router';
import Form from "./Form";

export default function PedidosAnteriores() {

    const [listaBebidas, setListaBebidas] = React.useState([]);
    const navigate = useNavigate();
    //const {carrinho, setCarrinho} = useContext(UserContext);

    function Bebidas(){
        let cont = 0;
        if (listaBebidas.length > 0){
            return (
                listaBebidas.map(bebida => {
                    cont ++;
                    return(
                        <Bebida key = {cont}>
                            <img src = {bebida.img} alt = "Imagem"/>
                            <div>
                                <h4>{bebida.nome}</h4>
                                <h4>R$ {bebida.valor}</h4>
                            </div>
                        </Bebida>
                    )
                    
                })
            )
        }
        else{
            return null;
        }
    }

    return (
        <Container>
            <Form setListaBebidas = {setListaBebidas} />
            <BebidasCompleto>
                <Bebidas />
            </BebidasCompleto>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;  
    margin-top: 115px;
    margin-bottom: 40px;  
`
const BebidasCompleto = styled.div`
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