import React from 'react'
import './navbar.css'
import img1 from '../../img/img1.png'
import img3 from '../../img/img3.png'
function Nav() {
  return (
    <div className="nav">
      <div className='navbar'>
        <div className="left">
          <ul>
            <li>
              <img src={img1} alt="" />
            </li>
            <li><h2>Girls in Digital </h2></li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>О Проекте</li>
            <li>О Проекте</li>
            <li>О Проекте</li>
            <li>О Проекте</li>
            <li>О Проекте</li>
          </ul>
          <select>
            <option value="РУ">РУ</option>
            <option value="Uz">Uz</option>
          </select>
          <button>
            Регистрация
          </button>
        </div>
      </div>
    <div className="hero">
      <div className="hero__left">
        <div className="hero__centr">
          <h1>“Girls in digital”</h1>
          Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров <br />
          <button>Подробнее</button>
        </div>
      </div>
      <div className="hero__right">
      </div>
    </div>
    </div>
  )
}

export default Nav