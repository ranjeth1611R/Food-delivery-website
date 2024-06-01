import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const Storecontext = createContext(null)

const Storecontextprovider = (props) => {
    const [cartitems, setcartitems] = useState({})

    const addtocart = (itemid) => {
        if (!cartitems[itemid]) {
            setcartitems(prev => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setcartitems(prev => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }
    const removefromcart = (itemid) => {
        setcartitems(prev => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }
    useEffect(() => {
        console.log(cartitems)
    }, [cartitems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartitems){
        if (cartitems[item] > 0) {
            const iteminfo = food_list.find((product) => product._id === item);
            totalAmount += iteminfo.price * cartitems[item];
        }}return totalAmount;
    }


    const Contextvalue = {
        food_list, cartitems, addtocart, removefromcart, getTotalCartAmount
    }

    return (
        <Storecontext.Provider value={Contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider;