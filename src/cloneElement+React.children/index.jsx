//Compound Component

import React, { cloneElement, useState } from 'react'
import { Children } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

// const Parent = ({children}) => {
//   return Children.map(children, (child) => {
//     const newChild = cloneElement(child, {...s})
//     return newChild
//   })
// }

const TurnOnOff = ( {children}) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn(s => !s)

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn
    })
    return newChild
  })
}

const TurnedOn = ({isOn, children}) => isOn ? children : null;
const TurnedOff = ({isOn, children}) => isOn ? null : children;
const TurnButton = ({isOn, onTurn, ...props}) => {
  return <button {...props} onClick={onTurn}>Turn {isOn ? 'Off' : 'On'}</button>
}

const P = ({children}) => {
  return <p {...s}>{children}</p>
}


const Index = () => {
  return (
    <TurnOnOff>
      <TurnedOn><P>Aqui as coisas que vão acontecer quando estiver ON.</P></TurnedOn>
      <TurnedOff><P>Aqui vem as coisas do OFF.</P></TurnedOff>
      <TurnButton {...s}/>
    </TurnOnOff>
  )
}

export default Index
