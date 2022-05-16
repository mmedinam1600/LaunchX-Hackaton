import React from 'react';
import styled from 'styled-components'
import logo from '../img/logo.png'

const Logo = styled.img`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 14rem;
`

const Navb = styled.div`
    :root {
        --blanco: #ffffff;
        --oscuro: #212121;
        --primarionavbar: #FFC107;
        --secundarionavbar: #0097A7;
    }

    .contenedor {
        max-width: 120rem;
        margin: 0 auto;
    }

    .nav-bg {
        background-color: var(--secundarionavbar);
    }

    .navegacion-principal {
        display: flex;
        flex-direction: column;
    }

    .navegacion-principal{
        flex-direction: row;
        justify-content: space-between;
    }

    .navegacion-principal a {
        display: block;
        text-align: center;
        color: var(--blanco);
        text-decoration: none;
        font-size: 2rem;
        font-weight: 700;
        padding: 1rem;
    }
    .navegacion-principal a:hover{
        background-color: var(--primarionavbar);
        color: var(--oscuro);
    }
`
class Navbar extends React.Component {

    render() {
        return(
            <Navb>
                <div className="nav-bg">
                    <nav className="navegacion-principal contenedor">
                        <Logo/>
                        <h3>Puntaje: {this.props.score || 0}</h3>
                        <h3><a href="#contacto">Contacto</a></h3>
                    </nav>
                </div>
            </Navb>
        )
    };
}

export default Navbar;

