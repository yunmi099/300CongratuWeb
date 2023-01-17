import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import home from '../../recoil/home';
import photo from '../../recoil/photo';
import album from '../../recoil/album';
import letter from '../../recoil/letter';
function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}
const Header = () => {
    const navigate = useNavigate();
    const [home_, setHome] = useRecoilState(home);
    const [photo_, setPhoto] = useRecoilState(photo);
    const [album_, setAlbum] = useRecoilState(album);
    const [letter_, setLetter] = useRecoilState(letter);
    const selectCheck = ()=>{
      if (home_ === true){
        setHome(!home_);
      } else if(photo_ === true){
        setPhoto(!photo_);
       } else if (album_ === true){
        setAlbum(!album_);
       } else if(letter_ === true)    {
        setLetter(!letter_)
       }
      }
  return (
    <Top>    
        <AnimatedComponent>❤️300일 축하해❤️</AnimatedComponent>
        <div style={{ flexDirection: 'row', display:'flex', marginTop:'20px'}}>
          <Button onClick={()=>{
            selectCheck();
            setHome(true);
            navigate('/');
          }} click={home_}>
            Home
          </Button>
          <Button onClick={()=>{selectCheck();setPhoto(true); navigate('/photo');}} click={photo_}>
            Photo
          </Button>
          <Button onClick={()=>{selectCheck();setAlbum(true); navigate('/album');}} click={album_}>
            Album
          </Button>
          <Button onClick={()=>{selectCheck();setLetter(true); navigate('/letter');}} click={letter_}>
            Letter
          </Button>
        </div>
    </Top>

  )
}
const Top = styled.div`
    background-color :#ffcdd2;
    display: flex;
    height: 20%;
    width:100%;
    align-items: center;
    justify-content: center;
    font-weight:600;
    flex-direction: column;
`
const AnimatedComponent = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
  font-size: 20px;
`
const Button = styled.div`
  margin : 12px;
  background-color : ${props=>props.click? 'white' : 'pink'};
  padding: 7px 11px;
  border-radius: 16px;
  
`
export default Header