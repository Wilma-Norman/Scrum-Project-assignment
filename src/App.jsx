import Artifacts from './Pages/Artifacts'
import Essence from './Pages/Essence'
import Home from './Pages/Home'
import ScrumTeam from './Pages/ScrumTeam'
import SprintEvents from './Pages/SprintEvents'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='essence' element={<Essence />}/>
        <Route path='artifacts' element={<Artifacts />}/>
        <Route path='scrum-team' element={<ScrumTeam />}/>
        <Route path='events' element={<SprintEvents />}/>
      </Routes>
    </>
  )
}

export default App
