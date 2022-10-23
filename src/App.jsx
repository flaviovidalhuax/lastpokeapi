
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Home from './page/Home'
import Pokedex from './page/Pokedex'
import PokedexById from './page/PokedexById'
import ProyecyedRouts from './page/ProyecyedRouts'


function App() {
  

  return (
    <div className="App">
   
      <Routes>
            <Route path ='/' element={ <Home/>} />
            <Route element={<ProyecyedRouts />}/> 
                <Route path='/pokedex' element={ <Pokedex />}/>
                <Route path='/pokedex/:id' element={<PokedexById />}/>
            <Route />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


// <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route element={<ProtectedRoutes />}>
//           <Route path='/pokedex' element={<Pokedex />} />
//           <Route path='/pokedex/:id' element={<PokedexById />} />
//         </Route>
//   </Routes>
