import React from 'react';
import styled from 'styled-components';
import DataTable from "react-data-table-component";
import {useEffect,useState} from "react";
import axios from "axios";

const Container=styled.div`
display:flex;
flex-direction:column;
width:100%;
gap:20px;
justify-content:center;
align-items:center;
text-align:center;
`;

const TableRow=styled.div`
width:95%;
height:60px;
background-color:#2f3241;
border-radius:10px;
display:flex;
gap:5px;
`;

const LabelRow=styled.div`
width:95%;
height:60px;
border-radius:10px;
display:flex;
gap:5px;
justify-content:center;
text-align:center;
align-items:center;
`;

const RowElement=styled.div`
height:100%;
flex:1;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
`;
const RowMid=styled.div`
height:100%;
flex:2;
display:flex;
justify-content:center;
text-align:center;
align-items:center;`;

const RowSerial=styled.div`
height:100%;
flex:0.5;
justify-content:center;
display:flex;
text-align:center;
align-items:center`;

const Labels=styled.h2`
color:#828388;
font-weight:bold;
font-family: Oswald,sans-serif;
font-size:22px;`;

const RowDataWhite=styled.div`
color:white;
font-weight:bold;
font-family: Oswald,sans-serif;
font-size:20px;`;

const RowDataColored=styled.div`
color:#C85A5D;
font-weight:bold;
font-family: Oswald,sans-serif;
font-size:20px;`;






const Table=()=>{


  const calculateDifference = (buy, sell) => {
     return ((sell - buy) / buy * 100).toFixed(2);
   };

   const calculateSavings = (buy, sell, volume) => {
     const difference = sell - buy;
     const savings = difference * volume;
     return savings.toLocaleString();
   };


   const[data,setdata]=useState({});
   useEffect(()=>{
   const getData=async()=>{
     try{const res=await axios.get("https://quad-backend.vercel.app/api/holinfo/");
     console.log(res);
   setdata(res.data);}catch(err){console.log(err);}
   } 
   getData();
   },[])

const Data=[
  {
    id:1,
    name:'WazirX',
lastT:2572612,
buy:2572610,
sell:2572612,},

{id:2,
  name:'Bitbns',
lastT:2882906,
buy:2855164,
sell:2882157,},

{id:3,
  name:'Bitbns',
lastT:2882906,
buy:2855164,
sell:2882157,},

{id:4,
  name:'Bitbns',
lastT:2882906,
buy:2855164,
sell:2882157,}
]



  return(<Container>
<LabelRow>
              <RowSerial> <Labels>#</Labels> </RowSerial>
              <RowElement> <Labels>Platform</Labels>             </RowElement>
             <RowElement> <Labels>Last Traded Price </Labels> </RowElement>
             <RowMid><Labels> Buy/Sell Price </Labels> </RowMid>
            <RowElement><Labels> Difference </Labels> </RowElement>
             <RowElement><Labels> Savings </Labels> </RowElement>
</LabelRow>


{data.map(e => (
  <TableRow key={e.id}>
    <RowSerial>
      <RowDataWhite>1</RowDataWhite>
    </RowSerial>
    <RowElement>
      <RowDataWhite>{e.name}</RowDataWhite>
    </RowElement>
    <RowElement>
      <RowDataWhite>₹{e.lastT.toLocaleString()}</RowDataWhite>
    </RowElement>
    <RowMid>
      <RowDataWhite>₹{e.buy.toLocaleString()} / ₹{e.sell.toLocaleString()}</RowDataWhite>
    </RowMid>
    <RowElement>
      <RowDataColored>{calculateDifference(e.buy, e.sell)}%</RowDataColored>
    </RowElement>
    <RowElement>
      <RowDataColored>₹{calculateSavings(e.buy, e.sell, e.volume)}</RowDataColored>
    </RowElement>
  </TableRow>
))}


    </Container>)
}

export default Table;




  <Midbox><MidboxText>BTC  <IconContainer> <ArrowDropDownIcon /> </IconContainer> </MidboxText></Midbox>
