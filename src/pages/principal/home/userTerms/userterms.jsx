import React from "react"
import { render } from "react-dom"
import { ReactDOM } from "react"
import { WhatGo } from "../Go/go"
export function UserLicense (){
    render(
        <div>
            <div className="alldataHome bgimage bg5">
            <div className="containerData scrolling">
                <h1>Termos De Uso</h1>
                <h3>1. Termos</h3>
                <p>
                Ao acessar ao site Vizualize Mais , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
                <h3>2. Uso de Licença</h3>
                <p>
                É concedida permissão para acessar temporariamente uma cópia dos materiais (informações ou software) no site Vizualize Mais , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
usar os materiais ou serviço  para qualquer finalidade comercial ou para exibição pública (comercial);
tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Vizualize Mais ;
remover quaisquer direitos autorais ou outras notações de propriedade dos materiais ou autores ; ou
transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Vizualize Mais a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>
                <h3>3. Isenção de responsabilidade</h3>
                <p>
A prestação de serviço no site da Vizualize Mais são fornecidos 'como estão' a todos o usuarios para uso sendo assim Vizualize Mais não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
Além disso, o Vizualize Mais não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>
                <h3>4.Links</h3>
                <p>
                O Vizualize Mais não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Vizualize Mais do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>
                <h3>5. Resonsabilidade de Material </h3>
                <p>
                    Para realização do serviço o Vizualize Mais armazena uma copia das obras em servidores , desta forma ao confirmar o upload da mesma voce cede os direitos de armazenar e expor o material uploadado 
                </p>
                <h3>6. Dados Guardados </h3>
                <p>
               O projeto visualize mais armazena junto do  conteudo apenas os  dados de conexão (endereços ip , etc ), para em caso de praticas criminais na plataforma ser possivel detectar a horigem e entregar as autoridades </p>
               Ao usar o serviço voce esta automaticamente concordando com estes termos 
            </div>
            <button align="center" onClick={()=>WhatGo()} className={"bt btazul termsbutton"}> Concordo Com Os Termos  </button>
            </div>
        </div>

    , document.getElementById("Container"))
};