import React from 'react'
import Welcome from './Welcome';
import Code from './Code';

function ConditionalComponent() {
    let msg;
    const display=true;
    msg=display?" Happy":"unhappy"
    
    return msg;
  
}

export default ConditionalComponent