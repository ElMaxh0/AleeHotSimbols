import React from "react"
import { render } from "react-dom"
import { Button } from "./styles"
import { WhatGo } from "./Go/go"
import './home.css';
import { UserLicense } from "./userTerms/userterms";
import { donate } from "./donate/donate";
function Home (){
    render(
        <div className="alldataHome bgimage bg1">
<div className={"containerData "}>
  <h1 className={"center"}>iImersive </h1>
  <div class="description2">
      Lhe monstrando novas formas de ver suas obras 
  </div>
  <div class="description">
    Esta Plataforma tem como objetivo proporcionar uma nova experiencia visual  com diversos pontos de vista apartir de suas obras digitais 
  </div>

  <div className={"advertencia"}>
      <h2> Advertencia </h2>
      <p>Certifiquese de ser o detentor do direito de imagem antes de upala em nosso servidor para testar os serviços , 
          Seus dados de conexão serao salvos junto do upload para em caso da ocorencia de crimes na plataforma ,com a finalidade de auxiliar na tarefa de encontrar a pessoa real por traz do upload 
          <br/>

        <br/>
      </p>
      <button align="center" onClick={()=> UserLicense()} className={"bt btazul"}> Acessar O Projeto  </button><p> </p><button align="center" onClick={()=> donate()} className={"bt btgreen"}> Doar</button>
</div>    
</div>
</div>

    , document.getElementById("Container"))
};
export {
    Home,
}
function byebye(){
    return(
        <div>
            <h1>Updates</h1>
            <h3>Ate Mais </h3>
            <p> 11/08/2021</p>
            <h4> Esta versao beta 0.18 mais recente e provavelmente será o último lançamento do meu projeto ...
Durante os ultimos meses o acesso ao serviço vem diminuido dia a dia e atualmente esta proximo de zero .Isto, infelizmente, indica que o projeto está oficialmente morto .Desta maneira nesta data (10/08/2021) declaro que irei dar um tempo a ele , ate as coisas se alinharem ou encontrar uma utilidade rentavel do projeto , Os serviços continuarao sendo prestados pela 000webhost ate algo acontecer.
O objetivo do projeto e proporcionar novos pontos de vista sobre suas imagens e autorias graficas !
Obrigado a todos que contribuíram de alguma forma durante este tempo</h4>
        </div>
    )
}