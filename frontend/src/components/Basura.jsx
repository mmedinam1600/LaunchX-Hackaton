import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useWindowDimensions from "../hooks/useWindowDimensions";

const BasuraContainer = styled.div`
  position: absolute;
  z-index: 1001;
  right: 0;
  cursor: pointer;

  transform:
          translateX( ${ ({ejeX}) => ejeX + "px" || 0} )
          translateY( ${ ({ejeY}) => ejeY + "px" || 0} );

  transition: ${props => props.velocidad + "s"} linear;

  img {
    width: 45px;
    height: 85px;
  }
`;

const Imagen = styled.img`
  transform: scaleX(${props => props.direccion || 1});
  transition: 0.5s linear;
`;


function Basura(props) {

  const {width, height} = useWindowDimensions();

  const [ejeY, setEjeY] = useState(Math.floor(Math.random() * (height-85)));
  const [ejeX, setEjeX] = useState(0);
  const [reset, setReset] = useState(false);


  function onBasuraContainerClick() {
    setReset(true);
    setEjeX( oldValue => +500);
    setEjeY(Math.floor(Math.random() * (height-85)));
  }

  useEffect( () => {
    moverBasura();
    setReset(false);
  }, [reset]);


  useEffect( () => {
    moverBasura();
    return () => {
    }
  }, []);



  const moverBasura = () => {
    setEjeX(-width);
  }


  return (
    <BasuraContainer onClick={onBasuraContainerClick} ejeY={ejeY} ejeX={ejeX} velocidad={ reset ? 0.01 : 15}>
      <Imagen src={props.url} alt="basura"/>
    </BasuraContainer>
  );
}

export default Basura;