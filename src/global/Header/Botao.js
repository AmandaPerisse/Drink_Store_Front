import styled from 'styled-components';

const Botao = styled.div`
    width: 110px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: ${props => props.selecionado === true ? '#FFFFFF' : '#4720D4'};
    border: ${props => props.selecionado === true && '1px solid #4720D4'};
    border-radius: 5px;

    span {
        font-size: 14px;
        color: ${props => props.selecionado === true ? '#4720D4' : '#FFFFFF'};
    }

    img {
        width: 15px;
        height: 15px;
    }
`;

export default Botao;
