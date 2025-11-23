import React from 'react'
import Logo from './icon'

function Navbar() {
  return (
    <div className="w-full h-32 sticky top-0 flex items-center z-50 px-6">
      <Logo className="h-8 w-8" />
      <p className='text-2xl font-bold ml-2'>Brand</p>
    </div>
  )
}

export default Navbar
