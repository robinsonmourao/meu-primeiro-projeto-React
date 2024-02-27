// function Pessoa(props){
//     return (
//         <div>
//             <img src={props.foto} alt={props.nome} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// }

function Pessoa({nome, idade, profissao, foto}){

    return(
        <div>
            <img src={foto} alt={foto}/>
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa