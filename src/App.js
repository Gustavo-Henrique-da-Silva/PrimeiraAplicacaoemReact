import Item from "./components/item";
import Card from "./components/card"; 
//Lembrando que o elemento "class" das tags HTML aqui é chamado de ClassName
//Não existe exatamente nenhum problema em utilizar só class, mas o React irá "chiar" muito 
const App = () => {
  return (
  <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
    <Item>
      Item 1
    </Item>
    <Item>
      Item 2
    </Item>
    <Item>
      Item 3
    </Item>
    <Item>
      Item 4
    </Item>

  
    </ul>

    <Card>

    </Card>
  </>
  );
}

export default App;
