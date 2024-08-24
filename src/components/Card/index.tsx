import React, { ReactNode } from "react"
import Avaliar from "../Avaliar"
import "./Card.css"
import LikeDislike from "../LikeDislike"

type CardProps = {
    autor:string,
    data:string,
    titulo:string,
    children:ReactNode
}

const Card:React.FC<CardProps> = ({ autor, data, titulo, children}) => {
    return(
        <div className="card">
            <div className="card_destaque">
                <h2>AVALIAÇÃO EM DESTAQUE</h2>
                <Avaliar nota={10}/>
            </div>
            <div className="card_autor">
                <h6>{autor}</h6>
                <p>{data}</p>
            </div>
            <h2>{titulo}</h2>
            {children}
            <LikeDislike/>
        </div>
    )
}

export default Card