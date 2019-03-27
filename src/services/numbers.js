import axios from 'axios'
const baseUrl = 'https://lit-sierra-46036.herokuapp.com/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
                .then(response => response.data)
}

export default { getAll, create, remove }