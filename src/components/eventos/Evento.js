import Button from './Button'

function Evento(){

    function meuEvento(){
        console.log(`Ativou primeiro evento`)
    }

    function meuEventoSecundario(){
        console.log(`Ativou segundo evento`)
    }
    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text="Evento com props"/>
            <Button event={meuEventoSecundario} text="Evento com props secundário"/>

            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </div>
    )
}
export default Evento