import React from 'react';
import { Promocao, Container, ButtonPrimary, ButtonSecondary, Title, P, Row } from './style';

export default class navbar extends React.Component {
    render() {
        return (
            
            <Promocao>  
                <br />
            <br />
            
                <Container>
                    <Title>
                        Na compra de 5 ingressos ganhe um balde de pipoca!
                        
                    </Title>
                    <br />
                    <br />
                    <P>
                            Valido somente para seções em 3D, na compra de mais 5 ingressos a pipoca pode ser substituida por algo de valor equivalente
                        </P>
                    <Row>
                    <ButtonPrimary>Saiba Mais</ButtonPrimary>
                    <ButtonSecondary>Comprar Ingresso</ButtonSecondary>
                    </Row>
                </Container>
            </Promocao>
        );
    }
}