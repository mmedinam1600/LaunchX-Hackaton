import React, {useEffect, useState} from 'react';
import fondo from '../img/fondo.png'
import styled from 'styled-components'
import getPeces from "../helpers/getPeces";
import Pez from "../components/Pez";
import Basura from "../components/Basura";
import getBasura from "../helpers/getBasura";


const Fondo = styled.img`
  background-image: url(${fondo});
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

var valor = 0;

const contadorScore = () => {
  console.log(valor)
}

const incrementar = () => {
  contadorScore(++valor);
}

const decrementar = () => {
  contadorScore(--valor);
}

function Mar() {

  const [peces, setPeces] = useState(Array.prototype);
  const [basuras, setBasuras] = useState(Array.prototype);

  useEffect(() => {
    updatePeces();
    updateBasura();
  }, []);

  const updatePeces = () => {
    getPeces()
      .then((data) => {
        if (data.error) {
          console.log("Error al obtener la información de peces" + data.error);
        }
        setPeces(data);
      }).catch(error => {
      console.log(error);
    });
  }

  const updateBasura = () => {
    getBasura()
      .then((data) => {
        if (data.error) {
          console.log("Error al obtener la información de peces" + data.error);
        }
        setBasuras(data);
      }).catch(error => {
      console.log(error);
    });
  }

  return(
    <main>
      <Fondo/>
      <div onClick={decrementar}>
        {
          peces.map( (pez, i) => <Pez key={pez.type} src={pez.url} name={pez.type} velocidad={Math.floor(Math.random() * (7 - 3 + 1) + 3)}/>)
        }
      </div>
      <div onClick={incrementar}>
        {
          basuras.map( (basura, i) => <Basura key={basura.type} url={basura.url}/>)
        }
      </div>
    </main>
  )
}

export default Mar;