import { useEffect, useState } from "react";
import cl from "./DefineEpisode.module.css";
import { Link, useParams } from "react-router-dom";
import image from "./EpisodeImages/backButton.svg";

const DefineEpisode = () => {
    const params = useParams();
    const [episode, setEpisode] = useState([]);
    console.log(episode);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
        .then(res => res.json())
        .then(data => setEpisode(data))
    }, [])
    

    return(
        <div className={cl.width}>
            
            <div className={cl.episode}>
                <div className={cl.episode__backButton}>
                    <Link to={"/episodes"}>
                        <img src={image} alt="Error!" />    
                        Go to back
                    </Link>
                </div>

                <div className={cl.episode__info}>
                    <h1>{episode.name}</h1>

                    <div className={cl.info__items}>
                        <div className={cl.episode__info_item}>
                            <h3>Episode</h3>
                            <p>{episode.episode}</p>
                        </div>

                        <div className={cl.episode__info_item}>
                            <h3>Date</h3>
                            <p>{episode.air_date}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DefineEpisode;