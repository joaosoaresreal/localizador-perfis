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
            
            <div>
                <img src={user.avatar_url}/>
                <h3>{user.name}</h3>
                <button><a href={user.html_url} target="_blank">Perfil no Github</a></button>
            </div>
            
        </PerfilStyle>
    )
}