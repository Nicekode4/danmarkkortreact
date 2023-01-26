import React, { useEffect, useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      setTimeout(() => {
        setCount(count + 1)
      }, 1000);
    }, [])
    
  return (
    <h2>I got {count} mental issues</h2>
  )
}

export default Counter2