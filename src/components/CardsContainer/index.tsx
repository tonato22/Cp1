import React from "react"
import "./CardsContainer.css"
import Card from "../Card"

const CardsContainer:React.FC = () => {
    return(
        <main className="cardsContainer">
            <div className="enredo">
                <div>
                    <img src="/assets/arrow-right.png" alt="seta para a direita"/>
                    <h6>ENREDO</h6>
                </div>
                <p>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
            </div>
            <div className="avaliacoes">
                <div>
                    <img src="/assets/arrow-right.png" alt="seta para a direita"/>
                    <h6>AVALIAÇÕES DE USUÁRIOS</h6>
                </div>
                <button>
                    + Avaliar
                </button>
            </div>
            <Card 
                autor="CaioHalbert" 
                data="9 de novembro de 2022" 
                titulo="What an incredible sequel!"   
            >
                <p>A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.</p>
                <p>I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.</p>
            </Card>
            <Card 
                autor="ClaudiaRayara" 
                data="14 de novembro de 2022" 
                titulo="This game took part of my soul..."       
            >
                <div className="spoilers">
                    <p>Warning: Spoilers!</p>
                    <button>
                        <img src="/assets/arrow-down.png" alt="seta para baixo"/>
                    </button>
                </div>
            </Card>
        </main>
    )
}

export default CardsContainer