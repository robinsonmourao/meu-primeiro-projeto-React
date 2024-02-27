import {useState} from 'react'

function Form(){

    function cadastrarUsuario(evento){
        evento.preventDefault()
        console.log(`Usuário cadastrado com nome: '${name}' e senha: '${password}'`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Digite seu nome!"
                        //value={name}
                        onChange={(evento) => setName(evento.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(evento) => setPassword(evento.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form