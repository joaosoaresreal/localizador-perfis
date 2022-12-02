import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from "react"
import { getUsers } from "../../api/users"
import { Perfil } from "../Perfil"
import 'bootstrap/dist/css/bootstrap.min.css';
import { EntradaStyled } from './styled'

export function Entrada() {
  const [users, setUsers] = useState([])
  const [usersLocalizar, setUsersLocalizar] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function Localizar() {
      setIsLoading(true)
      const localizar = await getUsers(users)
      setIsLoading(false)

      if (localizar) {
        setUsersLocalizar(localizar)
      } else {
        setUsersLocalizar([])
      }

  }

  return (
    <EntradaStyled>
      <div>
      
      </div>
      <Form>
        <Form.Group className="form" controlId="formBasicEmail">
          <p>Digite o nome de usuário</p>
          <Form.Control name='usuario' type="text" onChange={(e) => setUsers(e.target.value)} placeholder="Digite o nome de usuário" />
        </Form.Group>

        <Button variant="primary" onClick={Localizar}>
          Pesquisar
        </Button>
      </Form>
      {Object.keys(usersLocalizar).length !== null ? <Perfil user={usersLocalizar} /> : null}
    </EntradaStyled>
  )
}

