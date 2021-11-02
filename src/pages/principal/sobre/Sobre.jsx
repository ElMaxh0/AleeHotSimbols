import React from "react"
import { render } from "react-dom"
import { WhatGo } from "../home/Go/go"
import { UserLicense } from "../home/userTerms/userterms"
function About (){
    render(
        <div className="alldataHome bgimage bg3">
        <div className="containerData">
            <h1>Sobre o projeto  </h1>
            <h2> Dada a Ideia </h2>
            <br />
            <p> Este projeto foi inspirado em um conteudo passado a mim durante as aulas de artes sobre perspectiva e imersao sobre os desenhos , ao qual é o foco do projeto lhe proporcionar um melhor aproveitamento sobre suas autorias visuais assim lhe proporcionando uma experiencia visual  com diversos pontos de vista apartir de suas obras digitais e seu intercalamanto de maneira logica 
            </p>
            <br />
            <p>Atualmente este projeto é feito de estudante para estudante , isto é feito expecialmente para tal finalidade </p>
            <button align="center" onClick={() => UserLicense()} className={"bt btazul"}> Acessar o Projeto  </button>
        </div>
        
        </div>

    , document.getElementById("Container"))
};
export {
    About,
}