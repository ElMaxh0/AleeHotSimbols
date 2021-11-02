import React from "react"
import { render } from "react-dom"
import { WhatGo } from "../Go/go";
import { UserLicense } from "../userTerms/userterms"
export function donate(){
    render(
        <div className="alldataHome bgimage bg3">
        <div className="containerData">
            <h1>Pagina de Doaçoes </h1>
            <h2>Chave Para Doaçoes </h2>
            <p>ac367d51-7fb4-4452-ab5f-cde47ea2a79b</p>
            <p>Obrigado pelo seu interesse em auxiliar o projeto </p>
        </div>
        <div className="containerData">
        <div className={"advertencia"}>
        </div>
        <button align="center" onClick={()=> WhatGo()} className={"bt btred"}> Voltar</button>
        </div>
        </div>

    , document.getElementById("Container"))
};

function picpay(){
    window.open('https://app.picpay.com/user/alexandre.scherer2')
}
function pix(){
    window.open('');
}