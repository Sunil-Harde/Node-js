import React from 'react'
import axios from "axios"
function App() {

    let url = "http://localhost:8080/path"


    const [data, setData] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [id, setId] = React.useState("")


    const handelDelete = async (idd) => {

        setId(idd)

        console.log(id)
        console.log(idd)
        let res = await axios.delete(url + "/" + idd)

        alert(res.data.message)

    }



    React.useEffect(() => {

        const fetchData = async () => {

            let res = await axios.get(url)

            setData(res.data.data)
            console.log(res.data.data)
            setShow(true)
        }

        fetchData()
    }, [id])

    return (
        <div>

            <h1>hii</h1>

            {

                show ? (data.map((value) => {

                    return (
                        <div key={value._id} className='flex gap-10'>

                            <h1>{value.name}</h1>
                            <button onClick={() => handelDelete(value._id)}>Delete</button>

                        </div>
                    )
                })) : (

                    <h1>
                        ..............
                    </h1>
                )
            }


        </div>
    )
}

export default App
