import React from 'react'
import MenuItem from '../MenuItem/MenuItem'


function Link() {
  return (
    <div className='links'>
      <MenuItem linktext="HOME" linkurl="/" />
      <MenuItem linktext="SERVICE" linkurl="/service" />
      {/* <MenuItem linktext="CART" linkurl="/cart"/> */}
      <MenuItem linktext="JOIN" linkurl="/join" />
      <MenuItem linktext="LOG IN" linkurl="/log" />
      

    </div>
  )
}

export default Link