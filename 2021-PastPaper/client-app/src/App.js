import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/vehicle/vehicle-list/vehicle.list";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<VehicleList></VehicleList>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
