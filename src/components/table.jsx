import React from 'react';
import styled from 'styled-components';
import DataTable from "react-data-table-component";
import {useEffect,useState} from "react";
import axios from "axios";
import {mobile } from "./../responsive";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Container=styled.div`
display:flex;
flex-direction:column;
width:100%;
gap:20px;
justify-content:center;
align-items:center;
text-align:center;
${mobile({ gap:10,width:"98%"})}

`;

const TableRow=styled.div`
width:95%;
height:60px;
background-color:#2f3241;
border-radius:10px;
display:flex;
gap:5px;
${mobile({marginRight:0})}
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
${mobile({marginRight:0})}
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
font-size:22px;
${mobile({ fontSize:11,})}`;

const RowDataWhite=styled.div`
color:white;
font-weight:bold;
font-family: Oswald,sans-serif;
font-size:20px;
${mobile({ fontSize:10,})}`;

const RowDataColored=styled.div`
color:#C85A5D;
font-weight:bold;
font-family: Oswald,sans-serif;
font-size:20px;
${mobile({ fontSize: 9 })}`;






const Table=()=>{
  const calculateDifference = (buy, sell) => {
     return ((sell - buy) / buy * 100).toFixed(2);
   };

   const calculateSavings = (buy, sell, volume) => {
     const difference = sell - buy;
     const savings = difference * volume;
    return savings.toFixed(2);
   };


   const[data,setdata]=useState([]);
   useEffect(()=>{
   const getData=async()=>{
     try{const res=await axios.get("http://localhost:5000/api/holinfo/");
     console.log(res);
   setdata(res.data);}catch(err){console.log(err);}
   }
   getData();
   },[])




  return(<Container>
<LabelRow>
              <RowSerial> <Labels>#</Labels> </RowSerial>
              <RowElement> <Labels>Platform</Labels>             </RowElement>
             <RowElement> <Labels>Last Traded Price </Labels> </RowElement>
             <RowMid><Labels> Buy/Sell Price </Labels> </RowMid>
            <RowElement><Labels> Difference </Labels> </RowElement>
             <RowElement><Labels> Savings </Labels> </RowElement>
</LabelRow>


{data.map((e, index) => (
        <TableRow key={e.id}>
          <RowSerial>
            <RowDataWhite>{index + 1}</RowDataWhite>
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
            <RowDataColored style={{ color: calculateDifference(e.buy, e.sell) >= 0 ? '#3DC5C1' : '#C85A5D' }}>
              {calculateDifference(e.buy, e.sell)}%
            </RowDataColored>
          </RowElement>
          <RowElement>
            <RowDataColored style={{ color: calculateSavings(e.buy, e.sell, e.volume) >= 0 ? '#3DC5C1' : '#C85A5D' }}>
            {calculateSavings(e.buy, e.sell, e.volume) > 0 ? (
               <ArrowDropUpIcon style={{ color: '#3DC5C1', marginLeft: '5px' }} />
             ) : (
               <ArrowDropDownIcon style={{ color: '#C85A5D', marginLeft: '5px' }} />
             )}
               ₹{calculateSavings(e.buy, e.sell, e.volume).toLocaleString()}

            </RowDataColored>
          </RowElement>
        </TableRow>
      ))}
    </Container>
  );
};

export default Table;
