import React from 'react'
import maze from '../../assets/images/maze.png'


const Maze = () => {
  return (
    <div className="maze">
      <div className="text">
        <h2>Spaceship Maze</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          officiis debitis eveniet recusandae similique, assumenda sed error
          quas aspernatur provident libero consequuntur, magni temporibus vitae
          rem!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa
          fugiat facilis. Consequatur modi quibusdam ab aliquid repellendus
          quasi iusto!
        </p>

        <button>PLAY GAME</button>
      </div>

      <div className="pic">
        <img src={maze} alt="" />
      </div>
    </div>
  );
}

export default Maze
