import { createContext, useEffect, useState } from "react";
import { userProfile } from "../api/authApi";



const AuthProvider = createContext()



export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (!token) {
            setLoading(false)
            return
        }

        const fetchProfile = async () => {

            try {

                const data = await userProfile()
                setUser(data.user)

            }

            catch (err) {

                localStorage.removeItem('token')
                setUser(null)

            }

            finally {
                setLoading(false)
            }

        }

        fetchProfile()

    },[])


    const login = (token,userData) =>{

        localStorage.setItem('token', token)
        setUser(userData)

    }

}