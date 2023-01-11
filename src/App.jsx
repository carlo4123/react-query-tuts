
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from './pages/Home';
import RQSuperHeroes from './pages/RQSuperHeroes';
import SuperHeroes from './pages/SuperHeroes';
function App() {
 

  return (
    <>
   <Navigation />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="rqsuperheroes" element={ <RQSuperHeroes/>} />
        <Route path="superheroes" element={ <SuperHeroes/> } />
      </Routes>
      </>
 
  )
}

export default App
