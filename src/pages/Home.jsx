import React from 'react';
import useTimer from '../components/timer';
import styled from 'styled-components';

const Home = () => {
  const Dday = useTimer();

  return (

<div style={{border:'solid 2px' ,margin:'20px', borderRadius:25, borderColor:'white'}}>
  <StyledTimer size ={18}>
  🌸 데이트까지 남은 시간 🌸
  </StyledTimer>
  <StyledTimer size = {16} style={{backgroundColor:'pink', borderRadius:15}}> 
{Dday.day}일 {Dday.hours}시간 {Dday.minutes}분 {Dday.seconds}초
  </StyledTimer>
  <video width='300' height='280' controls="controls" style={{margin:"20px 20px 50px 20px", borderRadius:12}}>
    <source src={require("../assets/videos/1.mp4")} type="video/mp4"/>
  </video>
</div>


  );
}
const StyledTimer = styled.div`
  margin : 12px;
  padding: 7px 11px;
  font-size : ${props=>props.size}px;
  font-weight:600;
  
`
export default Home;