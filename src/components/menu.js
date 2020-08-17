
import React, {useState}  from 'react'

import Submenu from './submenu'

import {
    NavItem,
    NavLink
  } from 'reactstrap';

export default function Menu({children, menuName, submenus, keyValue }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <NavItem className="m-0" key={keyValue}>
                <NavLink href={`#`} onClick={toggle}>
                    {/* <Home className="feather" /> */}
                    {menuName}
                </NavLink>
            </NavItem>
            <Submenu isOpen={isOpen} submenus={submenus}></Submenu>
        </>
    )
}