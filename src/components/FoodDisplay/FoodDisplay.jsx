import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { Storecontext } from '../context/Context'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list}= useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        
        <div className="food-display-item">
            {food_list.map((item,index)=>{
                 if(category==="All" || category===item.category){
                return(
                   
                    <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}  description={item. description} category={item.category} />
                    )}
            })}

        </div>
      
    </div>
  )
}

export default FoodDisplay
