import Common from '@partials/About/Common'
import Gallery from '@partials/About/Gallery'
import React from 'react'

export default function About() {
  return (
    <>
      <img
        className="floating-bubble-1 absolute right-0 top-0 -z-[1]"
        src="/images/floating-bubble-1.svg"
        alt=""
      />
      <img
        className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
        src="/images/floating-bubble-2.svg"
        alt=""
      />
      <img
        className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
        src="/images/floating-bubble-3.svg"
        alt=""
      />
      <Common />
      <Gallery />
    </>
  )
}
