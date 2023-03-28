import React, {useContext,useEffect,useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import axios from 'axios'
import Loading from '../utils/loading/Loading'
import Filters from './Filters'
import LoadMore from './LoadMore'

function Products() {


  const state = useContext(GlobalState)
  const [products, setProducts] = state.productsAPI.products


  const [callback, setCallback] = state.productsAPI.callback
  const [loading, setLoading] = useState(false)
  if(loading) return <div><Loading /></div>
  return (
   
      <>
      <Filters />
  

      <div className="products">
          {
              products.map(product => {
                  return <ProductItem key={product._id} product={product}
              />
              })
          } 
      </div>

      <LoadMore />
      {products.length === 0 && <Loading />}
      </>
  )

}





export default Products

