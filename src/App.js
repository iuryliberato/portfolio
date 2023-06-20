import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './components.styles/themes'
import { BrowserRouter } from 'react-router-dom'
import useLocalStorage from "use-local-storage"
import styled from "styled-components";


import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Sun from '../src/Tags/sun.png'
import Moon from '../src/Tags/moon.png'


function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Main />
        <NavBar>
          <SwitchButton onClick={themeToggler}>
            <SwitchImage src={Sun} alt="this is shown in dark mode" visible={theme === 'dark'} />
            <SwitchImage src={Moon} alt="this is shown in light mode" visible={theme !== 'dark'} style={{ backgroundColor: "white" }} />
          </SwitchButton>
        </NavBar>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}



const SwitchButton = styled.button`
  position: relative;
  background: transparent;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: 0 none;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
`

const SwitchImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.25s;
  opacity: ${({ visible }) => visible ? 1 : 0};
  width: 24px;
  height: 24px;
`


export default App;

