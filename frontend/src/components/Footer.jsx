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
                    <h3>Medina Martínez Diego Roberto, Medina Martínez Miguel Angel, Cortés Ramírez Roberto Carlos</h3>
                </footer>
            </Foter>
        )
    };
}

export default Footer;