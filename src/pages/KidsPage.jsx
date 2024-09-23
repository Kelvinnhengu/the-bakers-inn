import React from 'react'
import KidsHero from '../components/KidsCorner/KidsHero'
import Maze from "../components/KidsCorner/Maze";
import Risky from "../components/KidsCorner/Risky";
import Pacman from "../components/KidsCorner/Pacman";

const KidsPage = () => {
  return (
    <div>
      <KidsHero/>
      <Maze/>
      <Risky/>
      <Pacman/>

    </div>
  )
}

export default KidsPage
