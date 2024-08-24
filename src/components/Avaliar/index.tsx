import React from "react"
import "./Avaliar.css"

type AvaliarProps = {
    nota: number;
}

const Avaliar:React.FC<AvaliarProps> = ({ nota }) => {
    return(
        <div className="avaliar">
            <img src="/assets/star-full.svg" alt="estrela preenchida"/>
            <div className="avaliar-nota">
                <p>{nota}</p>
                <span>/10</span>
            </div>
        </div>
    )
}

export default Avaliar