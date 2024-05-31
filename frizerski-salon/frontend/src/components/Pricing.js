import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h1 className="heading">Ponude & Cjenovnik</h1>
      <div className="box-container">
        <div className="box">
          <h3 className="title">OSNOVNI</h3>
          <div className="price">
            <span className="currency">KM</span>
            <span className="amount">15</span>
          </div>
          <ul>
            <li>Šišanje</li>
            <li>Pranje i sušenje kose</li>
            <li>Stilizacija</li>
          </ul>
          <a href="#" className="btn">Rezerviraj sada</a>
        </div>
        <div className="box">
          <h3 className="title">SREDNJI</h3>
          <div className="price">
            <span className="currency">KM</span>
            <span className="amount">25</span>
          </div>
          <ul>
            <li>Šišanje</li>
            <li>Pranje i sušenje kose</li>
            <li>Stilizacija i farbanje</li>
          </ul>
          <a href="#" className="btn">Rezerviraj sada</a>
        </div>
        <div className="box">
          <h3 className="title">PREMIUM</h3>
          <div className="price">
            <span className="currency">KM</span>
            <span className="amount">30</span>
          </div>
          <ul>
            <li>Šišanje, pranje i sušenje</li>
            <li>Stilizacija i farbanje</li>
            <li>Specijalni tretmani</li>
          </ul>
          <a href="#" className="btn">Rezerviraj sada</a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;