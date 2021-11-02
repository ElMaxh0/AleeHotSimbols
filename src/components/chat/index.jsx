
import React from 'react';
import { render } from 'react-dom';
import { BotContainer, BoxChat, ChatbotBoxSpace } from './styles'
import { pergunta, teste } from './chat.jsx'
import { Menu } from '../menu/menu';
import { Copirights } from '../../pages/principal/Copirights/copirights';
function bot (){
    render(    
<div>     
  <BotContainer>
      <BoxChat id={"boxchat"}>
          <ChatbotBoxSpace id={"chatbotmaster"}>
          <div id={"newquest0"} />  
          </ChatbotBoxSpace>
      </BoxChat>
  </BotContainer>
  <Copirights/>
</div>  
, document.getElementById("Container"));
setTimeout(
    function() {
      pergunta(teste, 0);
    },
    900
);
    }
    export{
        bot,
    }