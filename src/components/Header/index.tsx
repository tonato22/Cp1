import React from "react"
import "./Header.css"
import logo from "/assets/logo.png"
import { IoMdMenu } from "react-icons/io";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo da empresa"/>
            <div className="headerMenu">
                <button className="botaoMenu">
                    <IoMdMenu color="white" size={30}/>
                </button>
                <p className="botaoMenu_texto">Menu</p>
            </div>
            <input type="search" placeholder="Search"/>
            <button className="botaoLogin">Login</button>
        </header>
    )
}

export default Header