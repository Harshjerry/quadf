import styled from 'styled-components';



const Container=styled.div`
display:flex;
width:100%;
height:60px;
justify-content:center;
align-items:center;
text-align:center;
`;
const Tagline=styled.h2`color:#828388;    font-family: Oswald,sans-serif;`;

function Announcement1() {
  return (
    <Container>
    <Tagline>Best Price To Trade</Tagline>
    </Container>
  );
}

export default Announcement1;
