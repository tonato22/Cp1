import React, { useState } from "react"
import "./LikeDislike.css"


const LikeDislike:React.FC = () => {

    const [likes, setLikes] = useState<number>(0)
    const [dislikes, setDislikes] = useState<number>(0)

    return(
        <div className="likeDislike">
            <div className="likeDislike_content">
                <span>
                    <button onClick={() => setLikes(likes => likes + 1)}>
                        <img src="/assets/like.png"/>
                    </button>
                    <p>{likes}</p>
                </span>
                <span>
                    <button onClick={() => setDislikes(dislikes => dislikes + 1)}>
                        <img src="/assets/dislike.png"/>
                    </button>
                    <p>{dislikes}</p>
                </span>
            </div>
            <button>
                <img src="/assets/options-icon.png"/>
            </button>
        </div>
    )
}

export default LikeDislike