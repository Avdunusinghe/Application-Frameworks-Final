import axios from "axios";
import environment from "../../config.dev";

class UserService {
  getUserDetails(userFilterModel) {
    return axios.post(`${environment.apiUrl}user`, userFilterModel);
  }
}

export default new UserService();
