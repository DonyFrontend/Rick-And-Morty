import cl from './Header.module.css';
import image from './images/logo.svg';
import CustomLink from './CustomLink';
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);

    function showMenu(e) {
        e = menu;
        setMenu(!e);
    }

    return(
        <header>
            <div className={cl.header__photo}>
                <img src={image} alt="Error!" />
            </div>
            <div className={cl.header__navBar}>
                <CustomLink to="/">Charaters</CustomLink>
                <CustomLink to="/location">Location</CustomLink>
                <CustomLink to="/episodes">Episodes</CustomLink>
            </div>

            <div className={cl.burger__menu} onClick={showMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {menu && <div className={cl.burger__menu_nav}>
                <CustomLink to="/">Charaters</CustomLink>
                <CustomLink to="/location">Location</CustomLink>
                <CustomLink to="/episodes">Episodes</CustomLink>

                <button onClick={showMenu}>Hide</button>
            </div> }

            
        </header>
    )
}

export default Header;