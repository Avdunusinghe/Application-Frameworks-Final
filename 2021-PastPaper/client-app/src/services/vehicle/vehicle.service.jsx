import enviroment from "../../config.dev";
import axios from "axios";
class VehicleService {
  getVehicleDetails() {
    return axios.get(`${enviroment.apiUrl}vehicle`);
  }
}

export default new VehicleService();
