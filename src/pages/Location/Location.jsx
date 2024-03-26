import { useEffect, useState } from "react";
import cl from "./Location.module.css";
import image from "./images/main.png";
import Select from "react-select";
import { Link } from "react-router-dom";
import { locationAPI } from "../../API/location";

const Location = ({_type, _dimension}) => {
    const [location, setLocation] = useState([]);
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);

    console.log(location);
    useEffect(() => {
        locationAPI.getAllLocation({
            type,
            dimension,
            name,
            page
        })
        .then(res => setLocation(res.data))
        .catch(err => console.error(err))

    }, [type, dimension, name, page])

    return(
        <div className={cl.width}>
            <div className={cl.location}>

                <div className={cl.location__image}>
                    <img style={{width: 400}} src={image} alt="Error!" />
                </div>

                <div className={cl.location__inputs}>
                    <input  onChange={e => setName(e.target.value)} value={name} placeholder="Filter by name..." type="text" />
                    <Select options={_type} onChange={e => setType(e.value) } placeholder="Type"/>
                    <Select options={_dimension} onChange={e => setDimension(e.value)} placeholder="Dimension"/>
                </div>
                
                <div className={cl.locations}>
                    {location?.error ? <h1>Not found</h1> : location.results?.map((item, index) => 
                        <div className={cl.locations__item} key={index}>
                            <Link to={`/Location/${item.id}`}>
                                <h1>{item.name}</h1>
                                <p>{item.type}</p>
                            </Link>
                        </div>
                    )}
                </div>

                <div className={cl.location__buttons}>
                    <button style={{color: page == 1 ? "black" : "white"}} onClick={() => {if (page == 1) {} else setPage(page - 1)}}>Preview</button>
                    <button style={{color: page == location?.info?.pages ? "black" : "white"}} onClick={() => {if (page == location?.info?.pages) {} else setPage(page + 1)}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Location;