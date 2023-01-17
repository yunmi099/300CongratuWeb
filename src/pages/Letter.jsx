import React from 'react';
import Login from '../components/login';
import { useRecoilState } from 'recoil';
import password from "../recoil/password";
import LetterInner from '../components/letterInner';
import styled from 'styled-components';
const Inner = ()=>{
return(<StyledFont>{LetterInner.letter}</StyledFont>);
}

const Letter = () => {
  const [Password, setPassword] = useRecoilState(password);
  return (
<div>
  {Password ? <Inner/> : <Login/>}
</div>


  )
}
const StyledFont = styled.div`
  font-size: 15px;
  background-color: white;
  padding:15px;
  margin:15px;
  border-radius:10px;
  text-decoration : underline;
  text-decoration-style: wavy;
  text-decoration-color: grey;
  line-height: 1.7em; 
  text-underline-offset:5px;
  
`
export default Letter;