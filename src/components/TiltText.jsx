import React from 'react'

import '../index.css'
import { Link } from 'react-router-dom'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.refer} className='leading-[1] absolute mt-5 '>
      <h1 className='text-[5vw] font-[woff3]'> <span className='outlined-text'>Hi, I am</span></h1>
      <h1 className='text-[7.5vw] font-[woff1] tracking-wide'>Himanshu</h1>
      <h1 className='text-[3vw] font-[woff4] tracking-wide'><Link>Software Enthusiast</Link> | <Link>Web Developer</Link> | <Link>Electrical Engineer</Link></h1>
    </div>
  )
}

export default TiltText