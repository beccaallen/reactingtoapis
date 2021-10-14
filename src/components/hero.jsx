import { render } from "@testing-library/react"
import React from "react"



const Hero = () => {
  return (
<div className="hero">
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img
          src="https://pbs.twimg.com/media/ETT8FB-UMAArGVc.jpg"
          className="d-block w-100"
          alt="..."
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <p className="slider">
            Some representative placeholder content for the first
            slide.
          </p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img
          src="https://i.pinimg.com/originals/10/63/88/106388a52a51920d5a0e6b808ca1a7f1.jpg"
          className="d-block w-100"
          alt="..."
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <p className="slider" >
            Some representative placeholder content for the second
            slide.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://studioghiblimovies.com/wp-content/uploads/2019/02/d78b1219f9991c69a7619d362548cb79f4d29e02_hq2.jpg"
          className="d-block w-100"
          alt="..."
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <p className="slider">
            Some representative placeholder content for the third
            slide.
          </p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
    
  )
}

export default Hero