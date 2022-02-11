import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Carrinho() {

    const {token, setToken} = useContext(UserContext);
    //const {carrinho, setCarrinho} = useContext(UserContext);
    let carrinho = [{
        nomeBebida: "Brahma Chopp 473ml",
        preco: "3.89",
        qtd: 3
    }, {
        nomeBebida: "Vinho 1",
        preco: "10.89",
        qtd: 10
    }, {
        nomeBebida: "Drink 1",
        preco: "50.89",
        qtd: 10
    },{
        nomeBebida: "Drink 2",
        preco: "30.50",
        qtd: 15
    }];
    const [somador, setSomador] = React.useState(0); 
    let soma = 0;
    const navigate = useNavigate();
    useEffect(() => {
        for(let i = 0; i<carrinho.length; i++){
            soma += parseFloat(carrinho[i].preco).toFixed(2)*parseFloat(carrinho[i].qtd).toFixed(2);
         }
         setSomador(soma);
    }, []);
    function confirmarPedido(){
        try{
            console.log("oi1")
            const promise = axios.post('http://localhost:5000/carrinho', {
                itens: carrinho,
                total: somador,
                }, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            promise.then(response => {
                console.log("oi2")
                console.log(response.data);
                if(response.data){
                    setToken(response.data.token);
                    alert("Obrigado por favor o pedido! Seu pedido já está sendo preparado e logo sairá para a entrega.");
                    //setCarrinho([]);
                    navigate('/bebidas');
                }
            });
        }
        catch(e){
            console.log("oi3")
            if(e.response.status === 401){
                console.log("oi5")
                alert('Por favor, logue novamente.');
                navigate('/');
            }
            else{
                console.log("oi4")
                alert('Falha.');
            }
        }
    }
    function cancelarPedido(){
        //setCarrinho([]);
        navigate('/bebidas');
    }
    function Componentes(){
        if (carrinho.length > 0){
            let cont = 0;
            return (
                carrinho.map(item => {
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
        else{
            return null;
        }
    }

    return (
        <Container>
            <Pedido>
                <div>
                    <Componentes />
                    <Saldo>
                        <h3><strong>TOTAL</strong></h3>
                        <h3><strong>R${somador.toFixed(2)}</strong></h3>
                    </Saldo>
                </div>
                <div>
                    <Botao onClick={confirmarPedido}>
                        <h3>Confirmar Pedido</h3>
                    </Botao>
                    <Botao onClick={cancelarPedido}>
                        <h3>Cancelar</h3>
                    </Botao>
                </div>
            </Pedido>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;  
    margin-top: 115px;  
`
const Pedido = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    height: calc(100vh - 195px);
    border-radius: 5px;
    width: 100%;   
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    overflow-y: auto;
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