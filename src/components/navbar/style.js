import styled from 'styled-components';

export const Container = styled.div `
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
`;

export const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    background: #2ecc71;
    display: flex;
`;
export const Title = styled.h1`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    color: #fff;
    flex: 1;
`;
export const List = styled.ul`
    @media (max-width: 820px) {
        display: none !important;
    }
    display: flex;
    margin: 0;  
    flex: 4;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    
    li {
        display: inline-block;
        padding: 20px 22px;
        a {
            color: #fff;
            text-decoration: none;
        }
        a:hover {
            color: #27ae60;
        }
    }    

`