import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: #2ecc71;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }   
    &::-webkit-scrollbar {
        height: 0px;
        background: #F4F4F4;
    }
    &::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`;

export const Filme = styled.div`
    height: 300px;
    margin: 15px;
`
export const FilmeImg = styled.img`
    height: 300px;
    width: auto;
`

export const FilmeTitle = styled.h5`
    margin: 5px;
    font-size: 0.7em;
    color: #2ecc71;
    font-weight: 400;
`