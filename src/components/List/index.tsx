import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"
import {getUsers} from "../../api/users"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Entrada() {
    return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Digite o nome de usuário</Form.Label>
        <Form.Control name='usuario' type="text" value={} placeholder="Digite o nome de usuário" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={}>
        Pesquisar
      </Button>
    </Form>
    )
}

export function List() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const listUsers = async() => {
        setIsLoading(true)
        const list = await getUsers()
        setIsLoading(false)
        setUsers(list.results)
    }

    useEffect(()=>{
        listUsers()
    }, [])

    return(
        <div>
            dados()
        </div>
    )
    
    /*
    return (
        <div>
            { isLoading ? <BeatLoader color="blue"/>: ""}
            {users.map(function (user) {
                return <CardUser key={user.email} user={user} />
            })
            }
            
            ---{/
                Pode ser feito assim:
                    <div className="App">
                        users.map(user=><CardUser key={user.id} user={user}/>
                    </div>
            /}------
        </div>
    )
    */
}