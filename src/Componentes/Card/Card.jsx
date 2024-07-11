import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'; 
import cafecitoImage from '../../assets/cafecito.png'; // Ajusta la ruta según la estructura de tu proyecto

function CustomCard() {
  // Define el estado del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card className='carta'>
      <Card.Img variant="top" src={cafecitoImage} />
      <Card.Body className='CardBody'>
        <Card.Title className='titulo1'>Kaffee Sonnenaufgang Blend</Card.Title>
        <Card.Text className='texto1'>
          Tipo de café: Moderado

          Descripción: Celebra la magia del amanecer con nuestro Sonnenaufgang Blend. Inspirado en la calidez del sol naciente, este café despierta tus sentidos con su suavidad y notas delicadas. Una mezcla que captura la promesa de un nuevo día con cada sorbo.
        </Card.Text >
        {/* Agrega el contador aquí */}
        <div className='contador'>
          <Button variant="secondary" onClick={decrementCount}>-</Button>
          <span className='count'>{count}</span>
          <Button variant="secondary" onClick={incrementCount}>+</Button>
        </div>
        <div className='boton1'>
            <Button className='boton'>COMPRAR</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default CustomCard;

