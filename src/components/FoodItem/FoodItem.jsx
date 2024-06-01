import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { Storecontext } from '../context/Context'

const FoodItem = ({ id, name, image, price, description, category }) => {
    const[itemcount, setitemcount]= useState(0)
    const {cartitems, addtocart, removefromcart}= useContext(Storecontext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={image} alt="" />
                
                {!cartitems[id]? <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />
                : <div className='food-item-counter'>
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
                </div>
                }

            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <div className="food-item-desc">{description}</div>

                <div className="food-item-price">${price}</div>
            </div>


        </div>
    )
}

export default FoodItem
