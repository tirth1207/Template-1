import React from 'react'
import Logo from './icon'
import Divider from './divider'

function Footer() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Section */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Logo />
            Brand
          </div>
          <p className="max-w-sm text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto ipsam illum eos fugiat voluptatibus illo nam rerum.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-end">
          <div className="grid grid-cols-3 gap-8 text-sm text-gray-600">

            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-gray-800">Product</h4>
              <a className="hover:text-black cursor-pointer">Overview</a>
              <a className="hover:text-black cursor-pointer">Features</a>
              <a className="hover:text-black cursor-pointer">Pricing</a>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-gray-800">Company</h4>
              <a className="hover:text-black cursor-pointer">About</a>
              <a className="hover:text-black cursor-pointer">Careers</a>
              <a className="hover:text-black cursor-pointer">Press</a>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-gray-800">Resources</h4>
              <a className="hover:text-black cursor-pointer">Docs</a>
              <a className="hover:text-black cursor-pointer">Support</a>
              <a className="hover:text-black cursor-pointer">Blog</a>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}


export default Footer