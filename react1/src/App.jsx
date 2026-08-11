import React from 'react'

function App() {

    fetch("http://localhost:5000/api/product")
        .then((res) => res.json())
        .then((data) => console.log(data))

    return (
        <div>

        </div>
    )
}

export default App
