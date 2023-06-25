import axios from "axios"
import { IUserRegData } from "../RegistrationFormContainer/RegistrationFormContainer"

export const FormService = {
  async registerUser (data: IUserRegData) {
    return axios.post(' http://localhost:5000/users', data)
  }
}
