import { useState, useEffect } from "react";
import cl from "./MainPage.module.css";
import  Select  from 'react-select';
import { Link } from "react-router-dom";
import image from "./images/main.png";
import { characterAPI } from "../../API/characters";

const MainPage =  (props) => {
    const [data, setData] = useState();
    console.log(data);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [name, setName] = useState("");


    useEffect(() => {
            const getData = () => {

             characterAPI.getAllCharacters({
                page,
                status,
                gender,
                species,
                name 
             })
            .then(res => {console.log(res.data), setData(res.data)})
            .catch(err => console.error(err.message) )

        }
        
        getData();



    }, [page, status, gender, species, name])



    return(
        <div className={cl.width}>
            <img src={image} alt="Err!" />

            <main className={cl.charaters}>
                <div className={cl.charaters__select}>
                    <Select onChange={e => setStatus(e.value)} options={props._status} placeholder="Status"/>
                    <Select onChange={e => setGender(e.value)} options={props._gender} placeholder="Gender"/>
                    <Select onChange={e => setSpecies(e.value)} options={props._species} placeholder="Species"/>
                    <input required onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Filter by name..."/>
                </div>
                <div></div>

                <section className={cl.charaters__row}>


                    {data?.results.map((item, index) => 
                    <div className={cl.charaters__rw_item} key={index} >
                        <Link to={`/${item.id}`} >
                            <img src={item.image} alt="Err!" />
                            <div className={cl.charaters__text}>
                                <h2>{item.name}</h2>
                                <p>Gender: {item.gender}</p>
                            </div>
                        </Link>
                    </div>)}
                </section>

                <div className={cl.charaters__button}>
                    <button onClick={() => {if (page != 1) setPage(page - 1)}} style={{color: page == 1 ? "black" : "white"}}>Preview</button>
                    <button style={{color: page == data?.info?.pages ? "black" : "white"}} onClick={() => {if (page != data?.info?.pages)  setPage(page + 1)}}>Next</button>
                </div>
            </main>
        </div>
    )
}

export default MainPage;