import React from "react"
import "./LinksFooter.css"

const LinksFooter:React.FC = () => {
    return(
        <div className="linksFooter">
            <h4>COMPANY</h4>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Partnerships</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
    )
}

export default LinksFooter