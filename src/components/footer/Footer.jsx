import React from 'react'
import './Footer.css'
import img1 from '../../img/img1.png'
function Footer() {
  return (
    <div className='Footer'>
        <div className="foot">
            
        <ul>
            <li className='footer__left'>
                <img src={img1} alt="" />
                <h2>GIRLS IN DIGITAL</h2>
            </li>
            <li className='footer__centr'>
                <ul>
                    <li>
                        <p><a href="#proekt">О Проекте </a></p>
                    </li>
                    <li>
                        <p><a href="#naprav">Направления</a></p>
                    </li>
                    <li>
                        <p><a href="#result">Результаты</a></p>
                    </li>
                    <li>
                        <p><a href="#map">Контакты</a></p>
                    </li>
                </ul>
            </li>
            <li className='footer__right'>
                <b>Uz</b>
                <b>Uz</b>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer