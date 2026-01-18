import React from 'react'
import './NewCollections.css'
import newcollections from '../../assets/NewCollections'
import Items from '../Items/Items'

const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <hr />
        <div className="newcollections-products">
            {
                newcollections.map((item)=>{
                    return <Items key={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default NewCollections