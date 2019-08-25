import React from 'react';
import { Navbar, List, Title, Container } from './style';
import { Link } from 'react-router-dom'

export default class navbar extends React.Component {
    render() {
        const links = { 
            home: {link: 'Página Inicial', caminho:'/'}, 
            comprar: {link: 'Comprar Ingressos', caminho: '/buy'}, 
            contato: {link: 'Contato', caminho: '/contact'}, 
            conta: {link: 'Minha Conta', caminho: '/account'}
        };
        // const items = [];
        // for (const value in links.entries()) {
        //     items.push(<li ><Link to="value.caminho">{value.link}</Link></li>)
        // }
        return (
            <Navbar>
                <Container>
                    <Title>Cinema</Title>
                    <List>
                        <li><Link to={links.home.caminho}>{links.home.link}</Link></li>
                        <li><Link to={links.comprar.caminho}>{links.comprar.link}</Link></li>
                        <li><Link to={links.contato.caminho}>{links.contato.link}</Link></li>
                        <li><Link to={links.conta.caminho}>{links.conta.link}</Link></li>
                    </List>
                </Container>
            </Navbar>
        );
    }
}