import React from 'react'
import { cards } from "../data/cards";
import { Link } from "react-router-dom";


export default function Cards() {
  return (
      <ul className="cards">
              {cards.map((card, id) => (
          <li className="card" key={id}>
   <img
              src={card.img}
              alt=""
            />
            <section className="copy">
              <h3>{card.titolo}</h3>
              <p>
               {card.testo}
              </p>
              <button><Link to={card.url}>Scopri</Link> </button>
            </section>
            </li>
              ))} 
      </ul>
  )
}
