import React from "react";
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import password from "../recoil/password";
const Login = ()=> {
    const [Password, setPassword] = useRecoilState(password);
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
          if (e.target.value === "36811138"){
            setPassword(true);
          } else {
            alert("비밀번호가 틀려서 편지를 못봐용🥲");
          }

        }
      };
    return (
    <div style={{backgroundColor:"white", margin: 30, padding:20, borderRadius:15}}> 
    <LoginWrap size = {14} color={'black'}> 암호를 입력하세요 </LoginWrap>
    <LoginWrap size = {12} color={'grey'}>힌트 : 윤미 핸드폰 비밀번호 뒤에 4자리 +<div>동하 핸드폰 비밀번호 앞에 4자리</div></LoginWrap>
    <StyledInput type="password" onKeyDown={handleOnKeyPress}/>
    </div>
   
    );
     
}
const LoginWrap = styled.div`
  margin : 12px;
  padding: 7px 11px;
  font-size : ${props=>props.size}px;
   color: ${props=>props.color};
  font-weight:600;
  `
const StyledInput = styled.input`
    padding: 8px;
    border-radius: 10px;
    border-color:pink;
    `
export default Login;
