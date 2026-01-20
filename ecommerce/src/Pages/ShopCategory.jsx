import React, {useContext} from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Components/Context/ShopContext';
import dropdown from '../assets/dropdown_icon.png'
import Items from '../Components/Items/Items';

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
      <div>
        <p><span>Showing 1-12</span> Out of 36 products</p>
        <div>Sort by <img src={dropdown} alt="" /></div>
      </div>
      <div>
        {all_products.map ((item)=>{
            if (props.category===item.category) {
              return <Items key={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            } else {
              console.log(props.category);
              console.log(all_products);
              return null;
            }
        })}
      </div>
    </div>
  
  )
}

export default ShopCategory