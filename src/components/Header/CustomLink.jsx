import { Children } from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({to, children, ...props}) => {
    const match = useMatch(to);

    return(
        <Link to={to} {...props} style={{color: match ? "blue" : "black", fontSize: 18, fontWeight: 700}}>
            {children}
        </Link>
    )
}

export default CustomLink;