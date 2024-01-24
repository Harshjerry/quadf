import styled from 'styled-components';

import {mobile } from "./../responsive";


const Container=styled.div`
display:flex;
width:100%;
height:50px;
justify-content:center;
align-items:center;
text-align:center;
`;
const Tagline=styled.p`
color:#828388;
${mobile({ fontSize:12,})}
 font-family: Oswald,sans-serif;`;

function Announcement2() {
  return (
    <Container>
    <Tagline>Average BTC/INR net price including commission</Tagline>
    </Container>
  );
}

export default Announcement2;
