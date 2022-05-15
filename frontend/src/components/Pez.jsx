import styled from "styled-components";
import {useState, useEffect} from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";


const PezStyle = styled.div`
  position: absolute;
  z-index: 1000;
  transform: 
          translateX(calc(  ${ ({movimientoX}) => (movimientoX > 125 ? movimientoX - 120 : movimientoX) + "px" || 0} ) )
          translateY(calc( ${ ({movimientoY}) => (movimientoY > 75 ? movimientoY - 60 : movimientoY) + "px" || 0} ) );
  transition: ${props => props.velocidad + "s"} linear;

  img {
    width: 125px;
    height: 75px;
  }
`;

const Imagen = styled.img`
  transform: scaleX(${props => props.direccion || 1});
  transition: 0.5s linear;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Pez(props) {

  const [movimientoX, setMovimientoX] = useState(0);
  const [movimientoY, setMovimientoY] = useState(0);
  const [direccion, setDireccion] = useState(1);

  const { height, width } = useWindowDimensions();

  useEffect( () => {
    moverse();

    const interval = setInterval(() => {
      moverse();
    }, props.velocidad * 900);


    return () => {
      clearInterval(interval);
    }
  }, []);

  const moverse = () => {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    setMovimientoX((oldMovimientoX) =>  {
      const nextPosition = oldMovimientoX - x;
      if(nextPosition < 0) { //Derecha
        setDireccion(1);
      } else { //izquierda
        setDireccion(-1);
      }
      return x;
    });
    setMovimientoY((oldMovimientoY) =>  {

      return y;
    });
  }



  return (
    <PezStyle movimientoX={movimientoX} movimientoY={movimientoY} direccion={direccion} velocidad={props.velocidad} >
      <Imagen name={props.type} src={props.src} alt="pez" direccion={direccion}/>
    </PezStyle>
  );
}

export default Pez;