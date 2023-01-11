import axios from "axios"
import { useEffect, useState } from "react"

const SuperHeroes = () => {

  const [isLoading, setsLoading] = useState(null)
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes').then(res=>{
      setData(res.data)
      setsLoading(false)
    })
  },[])

  if(isLoading){
    return <h2>Loading....</h2>
  }
  return ( 
    <div>
    <h2>Super Heroes Page</h2>
    {data.map((hero,index)=>{
      return <div key={index}>{hero.name}</div>
    })}
    </div>
   )
}
 
export default SuperHeroes;