import { useContext } from "react"
import { ThemeLocalContext } from "./context/ThemeContext"
import { ThemeProvider } from "styled-components"
import {Paths} from "./pages/Paths/"
import { GlobalStyle } from "./styles/GlobalStyle/GlobalStyle"

function App() {

  const {theme} = useContext(ThemeLocalContext);
  
  return (
    <div>
        <>
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Paths/>
        </ThemeProvider>
        </>
    </div>
  )
}

export default App
