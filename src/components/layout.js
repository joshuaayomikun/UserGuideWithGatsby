import React, { useState } from 'react';
import {Container} from 'reactstrap'
import NavBar from "./navbar"
import Sidebar from "./sidebar"
import '../styles/index.scss'

// import { css } from "@emotion/core"

// import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(' d-none ');
  const toggle = (status) => {
    setShowSideBar(status)
  };
  return (
    <>
      <NavBar onToggle={toggle} />
      
      <Sidebar toggleSidebar={showSideBar} />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <Container>
        {children}
      </Container>
      </main>
    </>
  )
}