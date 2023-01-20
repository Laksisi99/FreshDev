import React from 'react'
import { Outlet } from "react-router-dom";

import Header from "../components/header";

const Common = () => {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}

export default Common
