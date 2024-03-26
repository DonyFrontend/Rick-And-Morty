import './App.css'
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import Location from './pages/Location/Location';
import { locationType, locationDimensions } from './utils/locationData';
import Episodes from './pages/Episodes/Episodes';
import DefineEpisode from './pages/Episodes/DefineEpisode/DefineEpisode';
import DefineLocation from './pages/Location/DefineLocation/DefineLocation';
import * as data from "./utils/data";
import DefinePerson from './pages/MainPage/DefinePerson/DefinePerson';

function App() {

  return (
    <>
      <Header/>



      <div style={{marginTop: 120}}>
        <Routes>
          <Route path='/' element={<MainPage _species={data.speciesOption} _gender={data.genderOptions} _status={data.statusOptions}/>}></Route>
          <Route path='/:id' element={<DefinePerson/>}></Route>
          <Route path='/Location' element={<Location _type={locationType} _dimension={locationDimensions}/>}></Route> 
          <Route path='/Location/:id' element={<DefineLocation/>}></Route>
          <Route path='/Episodes' element={<Episodes/>}></Route>
          <Route path='/Episodes/:id' element={<DefineEpisode/>}></Route>
        </Routes>

      </div>

    </>
  )
}

export default App
