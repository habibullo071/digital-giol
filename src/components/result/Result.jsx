import React from 'react'
import './Result.css'
import img8 from '../../img/img8.png'
function Result() {
    return (
        <div className="result " id='result'>
            <div className='Result'>
                <h2>Результаты</h2>
                <p className='p'>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
                <ul>
                    <li>
                        <img src={img8} alt="" />
                        <p>Самореализация девушек в сфере IT</p>
                    </li>
                    <li>
                        <img src={img8} alt="" />
                        <p>Выбор профессии без квалификациии дипломов</p>
                    </li>
                    <li>
                        <img src={img8} alt="" />
                        <p>Возможность зарабатывать дистанционно (фриланс)</p>
                    </li>
                    <li>
                        <img src={img8} alt="" />
                        <p>Возможность начать свои социальные проекты в виде Старт апов</p>
                    </li>
                    <li>
                        <img src={img8} alt="" />
                        <p>Маркетинговые навыки</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Result