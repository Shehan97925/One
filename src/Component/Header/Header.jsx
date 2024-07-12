import React, { useState, useEffect } from 'react'

import Link from './Link/Link'
import './Header.css'
import logo from '../../assets/advotexLogowite.png'

function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div id="header" className={shrink ? 'shrink' : ''}>
        <img src={logo} className='logo' />
        <div>
          <Link />
        </div>
      </div>
    </>
  )
}

export default Header