import { Users } from "phosphor-react"
import { Header } from "./components/Header"
import { Entrada } from "./components/Entrada";
import { GlobalStyle } from "./globalStyle"

function App() {
  const logo = <Users size={35} color="#ebebeb" weight="duotone" />

  return (
    <div className="App">
      <GlobalStyle />
      <Header title="LOCALIZADOR DE PERFIS" logo={logo} />
      <Entrada/>
    </div>
  )
}

export default App
