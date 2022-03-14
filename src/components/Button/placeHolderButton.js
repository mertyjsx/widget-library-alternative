import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import types from "../../redux/types"
import {openModalAction} from "../../redux/modalReducer"


export default function PlaceHolder() {

const dispatch=useDispatch()    
const placeHolder_text=useSelector(state=>state.configReducer.config.placeholder_text)


const openModal=()=>{
dispatch(openModalAction())
}

  return (
    <div onClick={openModal} className='initButton'>{placeHolder_text}</div>
  )
}
