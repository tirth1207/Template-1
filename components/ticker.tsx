import React from 'react'
import { Marquee } from './ui/marquee'

function Ticker() {
  return (
    <div className='my-4 mx-2'>
      <Title text={['100% Illegel', '100M+ Users', '50+ Sponseres', '60M+ New Users']} />
    </div>
  )
}

// Fix: Accept props as an object, not as a positional argument
function Title({ text }: { text: string[] }) {
  return (
      <Marquee pauseOnHover={false} repeat={10} className='mask-l-from-60% mask-l-to-100% mask-r-from-60% mask-r-to-100%'>
        {text.map((word, index) => (
          <span key={index} className="mx-4 text-2xl font-medium ">
            {word}
          </span>
        ))}
      </Marquee>
  )
}

export default Ticker