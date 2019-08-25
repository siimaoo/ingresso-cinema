import styled from 'styled-components';

export const Promocao = styled.div`
    width: 100%;
    height: auto;
    background: #2ecc71;
    margin-top: 30px;
    padding-bottom: 50px;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 400;
    padding: 30px;
    padding-bottom: 5px;
    text-align: center;
    
    
`;
export const P = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding-bottom: 30px;
`;
export const ButtonPrimary = styled.button`
    width: 100%;
    max-width: 300px;
    height: 50px;
    border-radius: 30px;
    margin: 15px;
    cursor: pointer;
    background: #fff;
    color: #2ecc71;
    border: 2px solid #fff;
    font-weight: 700;
    font-size: 1em;
`;

export const ButtonSecondary = styled.button`
    width: 100%;
    max-width: 300px;
    height: 50px;
   margin: 15px;
    cursor: pointer;
    border-radius: 30px;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 700;
    font-size: 1em;
    background: rgba(0,0,0,0);

`;

export const Row = styled.div `
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;