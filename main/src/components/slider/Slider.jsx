import "./slider.scss"
import React from 'react'

export default function Slider() {
  return (
    <div id='slider'>
      <h1>Nossos Clientes</h1>
      <div className="container-md">
        <div className="col">
          <h2>
              <img src="assets/images/logo1.svg" alt="" />
          </h2>
        </div>
        <div className="col">
              <img src="assets/images/logo2.svg" alt="" />
        </div>
        <div className="col">
              <img src="assets/images/logo1.svg" alt="" />
        </div>
        <div className="col">
              <img src="assets/images/logo4.svg" alt="" />
        </div>
        <div className="col">
              <img src="assets/images/logo8.svg" alt="" />
        </div>
        <div className="col">
              <img src="assets/images/logo4.svg" alt="" />
        </div>


      </div>

    </div>
  )
}
