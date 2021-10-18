import React from "react";
import "./Login.css";
import Imagem from "./login.png";


export default function Login() {
    return (
        
        <>
        <form id="formulario">
            <img src={Imagem} />
            <h1>Member Login</h1>
            <div id="email">
                <input type="text" id="email" placeholder="Email"></input>
            </div>
            <div id="password">
                <input type="password" id="senha" placeholder="Password"></input>
            </div>
            <button id="botao">LOGIN</button>
            <p id="esqueceu">Forgot your password? <a target="_blank" href="#">Click here</a></p>

            <p id="footer">Developed by - Henrique Fernandes</p>
        </form>
        </>

    )
}
