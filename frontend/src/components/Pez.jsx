import styled from "styled-components";
import {useState, useEffect} from "react";


const PezStyle = styled.div`
  position: absolute;
  z-index: 1000;
  transform: translateX(${props => props.movimiento+"px" || 0});
  transition: 5s ease;

  img {
    width: 9vw;
    height: 9vh;
  }
`;

function Pez(props) {

  const [movimiento, setMovimiento] = useState(0);

  useEffect( () => {
    const interval = setInterval( () => {
      setMovimiento((oldMovimiento) => oldMovimiento + 500);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <PezStyle movimiento={movimiento} >
      <img name={props.type} src={props.src} alt="pez"/>
    </PezStyle>
  );
}

export default Pez;