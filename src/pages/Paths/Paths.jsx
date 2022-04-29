import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactPage } from '../ContactPage/';
import MainPage from '../MainPage/MainPage';
import { PortfolioPage } from '../PortfolioPage/';
import { ToolsPage } from '../ToolsPage/';

export const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/tools' element={<ToolsPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
