
import styled from "styled-components";
import React from "react";
import {mobile } from "./../responsive";


const Container=styled.div`
display:flex;
width:100%;
height:100px;
justify-content:center;
align-items:center;
gap:20px;
    font-family: Oswald,sans-serif;
    ${mobile({ gap:10,width:'90%'})}
`;

const StatusBox=styled.div`flex:1;
display:flex;
height:100%;
justify-content:center;
align-items:center;
text-align:center;
`;

const StatusHead=styled.h1`
color:white;
font-size:70px;
  ${mobile({ fontSize:23,})}
`;
const StatusSidesBox=styled.div`display:flex;
flex-direction:column;
flex:1;
height:100%;
justify-content:center;
align-items:center;
${mobile({ height:'70%',})}
`;

const Column=styled.div`display:flex;
flex:1;
text-align:center;

`;

const ColumnHead=styled.h1`
color:#3DC5C1;
margin-bottom:0;
  ${mobile({ fontSize:14,})}`;

const ColumnTime=styled.p`
color:#828288;
${mobile({ fontSize:14,})}`;

function Status() {
  return (
    <Container>
                <StatusBox>
                                          <StatusSidesBox>
                                                    <Column> < ColumnHead>0.8%</ColumnHead>      </Column>
                                                 <Column> <ColumnTime> 5 mins</ColumnTime> </Column>
                                          </StatusSidesBox>

                                          <StatusSidesBox>
                                                    <Column> < ColumnHead>0.99%</ColumnHead>      </Column>
                                                 <Column> <ColumnTime> 1 Hour</ColumnTime> </Column>
                                          </StatusSidesBox>
                   </StatusBox>

      <StatusBox> <StatusHead>₹36,19,926 </StatusHead> </StatusBox>

      <StatusBox>
                                <StatusSidesBox>
                                          <Column> < ColumnHead>7.76%</ColumnHead>      </Column>
                                       <Column> <ColumnTime> 1 day</ColumnTime> </Column>
                                </StatusSidesBox>

                                <StatusSidesBox>
                                          <Column> < ColumnHead>17.66%</ColumnHead>      </Column>
                                       <Column> <ColumnTime> 7 days</ColumnTime> </Column>
                                </StatusSidesBox>
         </StatusBox>
    </Container>
  );
}

export default Status;
