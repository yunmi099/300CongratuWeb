import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import imageList from '../assets/images/image';
const Album = () => {
  const [count, setCount]= useState(1);
  useEffect(()=>{    
  setTimeout(()=>{
    if(count<27){
      setCount(count+1);
    } else {
    }
  }, 2000)})
// console.log(imageList)
  return (
<div>

    <StyledImage src={require(`../assets/images/${count}.jpeg`)} width='80%'/>
    <div style={{fontWeight:'600', fontSize:18}}>😘 {imageList[count-1].name } 😘</div>
</div>

  );
}
const StyledImage = styled.img`
  border-radius : 20px;
  margin: 30px 30px 30px 30px
  
`
export default Album;