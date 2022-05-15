import React from 'react';
import fondo from '../img/fondo.png'
import styled from 'styled-components'

const Fondo = styled.img`
    background-image: url(${fondo});
    height: 90vh;
    width: 100vw;
    margin: 10px;
`;

class Mar extends React.Component{
    render(){
        return(
            <main>
                <Fondo/>
            </main>
        )
    };
}

export default Mar;