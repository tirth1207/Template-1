import React from 'react'
import { Button } from './ui/button'

function CTA() {
  return (
    <div className='bg-gradient-to-tl from-[#6e6e6e] to-[#bfbfbf] max-w-5xl mx-auto mx-4 gap-4 my-8 p-8 rounded-lg text-center mt-18'>
        <p className='text-3xl font-bold'>How You Take Note?</p>
        <p className='text-lg font-light mx-2'>Join 10,000+ developers using DevBento to supercharge their development workflow.</p>
        <p className='text-lg font-light mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt voluptates placeat illo corporis.</p>
        <div className='flex flex-rows items-center justify-center p-4 gap-4'>
            <Button className=''>
                Start taking notes with Notely
            </Button>
            <Button variant={'outline'}>
                Learn More
            </Button>
        </div>
    </div>
  )
}

export default CTA