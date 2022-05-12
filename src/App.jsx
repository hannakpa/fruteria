import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Button} from "react-bootstrap";
import Productos from './Productos';
import Ticket from './Ticket';



function App() {

  
const [sumaTotal, setSumaTotal] = useState(0);
const [compra, setCompra] = useState([]);


  function add(alimento){
    //dentro de esta función meter una función que vaya añadiendo la lista a la dercha 
    //traer todo el objeto 
    let total= sumaTotal+alimento.preu;
    setSumaTotal(total);

    const actual = compra.find(el => el.id===alimento.id);
    
    if (actual) {
      const nuevo = {...actual};
      nuevo.units +=1;
      setCompra([...compra.filter(el =>el.id!==nuevo.id), nuevo]);
    } else {
      const nuevo = alimento;
      nuevo.units=1;
      setCompra([...compra, nuevo]);
    } 
  }


  function funcEliminar(alimento) {
    setCompra(compra.filter(el => el.preu!==alimento.preu));
   setSumaTotal(sumaTotal-alimento.preu*alimento.units);
    
  }


  const productes = [
    {
        "id" : 1,
        "nom" : "Plàtan",
        "preu" : 0.5,
        "img": './public/img/1.png'
    },
    {
        "id" : 2,
        "nom" : "Poma",
        "preu": 0.8,
        "img": './public/img/2.png'
    },
    {
        "id" : 3,
        "nom" : "Pinya",
        "preu": 5,
        "img": './public/img/3.png'
    },
    {
        "id" : 4,
        "nom" : "Meló",
        "preu": 6,
        "img": './public/img/4.png'
    },
];



//<ListGroup.Item>Vestibulum at eros <Button variant="outline-dark">Dark</Button></ListGroup.Item>

  return (
    <div className="big-box">
      <Container>
        <Row><h1>Fruiteria</h1></Row>
        <Row>
          <Col className="col-6">
          
          {productes.map(el=><Productos alimento={el} add={add} />)}
          </Col>
          <Col className="col-6">
            <Ticket datos={compra} resultado={sumaTotal} eliminar={funcEliminar}/>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
