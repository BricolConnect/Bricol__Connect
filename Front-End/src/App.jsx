import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil_visiteur from './pages/Accueil_visiteur'
import Login from './pages/Login'
import SignUpArtisan from './pages/SignUpArtisan'
import SignUpClient from './pages/SignUpClient'
import SignUpFournisseur from './pages/SignUpFournisseur'
import Accueil_client from './pages/Accueil_client'

function App() {
  return(
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Accueil_visiteur />} />
            <Route path='/connexion' element={<Login />} />
            <Route path='/inscriptionartisans' element={<SignUpArtisan />} />
            <Route path='/inscritpionclient' element={<SignUpClient />} />
            <Route path='/inscriptionfournisseur' element={<SignUpFournisseur />} />
            <Route path='/accueil_client' element={<Accueil_client />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
