import React from "react";

import Currency from "react-currency-formatter";

import "./index.css";

const Vehicle = ({ vehicle }) => (
  <div className="vehicle">
    <h3 className="title">{vehicle.title}</h3>
    <h3 className="price">
      <Currency quantity={vehicle.price} currency="BRL" locale="pt_BR" />
    </h3>
    <h5 className="details">
      {vehicle.model} • {vehicle.brand} • {vehicle.km} KM
    </h5>
    <h5 className="year">{vehicle.year}</h5>
  </div>
);

export default Vehicle;
