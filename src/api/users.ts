export async function getUsers(nome: string) {
    try {
        let response = await fetch(`https://api.github.com/users/${nome}`) // await --> espere isso acontecer pra ir pra proxima linha
        let dados = await response.json()
        return dados
    } catch (error) {
        return []

    }
}
