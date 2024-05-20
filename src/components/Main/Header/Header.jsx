import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
        <header>
            <div id='logo'>
                <Link to='/'>
                    GLANCE
                </Link>
            </div>
            <nav>
                <Link to='/catalog' >
                    <div className='navBtn'>
                        <img src='../src/assets/images/icons/catalog icon.png'/><br/>Каталог
                    </div>
                </Link>

                <Link to='/cart'>
                    <div className='navBtn'>
                        <img src='../src/assets/images/icons/icon basket.png' height={19}/><br/>Корзина
                    </div>
                </Link>
            </nav>
        </header>
    </>
  )
}
