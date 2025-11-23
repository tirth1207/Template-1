import React from 'react'

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="6" height="6" fill="black" stroke='black'/>
        <rect x="6" width="6" height="6" fill="black" stroke='black'/>
        <rect x="12" width="6" height="6" fill="black" stroke='black'/>
        <rect x="12" y="6" width="6" height="6" fill="black" stroke='black'/>
        <rect y="12" width="6" height="6" fill="black" stroke='black'/>
        <rect x="12" y="12" width="6" height="6" fill="black" stroke='black'/>
    </svg>

  )
}

export default Logo