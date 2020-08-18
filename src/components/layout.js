import React, {
  useState
} from 'react';
import {
  Container
} from 'reactstrap'
import NavBar from "./navbar"
import Sidebar from "./sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/dashboard.css'
import '../styles/index.scss'

// import { css } from "@emotion/core"

// import { rhythm } from "../utils/typography"

const Layout = props => {
  const [showSideBar, setShowSideBar] = useState(' d-none '),
    toggle = (status) => {
      setShowSideBar(status)
    }, {
      children
    } = props;
  return ( <>
    <NavBar onToggle = {
      toggle
    }/>

    <Sidebar toggleSidebar = {
      showSideBar
    }/> <main role = "main"
    className = "col-md-9 ml-sm-auto col-lg-10 px-md-4" >
    <Container > {
      children
    } </Container> </main> </>
  )
}
export default Layout