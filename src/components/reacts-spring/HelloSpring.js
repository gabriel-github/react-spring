import React from 'react';
import { animated, useSpring } from 'react-spring'

function HelloSpring() {

  const props = useSpring({
    opacity: 1,  
    from: {opacity: 0},
    config: {
      duration: 2000,
      friction: 500,
    }
  })

  return <animated.h1 style={props}>I will fade in</animated.h1>
}

export default HelloSpring;