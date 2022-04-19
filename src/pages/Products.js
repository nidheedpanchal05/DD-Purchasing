import React from 'react';
import chiller from '../Images/img/products/chiller.jpg';
import compressor from '../Images/img/products/compressor.jpg';
import ducting from '../Images/img/products/ducting.jpg';
import machinery from '../Images/img/products/machinery.jpg';
import plumbing from '../Images/img/products/plumbing.jpg';
import roplant from '../Images/img/products/ro-plant.jpg';
import sandfilter from '../Images/img/products/sandfilter.jpg';
import softner from '../Images/img/products/softner.jpg';
import transformer from '../Images/img/products/transformer.jpg';

const productTypes = ['App', 'Card', 'Web'];
const data = [
  {
    source: chiller,
    name: 'Chiller',
    type: productTypes[1],
  },
  {
    source: compressor,
    name: 'compressor',
    type: productTypes[2],
  },
  {
    source: ducting,
    name: 'Ahu & ducting',
    type: productTypes[0],
  },
  {
    source: machinery,
    name: 'machinery',
    type: productTypes[0],
  },
  {
    source: plumbing,
    name: 'plumbing',
    type: productTypes[0],
  },
  {
    source: roplant,
    name: 'R/O plant',
    type: productTypes[1],
  },
  {
    source: sandfilter,
    name: 'sandfilter',
    type: productTypes[2],
  },
  {
    source: softner,
    name: 'softner',
    type: productTypes[1],
  },
  {
    source: transformer,
    name: 'transformer',
    type: productTypes[2],
  },
];

function Products() {
  return (
    <div className='main product'>
      <div className='header'>
        <h1 className='heading'>
          <span>Products</span>
        </h1>
        <p>We offer a variety of plastic products</p>
      </div>
      <div className='nav justify-content-center product-variety'>
        <button className='btn '>All</button>
        <button className='btn '>App</button>
        <button className='btn'>Card</button>
        <button className='btn '>Web</button>
      </div>
      <div className='row product-list'>
        {data.map((product, index) => {
          return (
            <div className='col-sm-4' key={index}>
              <img
                className='img-fluid product-image'
                src={product.source}
                alt={product.name}
              />
              <h3 className='product-name'>{product.name}</h3>
              <p>{product.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
