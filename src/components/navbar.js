import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'


function Navbar() {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
    setIsActive(!isActive)
  }

    return (
        <div className='navbar'>
            <div className="navbar-inner">      
        {isTabletOrMobile && <img className="burger-menu" onClick={handleToggle} src={isActive ? "close.png" : "menu.png"}/>}
        <ul className={`menu ${isActive ? "menu-open" : ""}`}>
        <li><Link to="/">HOME</Link></li>
            <li><Link to="/immagini" onClick={handleToggle}>Immagini</Link></li>
            <li><Link to="/cerca-immagini" onClick={handleToggle}>Cerca immagini</Link></li>
            <li><Link to="/frase" onClick={handleToggle}>Frase</Link></li>
            <li><Link to="/pagina" onClick={handleToggle}>Pagina</Link></li>
            <li><Link to="/contatti" onClick={handleToggle}>Contatti</Link></li>
        </ul>
        </div>
     </div>
    )
}

export default Navbar
