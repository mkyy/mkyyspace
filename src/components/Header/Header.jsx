import ReactSwitch from "react-switch";
import {useContext} from 'react'
import { ThemeLocalContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

import {SHeader} from './style.js'

const Header = () => {

    const {theme, handleChange} = useContext(ThemeLocalContext)

    return(
        <SHeader>

            <ReactSwitch className="switch" 
            checked={theme.title === 'dark'}
            onChange={handleChange}
            onColor={theme.colors.primary}
            checkedIcon={false}
            uncheckedIcon={false}
            />

            <nav>
                <Link className="link" to={'/'}> Home </Link>
                <Link className="link" to={'/tools'}> Tools </Link>
                <Link className="link" to={'/portfolio'}> Portfolio </Link>
                <Link className="link" to={'/contact'}> Contato </Link>
            </nav>

        </SHeader>
    )
}
export default Header;