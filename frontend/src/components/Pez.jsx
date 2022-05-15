import styled from "styled-components";

const PezStyle = styled.div`
  position: absolute;
  z-index: 1000;

  img {
    width: 9vw;
    height: 9vh;
  }
`;

function Pez(props) {

  return (
    <PezStyle>
      <img name={props.type} src={props.src} alt="pez"/>
    </PezStyle>
  );
}

export default Pez;