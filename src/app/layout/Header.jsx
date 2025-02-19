import React from 'react'
import logo from "../../images/react.png";

function Header() {
  return (
    <div>
      <img src={logo} alt='' style={{height : "35px",verticalAlign : "top"}}/>
      <span className='h2 pt-4 text-white-50'>React Course- Reduxopedia</span>
    </div>
  )
}

export default Header
