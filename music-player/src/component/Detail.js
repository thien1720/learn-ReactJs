import React, { useContext } from "react";
import { Songs } from "../Context";
function Detail() {
    const { song } = useContext(Songs)
    
    return <div className="col-4 name-play-music">
        <h2 className="cyan">{song.name}</h2>
        <h2 className="neutral">{song.author}</h2>
        <div className="banner-author">
            <img src={song.links.images[0].url}
                alt={song}
            />
        </div>

    </div>
}

export default Detail