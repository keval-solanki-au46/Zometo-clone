import React from 'react'
import './card.scss'
import dine from '../../Assets/Image/Dine-Out.png'
import night from '../../Assets/Image/Night-Life.png'
import online from '../../Assets/Image/Online-Food.png'

const card = () => {
  return (
    <div className='card'>
            <div className="cardimg">
                    <img src={dine} alt="dine" />
                    <h1>Order Online</h1>
                    <span>Stay home and order to your doorstep</span>
            </div>
            <div className="cardimg">
                    <img src={night} alt="night" />
                    <h1>Nightlife and clubs</h1>
                    <span>Explore the city's top nightlife outlets</span>
            </div>
            <div className="cardimg">
                    <img src={online} alt="online" />
                    <h1>Dinning</h1>
                    <span>views the city's favourite venues</span>
            </div>
    </div>
  )
}

export default card