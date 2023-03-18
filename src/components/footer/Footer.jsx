import React from 'react'
import './Footer.css'
import img1 from '../../img/img1.png'
import img12 from '../../img/img12.png'
function Footer() {
    return (
        <div className='Footer'>
            <div className="foot">

                <ul>
                    <li className='footer__left'>
                        <a href="#"><img src={img1} alt="" /></a>
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
                        <ul className='ol'>
                            <button>Uz</button>
                            <button>Ru</button>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={img12} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={img12} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={img12} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={img12} alt="" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer