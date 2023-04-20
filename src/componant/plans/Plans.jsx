import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
const Plans = () => {
  return (
    <div className='plans-container'>
      <div className="blur planes-blur-1"></div>
      <div className="blur planes-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
        </div>
      <div className="plans">
        {plansData.map((plan,i)=>(
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>

            <div className="features">
              {plan.features.map((features, i)=>(
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>

                </div>
              ))}
            </div>
            <div><span>See more benefits</span></div>
            <button className='btn'>Join now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
