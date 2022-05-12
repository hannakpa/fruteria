import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import './productos.css';




function Productos({alimento, add}) {


    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                <div>{alimento.nom} ({alimento.preu} €/u)</div>
                <div><img src={alimento.img} style={{height:'40px', cursor:'pointer'}} alt="Clic para añadir al carrito" onClick={() => add(alimento)} ></img></div> 
            </ListGroup.Item>
        </ListGroup>
    )
}


export default Productos