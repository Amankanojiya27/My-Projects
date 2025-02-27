import React from 'react'
export default function Header() {
    const logo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo'></img>
    return (
    
    <div className='header'>
        {logo}
        <h1>Keep</h1>
    </div>
  )
}

