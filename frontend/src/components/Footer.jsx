import React from 'react';
import styled from 'styled-components'

const Foter = styled.div`
    .texto {
        display: table-cell;
        text-align: center;
        bottom: -10rem;
        width: 50%;
    }
`

class Footer extends React.Component{
    render(){
        return(
            <Foter>
                <footer className="texto">
                    <h3>Todos los Derechos Reservados a dirtyOcean.©</h3>
                    <h3>Autores:</h3>
                    <h3 id="contacto">
                      <a href="https://github.com/diego200052">Medina Martínez Diego Roberto</a>
                      <a href="https://github.com/mmedinam1600">Medina Martínez Miguel Angel</a>
                      <a href="https://github.com/RobertoCarlos881">Cortés Ramírez Roberto Carlos</a>
                    </h3>
                </footer>
            </Foter>
        )
    };
}

export default Footer;