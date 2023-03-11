
import  {useState} from 'react'

import axios from 'axios'

function ProductsAPI() {
  const[products,setProducts] = useState([])
  const [callback, setCallback] = useState(false)
  const [category, setCategory] = useState('')
 

  return {

    products:[products,setProducts],
    callback: [callback, setCallback],
    category: [category, setCategory]
  }
}


export default ProductsAPI

