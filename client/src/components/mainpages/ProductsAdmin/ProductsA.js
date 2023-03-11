import React, {useContext,useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItemA from '../utils/productItemA/ProductItemA'
import axios from 'axios'
function Products() {
  const state = useContext(GlobalState)
  const [products,setProducts] =state.productsAPI.products

    useEffect(()=>{
      const getProducts = async () => {
        const res = await axios.get('/api/products')
      setProducts(res.data.products)}
      getProducts()
    },[setProducts])


  return (
  
    <div className="products">
    {
        products.map(product => {
            return <ProductItemA key={product._id} product={product}/>
             
        })
    } 
</div>

  )
}





export default Products

