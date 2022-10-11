import './App.css'
// import PersonForm from './components/PersonForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import Detail from './components/Detail'
import Header from './components/Header'
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default />
          <Route element={<Detail />} path='/people/:id' />
          <Route element={<Update />} path='/people/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
