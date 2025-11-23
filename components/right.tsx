import React from 'react'

function Right() {
  return (
    <div className='max-w-5xl mx-auto px-4 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col space-y-3'>
            <p className='text-xs text-gray-500'>&copy; 2024 Brand. All rights reserved.</p>
            </div>
            <div className='flex justify-end text-gray-500'>
                <a className='text-sm font-normal ml-4'>Instagram</a>
                <a className='text-sm font-normal ml-4'>Twitter</a>
            <a className='text-sm font-normal ml-4'>Facebook</a>
            </div>
        </div>
    </div>
  )
}

export default Right