import React from 'react'
import cart from '../../assets/cart.png'
import './scroll.css'

const Scroll = () => {
  return (
    <div className='scroll'>
      <div className="group">
        <div className="scroll-item">1</div>
        <div className="scroll-item">2</div>
        <div className="scroll-item">3</div>
        <div className="scroll-item">4</div>
        <div className="scroll-item">5</div>
        <div className="scroll-item">6</div>
        <div className="scroll-item">7</div>
        <div className="scroll-item">8</div>
        <div className="scroll-item">9</div>
      </div>
      <div aria-hidden className="group">
        <div className="scroll-item">1</div>
        <div className="scroll-item">2</div>
        <div className="scroll-item">3</div>
        <div className="scroll-item">4</div>
        <div className="scroll-item">5</div>
        <div className="scroll-item">6</div>
        <div className="scroll-item">7</div>
        <div className="scroll-item">8</div>
        <div className="scroll-item">9</div>
      </div>
      
    </div>
  )
}

export default Scroll