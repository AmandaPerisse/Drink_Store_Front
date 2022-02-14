import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function PedidosAnteriores() {

    const navigate = useNavigate();
    const {token, setToken} = useContext(UserContext);
    const [listaCarrinho, setListaCarrinho] = React.useState([]); 
    //const {carrinho, setCarrinho} = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get('https://back-projeto-drink-store.herokuapp.com/pedidos-anteriores', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            if(response.data){
                setToken(response.data.token);
                setListaCarrinho(response.data.pedidos);
            }
        });
        promise.catch(e => {
            if(e.response.status === 401){
                alert('Por favor, logue novamente.');
                navigate('/');
            }
            else{
                alert('Falha.');
            }
        });
    }, []);

    function refazerPedido(itens, total){
        //setCarrinho({itens: itens, total: total});
        navigate('/carrinho');
    }

    function Bebidas({itens}){
        let cont = 0;
        return (
            itens.map(item => {
                cont++;
                return(
                    <Item key = {cont}>
                        <h3>{item.nomeBebida}</h3>
                        <h3>{item.qtd} x {item.preco}</h3>
                    </Item>
                )
                
            })
        )
    }
    function Pedido(){
        if (listaCarrinho.length > 0){
            return (
                listaCarrinho.map(pedido => {
                    return(
                        <Pedidos>
                            <div>
                                <Bebidas itens = {pedido.itens}/>
                                <Saldo>
                                    <h3><strong>TOTAL</strong></h3>
                                    <h3><strong>R${pedido.total}</strong></h3>
                                </Saldo>
                            </div>
                            <div>
                                <Botao onClick = {() => {refazerPedido(pedido.itens, pedido.total)}}>
                                    <h3>Refazer Pedido</h3>
                                </Botao>
                            </div>
                        </Pedidos>
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
            <Pedido />
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
const Componentes = styled.button`

`;