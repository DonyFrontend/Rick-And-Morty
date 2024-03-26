import { useEffect, useState } from "react";
import cl from "./Episodes.module.css";
import image from "./images/main.png";
import { Link } from "react-router-dom";
import { episodesAPI } from "../../API/episodes";

const Episodes = () => {
    const [episodes, setEpisodes] = useState();
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);


    console.log(episodes);

    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/episode/?episode=${name}&page=${page}`)
        // .then(res => res.json())
        // .then(data => setEpisodes(data))
        episodesAPI.getAllEpisodes({episode: `${name}`, page: `${page}`})
        .then(res => setEpisodes(res.data))
        .catch(err => console.error(err))
    }, [name, page])  

    


    return(
        <div className={cl.width}>
            <img src={image} alt="Error!" />

            <div className={cl.input}>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Search, ex: S01 or S01E02" />
            </div>

            <div className={cl.episodes}>
                { episodes?.results.map((item, index) => <div className={cl.episodes__item} key={index}>
                    <Link style={{textDecoration: "none"}} to={`/episodes/${item.id}`} key={index}>
                        <h1>{item.name}</h1>
                        <p>{item.air_date}</p>
                        <h4>{item.episode}</h4>
                    </Link>
                </div>)}
            </div>


            <div className={cl.charaters__button}>
                    <button onClick={() => {if (page != 1) setPage(page - 1)}} style={{color: page == 1 ? "black" : "white"}}>Preview</button>
                    <button style={{color: page == episodes?.info?.pages ? "black" : "white"}} onClick={() => {if (page != episodes?.info?.pages)  setPage(page + 1)}} >Next</button>
            </div>
        </div>
    )
}

export default Episodes;