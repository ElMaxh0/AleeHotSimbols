import React from "react"
import { render } from "react-dom"
import { donate } from "../donate/donate";
import { UserLicense } from "../userTerms/userterms"
export function WhatGo(){
    render(
        <div className="alldataHome bgimage bg4">
        <div className="containerData">
            <h1>Bem Vindo Ao Projeto  </h1>
            <h2> O que voce deseja fazer ? </h2>
            <button align="center" onClick={()=> upload()} className={"bt btazul"}> Fazer o Upload de Minhas Obras</button>
            <br/>
            <button align="center" onClick={()=> acessar_withcod()} className={"bt btDarkazul"}> Acessar Com Codigo de Pack </button>
            <br/>
            <button align="center" onClick={()=> donate()} className={"bt btgreen"}> Donate</button>
            <br/>
        </div>
        <div className="containerData">
        <div className={"advertencia"}>
        <h2> Advertencia </h2>
        <p>Certifiquese de ser o detentor do direito de imagem antes de upala em nosso servidor para testar os serviços , 
            Seus dados de conexão serao salvos junto do upload para em caso da ocorencia de crimes na plataforma ,com a finalidade de auxiliar na tarefa de encontrar a pessoa real por traz do upload<br />
            Para realização do serviço o Vizualize Mais armazena uma copia das obras em servidores , desta forma ao confirmar o upload da mesma voce cede os direitos de armazenar e expor o material uploadado 
        <br/>
        </p>
        </div>
        </div>
        </div>

    , document.getElementById("Container"))
};

function upload(){
    window.open('./upload');
}
function acessar_withcod(){
    window.open('./service');
}