import React, { useCallback, useRef, useState } from "react";
import styled from 'styled-components';
import Webcam from "react-webcam";
const Photo= () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const capture = useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);
  return (
<div style={{display:'flex', alignItems:"center", justifyContent:'center', flexDirection:'column'}}>
    <CameraWrap>
        📷 300일 기념사진 지금 같이찍기 📸
        <div>
        ( 저장은 우클릭으로 하기 !)
        </div>
    </CameraWrap>
    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" style={{width:"70%", borderRadius:10, margin: "0px 0px 20px 0px"}}/>
    <StyledButton
          onClick={capture}
        >
          📷  찰칵!
      </StyledButton>
    {imgSrc && (
        <div>
          <img src={imgSrc}  style={{borderRadius:10}}/>
          <CameraWrap>
            2023. 01. 18. 동하 윤미 300일 기념🎉
          </CameraWrap>
        </div>
      )}
</div>

  )
}
const CameraWrap = styled.div`
  margin: 20px 20px 20px 20px;
`
const StyledButton = styled.button`
width: 120px;
height:45px;
background-color:white;
border-radius: 20px;
font-size:17px;
font-weight: 600;
margin: 0px 0px 30px 0px;


`
export default Photo;