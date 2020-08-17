
            
import React  from 'react'
import { Link } from 'gatsby';
import { Menu } from 'react-feather';

import {
    Collapse,
    Nav,
    NavItem
  } from 'reactstrap';

export default function Submenu({submenus, isOpen}) {
    const submenusList = submenus.map(submenu => 
        <NavItem className="m-0" key={submenu.submenu}>
            <Link to={submenu.url} className="nav-link">
                <Menu className={`feather`} />{submenu.submenu}
            </Link>
        </NavItem>
    )
    return (
        <Collapse isOpen={isOpen} >
            <Nav className={`flex-column ml-0`}>
                {submenusList}
            </Nav>
        </Collapse>
    )
}