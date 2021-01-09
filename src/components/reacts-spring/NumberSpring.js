import React from 'react';
import { animated, useSpring } from 'react-spring'

function NumberSpring() {

  const props = useSpring({
    number: 100,
    from: { number : 0},
    config: {
      duration: 2000,
    }
  })

  return <animated.h1>{props.number.interpolate( x => x.toFixed(0))}</animated.h1>
}

export default NumberSpring;