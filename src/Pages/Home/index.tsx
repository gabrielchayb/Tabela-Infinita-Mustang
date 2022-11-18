import * as C from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'reactstrap';
import MUSTANG from "../../images/MUSTANG.jpg";
import Navbar from "../../components/NavBar"



export const Home = ()=>{
        
    

    return(
        <C.Container>
            <Navbar> </Navbar>  
            <C.Imagem>
            <img src={MUSTANG} alt='mustang'></img>
            </C.Imagem>        
        </C.Container>
        
    );
    }