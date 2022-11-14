import { useState } from 'react';
import * as c from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/ListItem/AddArea'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Estudar React.js", done: false },
    

  ]);



const handleAddText = (taskName: string)=>{
  let newList = [...list]; /*fiz o clone da lista original */
  newList.push({           /*adicionei o novo item */
    id: list.length + 1,
    name: taskName,
    done: false
  });
  setList(newList);        /* peguei o clone atualizado e coloquei na array original */

}


  return(
  
    <c.Container>
      <c.Area>
        <c.Header>
        <ul className="nav-list">
          <li><a>Home</a></li> 
          <li><a>Sobre</a></li>
          <li><a>Tabela</a></li>
          <li><a>Fale Conosco</a></li>
        </ul>

        </c.Header>


        <c.lista>
          <h1>Lista</h1>
        </c.lista>

        <a href="mustang/adicionarnovo"><button>Adicionar Novo</button></a>

        <AddArea onEnter = {handleAddText} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
          
        ))}
        
      </c.Area>
    </c.Container>
  );
}

export default App;