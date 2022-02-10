import styled from 'styled-components';

const Bebidas = styled.div`
    margin: 15px 0;
    display: flex;
    gap: 8px;
    overflow-x: scroll;
`

const Bebida = styled.div`
    display: flex;
    flex-shrink: 0;

    height: 220px;
    width: 142px;
    padding: 6px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;

    img {
        height: 134px;
        width: 121px;
    }
`

export {
    Bebidas,
    Bebida
};