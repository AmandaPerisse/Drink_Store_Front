import { useState, useContext } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import inicio from './IconesFooter/inicio.png';
import pedidos from './IconesFooter/pedidos.png';
import iconeCarrinho from './IconesFooter/carrinho.png';
import pesquisar from './IconesFooter/procurar.png';
import { caminhosSemHeaderFooter } from '../../App';
import UserContext from '../../components/contexts/UserContext';

export default function Footer() {
    const location = useLocation();
    const [botaoInicio, setInicio] = useState(true);
    const [botaoPedidos, setPedidos] = useState(false);
    const [botaoCarrinho, setBotaoCarrinho] = useState(false);
    const [botaoPesquisar, setBotaoPesquisar] = useState(false);
    const { setTipo, carrinho } = useContext(UserContext);

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
                    setBotaoCarrinho(false)
                    setBotaoPesquisar(false)
                    setTipo("bebidas")
                }}
            >
                <img src={inicio} alt="" />
            </Botao>
            <Botao
                to="/pesquisar"
                selecionado={botaoPesquisar}
                onClick={() => {
                    setInicio(false)
                    setPedidos(false)
                    setBotaoCarrinho(false)
                    setBotaoPesquisar(true)
                }}
            >
                <img src={pesquisar} alt="" />
            </Botao>
            <Botao
                to="/pedidos-anteriores"
                selecionado={botaoPedidos}
                onClick={() => {
                    setInicio(false)
                    setPedidos(true)
                    setBotaoCarrinho(false)
                    setBotaoPesquisar(false)
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
                    setBotaoCarrinho(true)
                    setBotaoPesquisar(false)
                }}
            >
                <img src={iconeCarrinho} alt="" />
                {carrinho.length === 0 ? "" : <span className="quantidade">{carrinho.length}</span>}
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

    .quantidade {
        color: #A17208;
        position: fixed;
        bottom: 25px;
        right: 30px;
    }
`