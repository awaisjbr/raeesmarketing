import React from 'react';
import Typewriter from "typewriter-effect"

const TypeWriterComponent = ({color, text}) => {
  return (
    <div className={`text-${color}`}>
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default TypeWriterComponent
