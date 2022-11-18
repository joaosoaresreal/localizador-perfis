import { Users } from "phosphor-react"
import { Header } from "./components/Header"
import { Entrada, List } from "./components/List";
import { GlobalStyle } from "./globalStyle"

function App() {
  const logo = <Users size={44} color="#ebebeb" weight="duotone" />

  return (
    <div className="App">
      <GlobalStyle />
      <Header title="LOCALIZADOR DE PERFIS" logo={logo} />
      <Entrada/>
      <List/>
    </div>
  )
}

export default App
