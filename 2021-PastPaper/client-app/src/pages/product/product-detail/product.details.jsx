import React, { Component, useCallback, useEffect, useState } from "react";
import vehicleService from "../../../services/vehicle/vehicle.service";
import { MultiSelect } from "primereact/multiselect";
import "./product.details.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ProductDetails = () => {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  const [selected, setSelected] = useState([]);
  const [vehicleTypes, setVhicleTypes] = useState(null);

  useEffect(() => {
    getVehicleMasterData();
  }, []);

  const getVehicleMasterData = useCallback(() => {
    vehicleService
      .getVehicleDetails()
      .then((response) => {
        let types = [];
        for (let index = 0; index < response.data.length; index++) {
          types.push({
            name: response.data[index].type,
            code: response.data[index]._id,
          });
        }

        setVhicleTypes(types);
      }, [])
      .catch((error) => {});
  });
  return (
    <div>
      {console.log(vehicleTypes)}
      <form>
        <label>Code</label>
        <br></br>
        <input type="text" />
        <br></br>

        <label>Name</label>
        <br></br>
        <input type="text" />
        <br></br>

        <label>amount</label>
        <br></br>
        <input type="text" />
        <br></br>

        <label>inStock</label>
        <br></br>
        <input type="text" />
        <br></br>

        <label>inStock</label>
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          value={selected}
          options={vehicleTypes}
          onChange={(e) => setSelected(e.value)}
          optionLabel="name"
          placeholder="Select a City"
          maxSelectedLabels={10}
        />
      </form>
    </div>
  );
};

export default ProductDetails;
