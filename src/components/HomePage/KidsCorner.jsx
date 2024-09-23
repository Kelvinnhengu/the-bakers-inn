import React from 'react'
import kids1 from '../../assets/images/kids1.png'
import kids2 from '../../assets/images/kids2.png'
import kids3 from '../../assets/images/kids3.png'
import mario from '../../assets/images/Mario.png'

const KidsCorner = () => {
  return (
    <div className='kids-corner'>
      <div className="pics">
        <img className='kadiki' src={kids1} alt="" />
        <img className='mario' src={mario} alt="" />
        <img className='mushroom' src={kids2} alt="" />
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic doloremque, ullam libero doloribus quis odit incidunt neque? Perferendis, neque nostrum!</p>

        <button>PLAY GAMES</button>

      </div>
    </div>
  )
}

export default KidsCorner
