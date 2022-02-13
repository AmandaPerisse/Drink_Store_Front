import { useState, useContext } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import inicio from './IconesFooter/inicio.png';
import pedidos from './IconesFooter/pedidos.png';
import carrinho from './IconesFooter/carrinho.png';
import { caminhosSemHeaderFooter } from '../../App';
import UserContext from '../../components/contexts/UserContext';

export default function Footer() {
    const location = useLocation();
    const [botaoInicio, setInicio] = useState(true);
    const [botaoPedidos, setPedidos] = useState(false);
    const [botaoCarrinho, setCarrinho] = useState(false);
    const { setTipo } = useContext(UserContext);

    if (caminhosSemHeaderFooter.includes(location.pathname)) {
     return null;
    }

    return (
        <Container>
            <Botao
                to="/bebidas"
                selecionado={botaoInicio}
                onClick={() => {
                    setInicio(true)
                    setPedidos(false)
                    setCarrinho(false)
                    setTipo("bebidas")
                }}
            >
                <img src={inicio} alt="" />
            </Botao>
            <Botao
                to="/pedidos-anteriores"
                selecionado={botaoPedidos}
                onClick={() => {
                    setInicio(false)
                    setPedidos(true)
                    setCarrinho(false)
                }}
            >
                <img src={pedidos} alt="" />
            </Botao>
            <Botao
                to="carrinho"
                selecionado={botaoCarrinho}
                onClick={() => {
                    setInicio(false)
                    setPedidos(false)
                    setCarrinho(true)
                }}
            >
                <img src={carrinho} alt="" />
            </Botao>
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

const Botao = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 13px;
    ${props => props.selecionado === true && 'border-top: 3px solid white;'};
    ${props => props.selecionado === true && 'border-bottom: 3px solid white;'}

    img {
        width: 19px;
        height: 18px;
    }
`