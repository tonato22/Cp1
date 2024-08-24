import React from "react"
import "./Banner.css"
import Avaliar from "../Avaliar"

const Banner:React.FC = () => {
    return(
        <section className="banner">
            <div className="textos">
                <h3>God of War: Ragnarök</h3>
                <div className="banner_avaliacoes">
                    <div className="banner-avaliar">
                        <h5>Avaliação da Ratings</h5>
                        <Avaliar nota={9.6}/>
                    </div>
                    <div className="banner-avaliar">
                        <h5>Sua avaliação</h5>
                        <div className="avaliacao">
                            <button>
                                <img src="/assets/star.svg" alt="estrela"/>
                            </button>
                            <p>Avaliar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imagens">
                <img className="img1" src="/assets/banner-img1.png" alt="imagem Gof of War Ragnarok"/>
                <img className="img2" src="/assets/banner-img2.png" alt="imagem Gof of War Ragnarok"/>
            </div>
        </section>
    )
}

export default Banner