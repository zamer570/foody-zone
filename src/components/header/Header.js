import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.svg'

function Header({inputFilter,buttonFilter}) {

  const buttonTypes = ["All", "Breakfast", "Lunch","Dinner"];

  return (
    <div className={style.header}>
      <div className={style.text_search}>
        <img src={logo} alt='logo'/>
        <input type='text' placeholder ='Search Food....' onChange={inputFilter}/>
      </div>
      <div className={style.food_fitler}>
        {
          buttonTypes.map(val =>{
            return <button onClick={() => buttonFilter(val)}>{val}</button>

          })
        }
        </div>
    </div>
  )
}

export default Header
