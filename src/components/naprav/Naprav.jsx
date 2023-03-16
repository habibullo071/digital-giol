import React from 'react'
import "./Naprav.css"
import img6 from '../../img/img6.png'
function Naprav() {
    return (
        <div className='Naprav' id='naprav'>
            <div className="naprav">
                <h2>Направлении</h2>
                <p>Проект будет проводится по направлениям</p>
                <ul>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                    <li className='hover'>
                        <li className='korinish'>
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={img6} alt="" />
                        </li>
                    </li>
                </ul>
                <button>Записаться</button>
            </div>
        </div>
    )
}

export default Naprav