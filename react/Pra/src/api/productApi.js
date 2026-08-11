

import api from '../services/axios.js'

export const getProduct = async () =>{

    const res = await api.get('/product')

    return res.data

}


export const getOneProduct  = async (id) =>{

    const res = await api.get(`/product/${id}`)
    return res.data
}



export const createProduct  = async (data) =>{

    const res = await api.post(`/product`, data)
    return res.data
}

