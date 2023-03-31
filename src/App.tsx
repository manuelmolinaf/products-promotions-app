import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './pages/navigation/navigation.component'
import { AppContainer } from './App.styles'
import Home from './pages/home/home.component'

function App() {


  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigation />}>
        <Route index element={<Navigate to='/home'/>} />
        <Route path='home' element={<Home/>} />
        {/* <Route path='product/:id' element={} /> */}
        </Route>
      </Routes>
    </AppContainer>
  )
}

export default App
