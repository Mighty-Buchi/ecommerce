import React from 'react'
import cart from '../../assets/cart.png'
import './scroll2.css'
import img from '../../assets/9.jpg'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'

const Scroll2 = () => {
  return (
    <div className='scroll2'>
      <div className="group2">
        <div className="scroll2-item"><img src={logo1} alt="" /></div>
        <div className="scroll2-item"><img src={logo2} alt="" /></div>
        <div className="scroll2-item"><img src={logo3} alt="" /></div>
        <div className="scroll2-item"><img src={logo4} alt="" /></div>
        <div className="scroll2-item"><img src={logo5} alt="" /></div>
        <div className="scroll2-item"><img src={logo6} alt="" /></div>
        <div className="scroll2-item"><img src={logo7} alt="" /></div>
        <div className="scroll2-item"><img src={logo8} alt="" /></div>
        
      </div>
      <div aria-hidden className="group2">
        <div className="scroll2-item"><img src={logo1} alt="" /></div>
        <div className="scroll2-item"><img src={logo2} alt="" /></div>
        <div className="scroll2-item"><img src={logo3} alt="" /></div>
        <div className="scroll2-item"><img src={logo4} alt="" /></div>
        <div className="scroll2-item"><img src={logo5} alt="" /></div>
        <div className="scroll2-item"><img src={logo6} alt="" /></div>
        <div className="scroll2-item"><img src={logo7} alt="" /></div>
        <div className="scroll2-item"><img src={logo8} alt="" /></div>
      </div>
      
    </div>
  )
}

export default Scroll2