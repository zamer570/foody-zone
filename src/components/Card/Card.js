import React, { useEffect, useState } from 'react'
import style from './Card.module.css'
import { BASE_URL } from '../../App'

function Card({val}) {
  
  return (
    <div className={style.card}>
      <img src={BASE_URL + val.image} alt="food"/>
      <div className={style.text}>
        <div>
          <h1>{val.name}</h1>
          <p>{val.text}</p>
        </div>
        <button className={style.price}>$ {val.price}</button>
      </div>
    </div>
  )
}

export default Card
