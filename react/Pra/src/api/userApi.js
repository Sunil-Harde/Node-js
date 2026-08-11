import api from '../services/axios.js'


export const getUsers = async () =>{

    const res = await api.get('/users')
    return res.data

}


export const getUsersId = async (id) =>{
    const res = await api.get(`/user/${id}`)
    return res.data
}



