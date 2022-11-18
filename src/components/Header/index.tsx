import { ReactNode } from 'react'
import {HeaderStyle} from './styled'

type HeaderProps = {
    title:String
    logo:ReactNode
}

export function Header({title, logo}:HeaderProps){
    return(
        <HeaderStyle>
            {logo}
            <h1>{title}</h1>
        </HeaderStyle>
    )
}