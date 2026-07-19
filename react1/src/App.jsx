import React from 'react'
import axios from 'axios'

function App() {


    // async function fetchData() {

    //     const token = localStorage.getItem("token")

    //     let res = await axios.get("http://localhost:5000/api/product",

    //         // {
    //         //     "email": "ss@s.com",
    //         //     "password": "dsdf3232@H"
    //         // }

    //         headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json"
    //     })


    async function fetchData() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTVhMTgyMjk0MGVjZDNkOTRlYTQ0MjYiLCJuYW1lIjoic3VuaWwiLCJlbWFpbCI6InNzQHMuY29tIiwiaWF0IjoxNzg0Mjg5NTk5LCJleHAiOjE3ODQyOTMxOTl9.e90uDcD2XAoJavVU-g0n8EZzw5Gu_BysjQR9-w5o2WA"
        

        // const token = ""

        let res = await axios.get("http://localhost:5000/api/product",{
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        console.log(res.data)

    }

    fetchData()


    return (
        <div>

        </div>
    )
}

export default App
