import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import inicio from './IconesFooter/inicio.png';
import pedidos from './IconesFooter/pedidos.png';
import carrinho from './IconesFooter/carrinho.png';
import { caminhosSemHeaderFooter } from '../../App';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const [botoes, setBotoes] = useState([
        { to: "/inicio", img: inicio, selecionado: false, id:0 },
        { to: "/pedidos-anteriores", img: pedidos, selecionado: false, id:1 },
        { to: "/carrinho", img: carrinho, selecionado: false, id:2 }
    ])

    if (caminhosSemHeaderFooter.includes(location.pathname)) {
     return null;
    }

    function selPagina({to, id, selecionado}) {
        const objBotoes = [...botoes];

        if(selecionado===false) {
            objBotoes[id].selecionado = true
        } else {
            objBotoes[id].selecionado = false
        }
        
        setBotoes(objBotoes);
        navigate(to)
    }

    return (
        <Container>
            {botoes.map(botao => 
            <Botao 
                to={botao.to} 
                selecionado={botao.selecionado}
                onClick={() => selPagina(botao)}
            >
                <img src={botao.img} alt="" />
            </Botao>)}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #4720D4;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
`;

const Botao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 13px;
    ${props => props.selecionado === true && 'border-top: 3px solid white;'};
    ${props => props.selecionado === true && 'border-bottom: 3px solid white;'}
`