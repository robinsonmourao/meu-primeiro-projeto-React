import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari">Item1</Item>
                <Item marca="Lamborghini">Item2</Item>
            </ul>
        </>
    )
}

export default List