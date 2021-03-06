import React, { useEffect, useCallback, useState } from "react";

import { Link } from "react-router-dom";

import Vehicle from "../../../components/Vehicle";

import { carApi } from "../../../services/mock-apis";

import "./index.css";

const VehicleList = ({ location }) => {
  const [vehicles, setVehicles] = useState([]);

  const updateVehicles = useCallback(async () => {
    const response = await carApi.getAll(location.search);

    setVehicles(response.data);
  }, [location, setVehicles]);

  useEffect(() => {
    updateVehicles();
  }, [updateVehicles]);

  return (
    <ul className="vehicle--list">
      {vehicles.map(v => (
        <Link to={`/vehicle/${v.id}`} key={v.id}>
          <li className="vehicle--container">
            <Vehicle vehicle={v} />
            <hr />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default VehicleList;
