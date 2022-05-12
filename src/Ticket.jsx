import { ListGroup } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";






function Ticket (props){
    const alimento = props.datos;  
    const eliminar = props.eliminar; 


    function crearCuadro(alimento) {
        return (
            <ListGroup.Item>
                <div>
                <h5>{alimento.nom} ({alimento.preu} €/u)</h5>
                <p>Cantidad: {alimento.units}</p>
                <p>Total: {alimento.preu*alimento.units}€</p>
                </div>
                <span><i><BsTrash style={{cursor:'pointer'}} onClick={()=>eliminar(alimento)}/></i></span>
            </ListGroup.Item>
        )
    }

    let compras=alimento.map(crearCuadro)


    const sumaTotal = props.resultado;

    

    return(
    <div>
        {compras}

    <div className='list-group-item cuadroTotal'><h5>Total: {sumaTotal}€</h5></div>
    </div>
    )
}

export default Ticket