import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Paginas/Inicio'
import Ciudades from './components/Paginas/Ciudades'
import Footer from './components/Footer/Footer'
import City from './components/Paginas/City';
import axios from 'axios';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import './App.css';
import Signin from './components/Usuario/Signin'




function App() {
  const [{ cities }, dispatch] = useStateValue()
  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })
      })


  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/ciudades' element={<Ciudades />} />
          <Route path='/city/:id' element={<City />} />
          <Route path='/signin' element={<Signin />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
