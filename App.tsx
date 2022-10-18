import { createGlobalStyle } from 'styled-components';
import React, { useState, useEffect } from "react";
//import QRCode from "qrcode.react";
import * as KlipAPI from "./klip_test.js";
import {
  Alert,
  //Container,
  } from "react-bootstrap";

//QR코드와 지갑 주소를 초기화
//const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x00000000000000000000000000000";
const DEFAULT_RESULT = "DEFAULT";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  text-decoration:none;
  color: inherit;
}

`;

function App() {

  /*const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);*/
  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
  
  
  //지갑 연동하는 함수 실행
  const getUserData = () => {
    KlipAPI.getAddress(//setQrvalue_auth, 
      async (address : string) => {
      setMyAddress(address);	//사용자의 지갑 주소를 가져온다
    });
    
  };
  
  return (
        <button onClick={getUserData}>버미와 수리 만나러 가기</button>
        
  )
    
  }
  
  export default App;
