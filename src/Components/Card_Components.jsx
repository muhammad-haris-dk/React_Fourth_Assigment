import React from 'react'

function Card_Components(props) {
  return (
    
            <div onClick={props.onclick} className="card col-md-3 me-2 " style={{ width: "17rem" }}>
         
            <img src={props.src} className="card-img-top w-full" alt="..." />
         
          <div className="card-body">
            <p className="text">{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
          </div>
        </div>
        
  )
}

export default Card_Components