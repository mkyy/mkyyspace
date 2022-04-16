import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactPage } from "../Contact/ContactPage";
import MainPage from "../MainPage/MainPage";
import { Portfolio } from "../Portfolio/Portfolio";
import { ToolsPage } from "../ToolsPage/ToolsPage";


export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/tools' element={<ToolsPage/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contact' element={<ContactPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
