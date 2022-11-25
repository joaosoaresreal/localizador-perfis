import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"
import { getUsers } from "../../api/users"
import { Perfil } from "../Perfil"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Entradatyled } from './styled'

export function Entrada() {
  const [users, setUsers] = useState([])
  const [usersLocalizar, setUsersLocalizar] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  function Localizar() {
    const listUsers = async () => {
      setIsLoading(true)
      const localizar = await getUsers(users)
      setIsLoading(false)
      /*setUsers(list.results)*/

      if (localizar) {
        setUsersLocalizar(localizar)
      }
      else {
        setUsersLocalizar({})
      }

    }

    useEffect(() => {
      listUsers()
    }, [])

  }

  return (
    <Entradatyled>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>Digite o nome de usuário</p>
          <Form.Control name='usuario' type="text" onChange={(e) => setUsers(e.target.value)} placeholder="Digite o nome de usuário" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={Localizar}>
          Pesquisar
        </Button>
        {Object.keys(usersLocalizar).length !== null ? <Perfil user={usersLocalizar} /> : null}
      </Form>
    </Entradatyled>
  )
}

