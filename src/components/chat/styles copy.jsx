import styled from "styled-components";

export const ChatbotBoxLEFT = styled.div `
top:10%;
background: rgb(241 232 232);
position: absolute;
align-content: center;
justify-content: center;
width: 44vh;
height: 100vh;
@media only screen and (hover: none) and (pointer: coarse){
    position: absolute;
    align-content: center;
    justify-content: center;
    width:90vw;
    left: 4vw;
    color: aliceblue;
    
    
  }
`
export const ChatbotBoxSpace = styled.div `
background: rgba(69, 68, 183 , 29%);
top:10%;
position: relative;
align-content: center;
justify-content: center;
width: 54vh;
right:0px;
display: block;

@media only screen and (hover: none) and (pointer: coarse){
    position: absolute;
    align-content: center;
    justify-content: center;
    width:100vw;
    color: aliceblue;
    
    
  }
`


export const BoxChat = styled.div`

  width: 100%;
  left: 0.8vw;
  color: aliceblue;
  border-radius: 5%;
  
`
export const Recebida = styled.div `
width:100%;
margin-top: 5%;
float:left;
right :0px;
margin-left: 25%;
`
export const Enviada = styled.div `
width:100%;
margin-top: 5%;
float:left;
right :0px;
margin-left: 1%;
`
  export const ColorizeBoxRecebida= styled.div `
  position:relative;
  background: rgba(76, 95, 145, 0.2);
  border-top-right-radius: 5%;
  border-top-left-radius: 5%;
  border-start-end-radius: 5%;
  border-end-start-radius: 5%;
  border-end-end-radius: 5%;
  height: 20%;
  width:60%;
  padding: 5%;
  right:0px;
  margin-top: 1%;
  border-radius: ;
  `
  export const ColorizeBoxRecebida2= styled.div `
  background: rgba(76, 150, 145, 0.9);
  border-top-right-radius: 5%;
  border-top-left-radius: 5%;
  border-start-end-radius: 5%;
  border-end-start-radius: 5%;
  border-end-end-radius: 5%;
  height: 50%;
  width:75%;
  padding: 1%;
  margin-top: 5%;
  border-radius: 5%;
  border: 15%;
  `
  const MsgBot = styled.div
  `
  border-top-right-radius: 5%;
  border-top-left-radius: 5%;
  border-start-end-radius: 5%;
  border-end-start-radius: 5%;
  border-end-end-radius: 5%;
  background-color: rgba(54,55,255, 85%);
  vertical-align: text-top;
  display: inline-block;
  position: relative;
  line-height: 20px;
  max-width: 160px;
  color: #FFFFFF;
  padding: 10px;
  `
  const BotContainer = styled.div
  `
  overflow-y: scroll;
  display:block
  `
  const MsgUser = styled.div `
  border-top-right-radius: 20%;
  border-top-left-radius: 20%;
  border-start-end-radius: 20%;
  border-end-start-radius: 20%;
  border-end-end-radius: 10%;
  background-color: #d3a2c7;
  vertical-align: text-top;
  display: inline-block;
  position: relative;
  line-height: 20px;
  max-width: 160px;
  color: #FFFFFF;
  padding: 10px;`
  export {
    MsgBot,
    BotContainer,
    MsgUser,
  }