import styled from 'styled-components'
const Emoticonsspace =styled.div `
    white-space: nowrap;
    border-radius: 15px 0 0 0;
    resize: none;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    padding: 1px 0;
    line-height: 1;
    font-size: 30px !important;
    overflow: hidden;
    text-shadow: none;
    font-family: system-ui,arial;
    font-size: 52px;
    text-decoration: none;
`
const EmoticonsspaceControl =styled.div `
    margin-top:1vh;
    white-space: nowrap;
    border-radius: 15px 0 0 0;
    resize: none;
    text-align: center;
    box-sizing: border-box;
    width: 70vw;
    padding: 1px 0;
    line-height: 1;
    font-size: 30px !important;
    overflow: hidden;
    text-shadow: none;
    font-family: system-ui,arial;
    font-size: 22px;
    text-decoration: none;
`
const EmoticonBoxText=styled.p `
    white-space: nowrap;
    border-radius: 15px 0 0 0;
    resize: none;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    line-height: 1;
    font-size: 30px !important;
    overflow: hidden;
    text-shadow: none;
    font-family: system-ui,arial;
    font-size: 22px;
    text-decoration: none;
`
const EmoticonBox = styled.div `
background-color:#efefef;
color:#0f0f0f;
border-radius: 5%;
width: 100%;

`;
const SelectBoxEmoticons = styled.select `
FONT-SIZE: 20px;
cursor: pointer;
position : relative;
max-width:  20em;
font-family: system-ui,arial;
margin: 5em auto;
width: 35vw;
height:10vh;
@media only screen and (hover: none) and (pointer: coarse){

}`

export {
    Emoticonsspace,
    EmoticonBoxText,
    SelectBoxEmoticons,
    EmoticonBox,
    EmoticonsspaceControl
}