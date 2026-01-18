import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='items'>
         <img src={props.image} alt={props.name} />
         <h3>{props.name}</h3>
            <div className="price">
                <span className="new-price">{props.new_price}</span>
                <span className="old-price">{props.old_price}</span>
            </div>
    
    </div>
  )
}

export default Items