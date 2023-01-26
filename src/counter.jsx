import React, { useEffect, useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(98)
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1)
        }, 1000);
    } ,[]);
    
  return (
    <h1>I got {counter} problems </h1>
  )

}

export default Counter