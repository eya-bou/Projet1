import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Acceuil from '../pages/acceuil'
import Gestion from '../pages/gestion'
export default function () {
  return (
<div>
    <Routes>
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/Gestion' element={<Gestion/>}/>
        <Route path='/Espace' element={<Gestion/> }/>
       
    </Routes>
 </div>
  )
}
