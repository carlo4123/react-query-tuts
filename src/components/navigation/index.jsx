import { Link } from "react-router-dom";
const Navigation = () => {
  return ( 
    <div>
      <h1>This is the home page</h1>
      <Link to="/">Home</Link>
      <Link to="/superheroes">SuperHeroes</Link>
      <Link to="/rqsuperheroes">rqsuperheroes</Link>
    </div>
   );
}

export default Navigation;