import { useEffect, useState } from "react"
import { getUsers } from "../api/userApi"

function Users() {

  const [user,setUser] = useState([])

  const getUser = async () =>{

    try{
      
      const data = await getUsers      
      setUser(data.data)
      console.log(data);
      
    }

    catch(err){

      console.log(err)

    }

  }


  useEffect(()=>{
    getUser()
  },[])
  

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">Users</h2>
      <p className="text-gray-600">Users list will appear here.</p>
    </div>
  )
}

export default Users