import React from "react"
import logo from "/assets/logo.png"
import "./Footer.css"
import LinksFooter from "../LinksFooter"

const Footer: React.FC = () => {
    return(
        <footer className="footer">
            <img src={logo} alt="logo da empresa"/>
            <div className="links">
                <LinksFooter/> 
                <LinksFooter/>
                <LinksFooter/>  
            </div>        
        </footer>
    )
}

export default Footer