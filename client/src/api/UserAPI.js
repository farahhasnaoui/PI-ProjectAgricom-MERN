import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI() {

    const [cart, setCart] = useState([])



    

    const addCart = async (product) => {
       
        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}
            )

        }else{
            alert("This product has been added to cart.")
        }
    }

    return {
   
        cart: [cart, setCart],
        addCart: addCart,
    
    }
}

export default UserAPI