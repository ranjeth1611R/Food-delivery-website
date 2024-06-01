import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes. our mission is to safisfy your cravings and elevate your dining experience. one delicious meal at a time
</p>     
        <div className="explore-menu-list">
            {menu_list.map((task,index)=>{
                return(
                    <div key={index} className="explore-menu-list-item" onClick={()=>setcategory(prev=>prev===task.menu_name?"All":task.menu_name)}>
                        <img className={category===task.menu_name?"active":""}  src={task.menu_image} alt="" />
                        <p>{task.menu_name}</p>
                    </div> )               
            })}
            
        </div>
        <hr />
        
    </div>
  )
}

export default ExploreMenu
