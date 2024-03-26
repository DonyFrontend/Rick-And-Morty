import { useEffect, useState } from "react";
import cl from "./DefinePerson.module.css";
import {Link, useParams} from "react-router-dom";
import image from "./PersonImages/backButton.svg";


const DefinePerson = () => {

    const params = useParams();
    const [person, setPerson] = useState([]);

    console.log(person, params);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then(res => res.json())
        .then(data => setPerson(data));
    }, []) 

    return(
        <div className={cl.width}>
            <div className={cl.person}>
                <div className={cl.person__backButtton}>
                    <Link to="/">
                        <img src={image} alt="Error!" />
                        Go to back
                    </Link>
                </div>

                <div className={cl.person__profile}>
                        <img src={person.image} alt="Err!" />
                        <h1>{person.name}</h1>
                </div>

                {/* <div className={cl.person__info}>
                    <h4>Informations</h4>
                    <div className={cl.person__info_item}>
                        <h3>Status</h3>
                        <p>{person.status}</p>
                    </div>

                    <div className={cl.person__info_item}>
                        <h3>Species</h3>
                        <p>{person.species}</p>
                    </div>
                    <div className={cl.person__info_item}>
                        <h3>Gender</h3>
                        <p>{person.gender}</p>
                    </div>
                </div> */}

                <div style={{marginTop: 90}} className={cl.person__description}>
                    <div className={cl.description_information}>
                        <h2>Informations</h2>

                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Gender</h3>
                                {person.gender}
                            </div>
                        </div>
                        
                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Status</h3>
                                {person.status}
                            </div>
                        </div>

                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Specie</h3>
                                {person.species}
                            </div>
                        </div>

                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Origin</h3>
                                {person.origin?.name}
                            </div>
                        </div>

                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Type</h3>
                                {person.type}
                            </div>
                        </div>

                        <div className={cl.description_information_text}>
                            <div className={cl.description_information_item}>
                                <h3>Location</h3>
                                {person.location?.name}
                            </div>
                        </div>
                    </div>
                    <div className={cl.description_episodes}></div>
                </div>
            </div>
        </div>
    )
}

export default DefinePerson;