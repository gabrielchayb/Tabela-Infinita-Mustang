import {BrowserRouter, Route} from 'react-router-dom';
import { Home} from "./Pages/Home"; 
import { Tabela } from "./Pages/Tabela"; 
import { AdicionarNovo } from "./Pages/AdicionarNovo"; 


export const Router = ()=>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/tabela" component={ Tabela} />
            <Route path="/adicionarnovo" component={ AdicionarNovo }   />        

        </BrowserRouter>
    );
}