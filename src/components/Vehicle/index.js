import React from "react";

import Currency from 'react-currency-formatter'

import './index.css'

const Vehicle = ({ vehicle }) => (
  <div>
    <h3>{vehicle.title}</h3>
    <Currency 
      className=""
      quantity={vehicle.price}
      currency="BRL"
      locale="pt_BR"
    />
    <h5>{vehicle.model} • {vehicle.brand} • {vehicle.km} KM</h5>
    <h5>{vehicle.year}</h5>
  </div>
);

export default Vehicle;
