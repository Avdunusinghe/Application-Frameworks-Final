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
  const [type, setTypes] = useState([]);
  const [code, setCode] = useState([]);
  const [name, setName] = useState([]);
  const [amount, setAmount] = useState([]);
  const [inStock, setInStock] = useState([]);

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

  const onSubmit = (e) => {
    e.preventDefault();

    const productModel = {
      code,
      name,
      amount,
      inStock,
      type,
    };

    console.log(productModel);
  };
  return (
    <div>
      {console.log(vehicleTypes)}
      <form onSubmit={onSubmit}>
        <label>Code</label>
        <br></br>
        <input type="text" onChange={(e) => setCode(e.target.value)} />
        <br></br>

        <label>Name</label>
        <br></br>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br></br>

        <label>amount</label>
        <br></br>
        <input type="text" onChange={(e) => setAmount(e.target.value)} />
        <br></br>

        <label>inStock</label>
        <br></br>
        <input type="text" onChange={(e) => setInStock(e.target.value)} />
        <br></br>

        <label>inStock</label>
        <pre>{JSON.stringify(type)}</pre>
        <MultiSelect
          value={type}
          options={vehicleTypes}
          onChange={(e) => setTypes(e.value)}
          optionLabel="name"
          placeholder="Select a Vehicle"
          maxSelectedLabels={10}
        />

        <button type="submit"> Save</button>
      </form>
    </div>
  );
};

export default ProductDetails;
