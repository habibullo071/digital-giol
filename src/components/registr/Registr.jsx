import React from 'react'
import './Registr.css'
function Registr() {
    return (
        <div className='Registr'>
            <h1>Регистрация</h1>
            <div className="input">
                <input type="text"  placeholder='Имя'/>
                <input type="text"  placeholder='Фамилия'/>
                <input type="text"  placeholder='Дата рождения'/>
                <input type="text"  placeholder='Почта'/>
                <input type="text"  placeholder='Адрес'/>
                <input type="text"  placeholder='Телефон'/>
                <button>Отправить</button>
            </div>

        </div>
    )
}

export default Registr