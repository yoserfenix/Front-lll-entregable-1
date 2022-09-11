import React from 'react';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Item from './Item';
const productos = require('./data.json');

export default function Listado({ incrementarCant }) {
  return (
    <div className='container'>
      { productos.map((producto) => (
        <Item key={ producto.id } producto={ producto } incrementarCant={ incrementarCant } />
      )) }
    </div>
  );
}
