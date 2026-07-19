import React from 'react'
import hero from "../assets/hero.png"


function Card({img={hero}, title="bnm,", dis}) {
  return (
    <div>

        <div className="card">
          <img src={img} alt="img" />
            <p>{title}</p>
            <p>{dis}</p>
        </div>
      
    </div>
  )
}

export default Card
