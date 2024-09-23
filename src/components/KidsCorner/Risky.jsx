import React from 'react'
import risky1 from '../../assets/images/risky1.png'
import risky2 from '../../assets/images/risky2.png'


const Risky = () => {
  return (
    <div className="risky">
      <div className="text">
        <h2>Risky Way</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptates vitae iusto corrupti totam eveniet harum
          adipisci in officia quod? Id debitis, facere cupiditate vel, minus
          corrupti laborum odio autem laudantium quam quis dolore inventore
          possimus, hic optio facilis consequatur! Officiis repellendus,
          deleniti explicabo, totam fugit iure facere doloribus qui minus
          incidunt consectetur nihil labore distinctio expedita odit sapiente
          molestias perferendis? Ex quaerat a beatae, voluptas aliquid sit
          perspiciatis omnis voluptates veritatis expedita eveniet, eius autem
          excepturi quidem tempora, soluta similique.
        </p>

        <button>PLAY GAME</button>
      </div>

      <div className="pic">
        <img className="img1" src={risky1} alt="" />
        <img className="img2" src={risky2} alt="" />
      </div>
    </div>
  );
}

export default Risky
