import React from 'react';
import { Container, Row, Title, Filme, FilmeImg, FilmeTitle } from './style';
import axios from 'axios';

export default class Carrousel extends React.Component {

    state = {
        filmes: []
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0f36dbec00b62c19949c9a151c7f5a57&language=pt-BR&page=1&region=BR')
            .then(res => {
                const filmes = res.data.results;
                console.log(res.data.results);
                this.setState({ filmes });
            });

        const slider = document.querySelector('#items');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
           
        });
    };

    render() {
        return (
            <Container>
                <br />
                <br />
                <br />
                <Title>Filmes em cartaz</Title>
                <Row id="items">
                    {
                        this.state.filmes.map(filme => {
                            if (filme.poster_path != null) {
                                return (
                                <Filme>
                                    <FilmeTitle>{filme.title}</FilmeTitle>
                                    <FilmeImg src={`http://image.tmdb.org/t/p/w200/${filme.poster_path}`} ></FilmeImg>
                                </Filme>
                                )
                            }
                        })
                    }
                </Row>
                <br />
                <br />
                <br />
            </Container>
        );
    }
} 