import React, {
  useState
} from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Input
} from 'reactstrap';

// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
// import { useStaticQuery, Link, graphql } from "gatsby"
const NavBar = props => {
  const [showSideBar, setShowSideBar] = useState(''), {
      onToggle
    } = props,
    toggle = () => {
      if (showSideBar === ' d-none ')
        setShowSideBar('')
      else
        setShowSideBar(' d-none ')
      onToggle(showSideBar)
    }
  return ( <Navbar sticky = "top"
    className = {
      `p-0`
    }
    color = "light"
    light expand = "md" >
    <NavbarBrand href = {
      `/`
    }
    className = {
      `col-md-3 col-lg-2 mr-0 px-3`
    } > Luminate </NavbarBrand>
      <NavbarToggler href = {
      `#`
    }
    onClick = {
      toggle
    }
    /> <Input type = "text"
    placeholder = "Search"
    aria-label = "Search"/>
    </Navbar>
  )
}

export default NavBar
