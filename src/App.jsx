import Wpp from "./components/Wpp"
import About from "./sections/About"
import Header from "./sections/Header"
import Main from "./sections/Main"
import GlobalStyle from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Wpp />
      
      <Header />
      <Main />
      <About />
    </>
  )
}

export default App
