import React from 'react'
import { DisplayBigImageItem } from '../ItemDisplays/DisplayBigImageItem'
import Item from '../../models/Item'

export const BigImageItem = (props:Item) => {
  return (
    <button onClick={()=>{
        
    }}><DisplayBigImageItem item={props}/></button>
  )
}
