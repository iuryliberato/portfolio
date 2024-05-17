import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  dark: false,
  body: '#FFFFFF',
  text: '#0A0A0A',
  textHeaders: '#000000',
  nav: '#45597C',
  headline: '#FFFFFF',
  subHeader: '#000000',
  aboutBackground: '#FFFFFF',
  projectsBackground: '#F2F2F2',
  website: '#45597C',
  footer: '#45597C',
  skills: '#F8F8F8',
  menu: '#fff',
  menuBackground: '#45597C'
}

export const darkTheme = {
  dark: true,
  body: '#1D1D1D',
  text: '#fff',
  textHeaders: '#FFFFFF',
  nav: '#1D1D1D',
  headline: '#FFFFFF',
  subHeader: '#FFFFFF',
  aboutBackground: '#282828',
  projectsBackground: '#101010',
  website: '#616161',
  footer: '#1F1F1F',
  skills: '#1D1D1D',
  menu: '#fff',
  menuBackground: '#282828'
}

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box; 
}

html {
  scroll-behavior: smooth;
}
  html, body {
    margin: 0;
    text-align: center;
  }
  body {
    min-height: 100vh;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    
  }
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }


`