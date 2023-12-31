import MapsLocation from "./components/MapsLocation"
import Wpp from "./components/Wpp"
import About from "./sections/About"
import AreasWork from "./sections/AreasWork"
import Footer from "./sections/Footer"
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
      <AreasWork />

      <MapsLocation />
      <Footer />
    </>
  )
}

export default App
