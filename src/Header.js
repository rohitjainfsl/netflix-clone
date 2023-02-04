import React, { useState } from 'react'

function Header() {
  const [overlay, setOverlay] = useState(false)

  window.onscroll = () => {
    if (window.scrollY > 100)
      setOverlay(true)
    else
      setOverlay(false)
  }


  return (
    <header className={(overlay) ? 'dark' : ''}>
      <div className='logo'>
        <img src='netflix/netflix-logo.png' />
      </div>

      <nav>
        <img src='netflix/green-blue-emoji.png' />
      </nav>

    </header>
  )
}

export default Header