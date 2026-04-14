import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=> {
    const [cartitems, setCartItems] = useState({});

    const addTocart = (itemsId) => {
         if (!cartitems[itemsId]) {
            setCartItems((prev)=>({...prev,[itemsId]:1}))
         }
         else{
            setCartItems((prev)=>({...prev,[itemsId]:prev[itemsId]+1}))
         }
    }
    
    const removeTocart = (itemsId) =>{
       setCartItems((prev) =>({...prev,[itemsId]:prev[itemsId]-1}))
    }

    const getTotalCartAmount =() =>{
        let totalAmount = 0;
      for(const item in cartitems)
      {
        if (cartitems[item]>0) {
            let iteminfo = food_list .find((product)=>product._id === item);
        totalAmount += iteminfo.price * cartitems[item];
        }
      }
      return totalAmount;
    }
    // useEffect(() => {
    //    console.log(cartitems);
    // }, [cartitems])
    

    const contextValue = {
        food_list,
        cartitems,
        setCartItems,
        addTocart,
        removeTocart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;