import React from 'react'
import Image from 'next/image'

export default function reveal() {
  return (
    <div>
      <Image 
        src={`/reveal-navidad-2023.jpg`}
        width={500}
        height={500}
        alt={`Soy Lucas!!! uwu`}
      />
    </div>
  )
}
