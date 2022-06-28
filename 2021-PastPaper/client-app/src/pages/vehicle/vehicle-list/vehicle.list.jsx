import React, { Component, useCallback, useEffect, useState } from "react";
import vehicleService from "../../../services/vehicle/vehicle.service";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    getAllVehicleDetails();
  }, []);

  const getAllVehicleDetails = useCallback(() => {
    vehicleService.getVehicleDetails().then((response) => {
      console.log(response);
      setVehicles(response.data);
    });
  });

  return (
    <div>
      <p>Vehicle List</p>
      <table>
        <thead>
          <th>type</th>
          <th>owner</th>
          <th>description</th>
        </thead>
        <tbody>
          {vehicles.map((vehicle, key) => (
            <tr key={key}>
              <td>{vehicle.type}</td>
              <td>{vehicle.owner}</td>
              <td>{vehicle.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
