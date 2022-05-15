import React, {useEffect, useState} from 'react';
import fondo from '../img/fondo.png'
import styled from 'styled-components'
import getPeces from "../helpers/getPeces";
import Pez from "../components/Pez";


const Fondo = styled.img`
  background-image: url(${fondo});
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;


function Mar() {

  const [peces, setPeces] = useState(Array.prototype);

  useEffect(() => {
    updatePeces();
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

  return(
    <main>

      <Fondo/>
      {
        peces.map( (pez) => <Pez key={pez.type} src={pez.url} name={pez.type}/>)
      }
    </main>
  )
}

export default Mar;