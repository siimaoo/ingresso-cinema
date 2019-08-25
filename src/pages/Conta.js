import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/navbar/Navbar'

const GlobalStyle = createGlobalStyle`
    html {
       overflow-x: hidden; 
    }
  body {
      background: #fff;
      overflow-x: hidden;
  }
  * {
      margin: 0;
      padding: 0;
      font-family: 'Nunito', sans-serif;
  }
`;

export default class App extends React.Component {
    render() {
        
        return (
            <Fragment>
                <GlobalStyle />
                <main>
                    <Navbar />
                   
                </main>
            </Fragment>
        );
    }
}