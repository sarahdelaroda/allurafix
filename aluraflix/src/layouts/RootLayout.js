import { dividerClasses } from '@mui/material'
import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../componentes/Header'

function RootLayout() {
  return (
  <div className="root-layout">
        <Header/>
        <main>
            <Outlet/>
        </main>

  </div>
  )
}
/*realizado por angela martinez*/

export default RootLayout