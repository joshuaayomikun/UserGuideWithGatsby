import React, {useState} from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Input
} from 'reactstrap';
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
// import { useStaticQuery, Link, graphql } from "gatsby"
export default function NavBar({onToggle}) {
  const [showSideBar, setShowSideBar] = useState('');
  const toggle = () =>  {
    if(showSideBar === ' d-none ')
    setShowSideBar('')
    else
      setShowSideBar(' d-none ')
    onToggle(showSideBar)
  }
    // const data = useStaticQuery(
    //     graphql`
    //       query {
    //         site {
    //           siteMetadata {
    //             title
    //           }
    //         }
    //       }
    //     `
    //   )
    return (
      <Navbar sticky="top" className={`p-0`}  color="light" light expand="md" >
        <NavbarBrand href={`/`} className={`col-md-3 col-lg-2 mr-0 px-3`} > Luminate</NavbarBrand>
        {/* <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">Luminate</a> */}
        <NavbarToggler href={`#`} onClick={toggle} />
        <Input type="text" placeholder="Search" aria-label="Search" />
      </Navbar>
    )
}
