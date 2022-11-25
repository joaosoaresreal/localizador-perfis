import { useEffect, useState } from "react"
import { PerfilStyle } from './styled'

type PerfilProps = {
    user:{
        login?: string
        avatar_url?: string
        name?: string
        html_url?: string
    }
}

export function Perfil({user}:PerfilProps) {
    return(
        <PerfilStyle>
            <img src={user.avatar_url}/>
            <div className='info'>
                <h3>{user.name}</h3>
            </div>
            <a href={user.html_url}></a>
        </PerfilStyle>
    )
}