import React from 'react'

import pacman from "../../assets/images/pacman.png"

const Pacman = () => {
  return (
    <div className="pacman">
      <div className="text">
        <h2>Pacman</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt
          fugit, reprehenderit neque repudiandae expedita quisquam odio unde,
          molestias repellat accusantium consequuntur minima! Dolores eos
          voluptates accusamus cupiditate harum tempora quia quidem voluptas
          perspiciatis quaerat earum dolorum quisquam, natus iste nihil ducimus
          culpa laudantium beatae voluptatibus. Vero esse quas ut! Natus,
          explicabo ipsam impedit repudiandae aperiam iure ullam est illo
          veritatis rerum dolorum quod, ex quae dolore consequatur accusamus
          dignissimos fugiat quaerat sunt, tempora quam nobis aspernatur
          cupiditate. Dolor, soluta a!
        </p>

        <button>PLAY GAME</button>
      </div>

      <div className="pic">
        <img src={pacman} alt="" />
      </div>
    </div>
  );
}

export default Pacman
