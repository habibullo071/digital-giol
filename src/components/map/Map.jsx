import React from 'react'
import './Map.css'
import img11 from '../../img/img11.png'
function Map() {
    return (
        <div className='Map' id='map'>
            <ul>
                <li className='Map__left'>
                    <div className="left__center">
                        <li>
                            <img src={img11} alt="" />
                            <div className="block">
                                <b>Веб сайт</b>
                                <a href="#">digitalcity.uz</a>
                            </div>
                        </li>
                        <li>
                            <img src={img11} alt="" />
                            <div className="block">
                                <b>Веб сайт</b>
                                <a href="#">digitalcity.uz</a>
                            </div>
                        </li>
                        <li>
                            <img src={img11} alt="" />
                            <div className="block">
                                <b>Веб сайт</b>
                                <a href="#">digitalcity.uz</a>
                            </div>
                        </li>
                        <li>
                            <img src={img11} alt="" />
                            <div className="block">
                                <b>Веб сайт</b>
                                <a href="#">digitalcity.uz</a>
                            </div>
                        </li>
                    </div>
                </li>
            </ul>
            <div className="map__right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.660832206248!2d72.35738321571318!3d40.747488043380116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2shk!4v1678968239458!5m2!1sru!2shk" ></iframe>
            </div>
        </div>
    )
}

export default Map