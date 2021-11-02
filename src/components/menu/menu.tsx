import { home } from '../..'
import { quemsou } from '../../pages/principal/quemsou/sobre'
import { bot } from '../chat'
import './assents/menu.css'
export function Menu (){
    return (
        <nav id="menu-h">
        <div id="imagem">
            <h1>AleHot Symbols  &copy;</h1>
            </div>
        <ul>
            <li>
            </li>

            <li><a onClick={() => home()}>Projeto </a></li>
            <li><a >Quem Somos{() => quemsou()}</a></li>
            <li><a onClick={() => bot()}>Bot Dos Simbolos </a></li>
            <li><a>Entrar</a></li>
        </ul>
    </nav>
    )
}