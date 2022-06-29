import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/vehicle/vehicle-list/vehicle.list";
import ProductList from "./pages/product/product-list/product.list";
import ProductDetails from "./pages/product/product-detail/product.details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<VehicleList></VehicleList>}></Route>
            <Route path="product">
              <Route index element={<ProductList></ProductList>}></Route>
              <Route
                path=":id"
                element={<ProductDetails></ProductDetails>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
