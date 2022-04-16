import { useContext } from "react"
import { ThemeLocalContext } from "./context/ThemeLocalContext"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle/GlobalStyle"
import { Paths } from "./pages/Paths/Paths";

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
