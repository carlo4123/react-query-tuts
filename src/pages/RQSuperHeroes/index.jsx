import axios from 'axios';
import { useQuery } from "react-query";

const RQSuperHeroes = () => {

  const fetchSuperHeroes = () =>{
  return  axios.get('http://localhost:4000/superheroes')
  }

  const {isLoading, data, isError, error} = useQuery('super-heroes', fetchSuperHeroes )

  if(isLoading){
    return <h2>Loading ....</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }
  return ( 
    <>
     <h2>RQSuperHeroe</h2> 
     {data?.data.map((hero,index) =>{
      return <div key={index}>{hero.name}</div>
     })}
    </>
   )
}
 
export default RQSuperHeroes;