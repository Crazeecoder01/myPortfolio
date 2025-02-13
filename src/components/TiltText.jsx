import React from 'react'

import '../index.css'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.refer} className='leading-[1] absolute mt-5 '>
      <h1 className='text-[5vw] font-[woff3]'> <span className='outlined-text'>Hi, I am</span></h1>
      <h1 className='text-[7.5vw] font-[woff1] tracking-wide'>Himanshu</h1>
      <h1 className='text-[3vw] font-[woff4] tracking-wide'>Software Enthusiast | Web Developer | Electrical Engineer</h1>
    </div>
  )
}

export default TiltText