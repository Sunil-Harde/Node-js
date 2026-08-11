import api from '../services/axios'


export const login = async (loginData) =>{

    const res = await api.post("/user/login",loginData)

    return res.data

}



export const userProfile = async () =>{


    const res = await res.get(`/auth/profile`)

    return res.data


}

