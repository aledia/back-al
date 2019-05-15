import axios from "axios";

export default class TravelServices {

  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3010/api/travels`,
      withCredentials: true 
    })
  }

  all = () => {
    return this.service 
      .get(`/`)
      .then(data => data.data)
  }
  


  /*************creador con usu*************** */
  circuitsWithUSer = (id) => {
    return this.service 
      .get(`/creator/${id}`)
      .then(data => data.data)
  }

/************************************* */
  oneData = (id) => {
    return this.service
      .get(`/${id}`)
      .then(data => data.data)
  }

  newOne = (data) => {
    return this.service
      .post(`/new`, data)
  }

  updateOne = (id, data) => {
    return this.service
      .put(`/update/${id}`, data)
  }

  deleteOne = (id) => {
    return this.service
      .delete(`/delete/${id}`)
  }
}
