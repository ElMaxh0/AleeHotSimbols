import '../../../css/global.css'
import React from "react"
import { render } from "react-dom"
function quemsou (){
    render(
        <div className="alldataHome bgimage bg2">
        <div className="containerData">
            <h1>Quem Sou Eu </h1>
            <h2>AleHot ¯\_( ͡° ͜ʖ ͡°)_/¯</h2>
            <br/>
            <br/>
            <p> Ola sou um jovem que possui 18 anos na epoca de lançamento desta versao , desde mais novo fui guiado por desafios e pela ideia de aprendisagem continua , em virtude disto consgui elaborar  est projeto .
                Atualmente uso programação como um hobbie devido a nao estar situado de maneira integral no mercado ainda.
            </p>
            <br/>
            <br/>
        </div>
        </div>

    , document.getElementById("Container"))
};
export {
    quemsou,
}