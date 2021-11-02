import React, { useState } from "react";
import { Map } from "typescript";
import { ReactDOM } from "react";
import { EmoticonBox, EmoticonBoxText, Emoticonsspace, SelectBoxEmoticons, EmoticonsspaceControl } from "./styles";
import { Data } from "../../data/emoticons";

function EmoticonsGen(){
    const [caracterie1, setCaracterie1]=useState("");
    const [caracterie2, setCaracterie2]=useState("");
    const [caracterie3, setCaracterie3]=useState("");
    const [caracterie4, setCaracterie4]=useState("");
    const [caracterie5, setCaracterie5]=useState("");
    const [caracterie6, setCaracterie6]=useState("");
    const [caracterie7, setCaracterie7]=useState("");
    const [caracterie8, setCaracterie8]=useState("");
    const [caracterie9, setCaracterie9]=useState("");
    const [caracterie10, setCaracterie10]=useState("");

    var emoticon="("+caracterie1+caracterie2+caracterie3+caracterie4+"ʖ"+caracterie5+caracterie6+caracterie7+caracterie8+caracterie9+")"+caracterie10

const changeEyebrow = (e:any):void =>{
    const selected:string = e.target.value;

    setCaracterie2(Data["eyeBrown"][selected]);
    setCaracterie6(Data["eyeBrown"][selected]);
}
const changeHands= (e:any):void =>{
    const selected:string = e.target.value;
    if(selected == '6'){
        setCaracterie1(Data["hand"][selected]);

    }
    else{
        setCaracterie10(Data["hand"][selected]);
        setCaracterie1(Data["hand"][selected]);        
    }

}
const changemouth= (e:any):void =>{
    const selected:string = e.target.value;
    setCaracterie4(Data["mouth"][selected]);
}
const changeEye = (e:any):void =>{
    const selected:string = e.target.value;
    setCaracterie3(Data["olhos"][selected]);
    setCaracterie7(Data["olhos"][selected]);
}
function eye() {
    var data =[];
    for (var i = 0; i < (Data["totalolhos"]); i++) {
        data.push("("+caracterie1+caracterie2+Data["olhos"][i]+caracterie4+"ʖ"+caracterie5+caracterie6+caracterie5+Data["olhos"][i]+caracterie8+caracterie9+")"+caracterie10)
    }
    return data
}
function hand() {
    var data =[];
    for (var i = 0; i < (Data["totalhand"]); i++) {
        data.push("("+Data["hand"][i]+caracterie2+caracterie3+caracterie4+"ʖ"+caracterie5+caracterie6+caracterie7+caracterie8+caracterie9+")"+Data["hand"][i])
    }
    return data
}
function eyeBrown() {
    var data =[];
    for (var i = 0; i < (Data["totaleyeBrown"]); i++) {
        data.push("("+caracterie1+Data["eyeBrown"][i]+caracterie3+caracterie4+"ʖ"+caracterie5+Data["eyeBrown"][i]+caracterie7+caracterie8+caracterie9+")"+caracterie10)
    }
    return data
}
function mouth() {
    var data =[];
    for (var i = 0; i < (Data["totalMouth"]); i++) {
        data.push("("+caracterie1+caracterie2+caracterie3+Data["mouth"][i]+"ʖ"+caracterie5+caracterie6+caracterie7+caracterie8+caracterie9+")"+caracterie10)
    }
    return data
}
let uidEye =0
let uidHand = 0
let uidMouth=0;
let BrownInfo = 0
let uidBrownInfo= 0
let EyeInfo = eye()
let HandInfo = hand()
let MouthInfo =mouth();
let eyeBrownInfo =eyeBrown()
console.log(eye())
    return(
    <div>
        <div>
            <Emoticonsspace>
                <EmoticonBox>
                    <EmoticonBoxText>
                        ${emoticon}
                    </EmoticonBoxText>
                </EmoticonBox>
            </Emoticonsspace>
        </div>
            <form>
                <EmoticonsspaceControl>
                    <SelectBoxEmoticons onChange={(e)=> {
                        changeEye(e)
                        }}>
                            <option></option>
                            {
                                EyeInfo.map(num => (
                                    <option value={uidEye++}>{num}</option>
                            ))}
                    </SelectBoxEmoticons>
                    <SelectBoxEmoticons onChange={(e)=> {
                                changeEyebrow(e)
                                    }}>
                                        <option></option>
                            {
                                eyeBrownInfo.map(num => (
                                    <option value={uidBrownInfo++} >{num}</option>
                            ))}
                    </SelectBoxEmoticons>
                </EmoticonsspaceControl>
                <br />
                <EmoticonsspaceControl>
                        <SelectBoxEmoticons onChange={(e)=> {
                                    changeHands(e)
                                    }}>
                                    <option></option>
                                                        {
                                HandInfo.map(num => (
                                    <option value={uidHand++} >{num}</option>
                            ))}
                    </SelectBoxEmoticons>

                    <SelectBoxEmoticons onChange={(e)=> {
                                changemouth(e)
                                    }}>
                                        
                                        <option></option>
                                                        {
                                MouthInfo.map(num => (
                                    <option value={uidMouth++} >{num}</option>
                            ))}
                    </SelectBoxEmoticons>
                </EmoticonsspaceControl>
            </form>
        </div>

        
        
    )
}
export default EmoticonsGen
