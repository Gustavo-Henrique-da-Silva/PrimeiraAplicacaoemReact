const Item = (props) => {
    return (
            <a href="/" className="list-group-item list-group-item-action list-group-item-secondary">
             {props.children}
             </a>
             //no caso de props, é possível colocar qualquer valor, mas claro, a lógica muda:
             //Para valores já pré-definidos como o caso de children, ele retorna determinado valor,
             //Isso é nesse caso atual, o valor completo do a e suas características, com exceção de seu texto
             //para uma não-definida, você pode usar o props para carregar um valor determinado para retornar justamente
             //como um atributo/característica da tag HTML!
             //Exemplo: pode ser criado um props para o nome da "classname para não ser necessário copiá-la toda santa vez
             
    )
}

export default Item;

