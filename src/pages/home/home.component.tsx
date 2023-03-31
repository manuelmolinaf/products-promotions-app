import productsData from '../../data/product.data'
import promotionsData from '../../data/promotions.data'
import Products from '../../components/products/products.component'
import { useState } from 'react'

const Home = () =>{


  return (<Products productsData={productsData} promotions={promotionsData}/>)

}

export default Home