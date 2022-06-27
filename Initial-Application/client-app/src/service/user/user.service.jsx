import axios from "axios";
import environment from "../../config.dev";

class UserService {
  getUserDetails(userFilterModel) {
    console.log(userFilterModel);
    return axios.post(`${environment.apiUrl}user/getAll`, userFilterModel);
  }

  deleteUser(id) {
    return axios.delete(`${environment.apiUrl}user` + id);
  }

  updateUser(userModel) {
    return axios.put(`${environment.apiUrl}user`, userModel);
  }
}

export default new UserService();
