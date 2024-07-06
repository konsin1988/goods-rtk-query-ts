import React from 'react'
import { useGetGoodsQuery, useDeleteProductMutation } from '../../redux'
import classes from './style.module.css'
import { useAppSelector } from '../../hooks/typedHooks'
import { IProduct } from '../../types'


const ProductList: React.FC = () => {
    const limit = useAppSelector(state => state.goods.limit)
    const { data = [], isLoading} = useGetGoodsQuery(limit)
    const [deleteProduct, {isError}] = useDeleteProductMutation()
  
    if (isLoading) return <h1>Loading</h1>


  return (
    <ul className={classes.ul}>
        {
          data.map(item => (
            <li className={classes.li} key={item.id}>
              <span>{item.name}</span>
              <span 
                className={classes.delete}
                onClick={() => deleteProduct(item.id)}>x</span>
            </li>
          ))
        }
      </ul>
  )
}

export default ProductList