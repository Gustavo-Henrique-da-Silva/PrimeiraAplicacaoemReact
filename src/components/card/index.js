import { useState } from "react";
import Button from "../button";
const Card = () =>{

const [valor, setValor] = useState(0);

function Adicionar(){
    setValor(valor + 1);
}

function Remover(){
    setValor(valor - 1);
}

function Restaurar(){
    setValor(valor - valor);
}
    return (
        <div className="card w-75">
            <div className="card-body">
                <h5 className="card-title">My First Card</h5>
                <p className="card-text">My Text in Card</p>
                <Button
                className="btn btn-primary" 
                onClick={Adicionar}>
                Add </Button>
                <Button
                className="btn btn-secondary"
                onClick={Remover}>
                Remove</Button>
                <Button
                className="btn btn-success"
                onClick={Restaurar}>
                Restaure</Button>
                
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;