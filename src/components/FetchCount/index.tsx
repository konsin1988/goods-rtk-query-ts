import React, { ReactEventHandler } from 'react'
import classes from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks'
import { setLimit } from '../../redux/slices/goodsSlice'

const FetchCount: React.FC = () => {
    const dispatch = useAppDispatch()

    const onChangeHandler: React.ChangeEventHandler<
  HTMLSelectElement> = (e) => {
        dispatch(setLimit(e.target.value))
    }

  return (
    <div className={classes.main}>
        <select value={useAppSelector(state => state.goods.limit)} onChange={ onChangeHandler } className={classes.text}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
  )
}

export {FetchCount}