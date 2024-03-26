import { Link, useParams } from "react-router-dom";
import cl from "./DefineLocation.module.css";
import { useEffect, useState } from "react";
import image from "./locationImages/backButton.svg";


const DefineLocation = () => {
    const params = useParams();
    const [location, setLocation] = useState([]);
    console.log(location);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
        .then(res => res.json())
        .then(data => setLocation(data));
    }, [])


    return(
        <div className={cl.width}>
            <div className={cl.location}>
                <div className={cl.backButton}>
                    <Link to={"/Location"}>
                        <img src={image} alt="Error!"/>
                        Go to back
                    </Link>
                </div>

                <div className={cl.location__info}>
                    <h1>{location.name}</h1>

                    <div className={cl.location__info_items}>
                        <div className={cl.info__item}>
                            <h3>Type</h3>
                            <p>{location?.type}</p>
                        </div>
                        <div className={cl.info__item}>
                            <h3>Dimension</h3>
                            <p>{location?.dimension}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default DefineLocation;