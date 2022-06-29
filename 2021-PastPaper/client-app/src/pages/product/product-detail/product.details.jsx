import React, { Component, useCallback, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import vehicleService from "../../../services/vehicle/vehicle.service";
import { MultiSelect } from "primereact/multiselect";
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
            label: response.data[index].type,
            value: response.data[index]._id,
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
          value={vehicleTypes}
          options={vehicleTypes}
          onChange={(e) => setSelected(e.value)}
          optionLabel="Vehicle"
          placeholder="Select a City"
          maxSelectedLabels={3}
        />
      </form>
    </div>
  );
};

export default ProductDetails;
