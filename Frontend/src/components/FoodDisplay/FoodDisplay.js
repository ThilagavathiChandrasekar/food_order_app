import React, { useContext } from 'react'
import {StoreContext} from '../../Context/StoreContext';
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({category}) {
  
    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay