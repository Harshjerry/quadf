import styled from 'styled-components';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TelegramIcon from '@mui/icons-material/Telegram';
import React, { useState, useEffect } from 'react';
import {mobile } from "./../responsive";

const Container=styled.div`
display:flex;
width:100%;
height:100px;
color:white;
gap:50px;
font-family: Oswald,sans-serif;
${mobile({ flexDirection: 'column', gap:20,height:200,width:"95%"})}
`;
const NavLeft=styled.div`flex:1;
display:flex;
align-items:center;
position:relative;
${mobile({
   textAlign: 'center',
 })}
`;
const NavMid=styled.div`flex:1;
display:flex;
gap:20px;
justify-content:center;
align-items:center;
${mobile({  gap:5 })}
`;


const NavRight=styled.div`flex:1;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
gap:20px;`;

const Logo=styled.h1`color:#3DC5C1;
 ${mobile({ fontSize: "28px",marginLeft:60, })}
padding-left:40px;
    font-family: Oswald,sans-serif;
    font-size:50px;
    line-height: 1.5;
     letter-spacing: 2px;
    font-weight: normal;`;


const Midbox=styled.div`background-color:#2F3241;
display:flex;
border-radius:10px;
width:80px;
height:40px;
justify-content:center;
align-items:center;
text-align:center;
cursor:pointer;
 ${mobile({ width:50, })}
`;
const MidboxText=styled.p`font-size:13px;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
${mobile({ fontSize:10})}`

const RightBox=styled.div`flex:1;position:relative;`;
const RightMid=styled.div`flex:2;background-color:#3DC5C1;
display:flex;
justify-content:center;
align-items:center;
height:40px;
border-radius:10px;
color:white;
text-align: center;`;

const TextContainer=styled.p`color:white;
font-size:14px;
justify-content:center;
align-items:center;
text-align:center;
font-family: Oswald,sans-serif;`;

const IconContainer=styled.div`height:100%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:50px;`;

const Select=styled.select``;
const Label = styled.label`
  color: white;
  font-size: 14px;
  margin-right: 10px; /* Adjust margin as needed */
`;

const Counter=styled.div`
border:3px solid #3DC5C1;
border-radius:50%;
height:40px;
width:40px;
position:relative;
margin-left:50px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`;
function Navbar() {

  const [counterValue, setCounterValue] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounterValue((prevValue) => (prevValue === 0 ? 59 : prevValue - 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [showOptions, setShowOptions] = useState(false);

   const handleMidboxClick = () => {
     setShowOptions(true);
   };

  return (
    <Container>
    <NavLeft> <Logo>HODLINFO</Logo> </NavLeft>
                                  <NavMid>  <Midbox><MidboxText> INR <IconContainer> </IconContainer>
           </MidboxText></Midbox>

           <Midbox onClick={handleMidboxClick}>
                     <MidboxText>    BTC
                        <IconContainer> <ArrowDropDownIcon /> </IconContainer>

                     </MidboxText>

                   </Midbox>

                                       <Midbox><MidboxText> BUY BTC </MidboxText></Midbox>

                                </NavMid>
    <NavRight>
        <RightBox><Counter>{counterValue}</Counter></RightBox>
        <RightMid> <IconContainer> <TelegramIcon/></IconContainer>  <TextContainer> Connect Telegram</TextContainer> </RightMid>
        <RightBox> <IconContainer>   <ToggleOnIcon   sx={{color:"#3DC5C1",fontSize:"60px"}}/> </IconContainer>     </RightBox>
    </NavRight>


    </Container>
  );
}

export default Navbar;
