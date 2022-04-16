import Toggle from 'react-toggle'
import "react-toggle/style.css"
import {useContext} from 'react'
import { Link } from "react-router-dom";
import {SHeader} from './style.js'
import { ThemeLocalContext } from "../../context/ThemeLocalContext.jsx";
import { DarkIcon } from '../DarkIcon/DarkIcon.jsx';

export const Header = () => {

    const {theme, handleChange} = useContext(ThemeLocalContext)

    return(
        <SHeader>            
            <Toggle className='custom-classname'
            checked={theme.title === 'dark'}
            onChange={handleChange}
            icons={{checked: false, unchecked: <DarkIcon />}}
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