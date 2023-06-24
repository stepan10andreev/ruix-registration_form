import axios from "axios"
import { IUserRegData } from "../RegistrationFormContainer/RegistrationForm/RegistrationForm"

export const FormService = {
  async registerUser (data: IUserRegData) {
    return axios.post(' http://localhost:5000/usersss', data)
  }
}
