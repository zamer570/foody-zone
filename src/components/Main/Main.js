import React,{useState,useEffect} from 'react'
import style from './Main.module.css'
import bg from '../../assets/bg.png'
import Card from '../Card/Card'



function Main({data}) {
  // console.log("outside use effect");

  return (
    <div className={style.main}>
        {
            data?.map((val,i) => {
              return <Card key = {i} val={val}/>
            })
        }
    </div>
  )
}

export default Main
