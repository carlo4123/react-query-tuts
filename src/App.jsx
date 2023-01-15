
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from './pages/Home';
import RQSuperHeroes from './pages/RQSuperHeroes';
import SuperHeroes from './pages/SuperHeroes';

function App() {
 const queryClient = new QueryClient()

  return (

  <QueryClientProvider client={queryClient} >
   <Navigation />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="rqsuperheroes" element={ <RQSuperHeroes/>} />
        <Route path="superheroes" element={ <SuperHeroes/> } />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
 
 
  )
}

export default App
