import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function APIFetch() {
    const [apiData, setApiData] = useState([])
useEffect(() => {
const getData = async () => {
  const url = 'https://api.mediehuset.net/sdg/goals'  
  const result = await axios.get(url)
  setApiData(result.data.items)
  console.log(result.data.items);
 
}
  getData()

console.log(apiData);
}, [setApiData])
return (
    <>
<h1>Verdensmålene</h1>
<ul>
    {apiData && apiData.map(value => {
        return (
            <li key={value.id}><Link to={`/goals/${value.id}`}>{value.title}</Link></li>
        )
    })}
</ul>
<a href="https://api.mediehuset.net/sdg/goals/1">Goal</a>
</>
  )   
        

 
}

export { APIFetch }