import React from 'react';
import fondo from '../img/fondo.png'
import styled from 'styled-components'

const Fondo = styled.img`
    background-image: url(${fondo});
    display: block;
    margin: 0 auto;
    width: 134.9rem;
    height: 100rem;
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