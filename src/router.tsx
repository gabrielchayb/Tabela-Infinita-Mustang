import {BrowserRouter, Route} from 'react-router-dom';
import { Home} from "./Pages/Home"; 
import { Tabela } from "./Pages/Tabela"; 


export const Router = ()=>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/tabela" component={ Tabela} />
            

        </BrowserRouter>
    );
}