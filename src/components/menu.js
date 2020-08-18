import React, {
    useState
} from 'react'

import Submenu from './submenu'

import {
    NavItem,
    NavLink
} from 'reactstrap';

import {
    PlusCircle,
    MinusCircle
} from 'react-feather';
//   import menuStyles from './menu.module.scss'

const changeFeatherIcon = isOpen => !isOpen ? <PlusCircle className = {
        `feather my-auto ml-2`
    } > </PlusCircle>:<MinusCircle className={`feather my-auto ml-2`}></MinusCircle >,
    Menu = props => {
        const [isOpen, setIsOpen] = useState(false), {
                menuName,
                submenus,
                keyValue
            } = props,
            [iskeyValue, setIskeyValue] = useState(keyValue),
            toggle = () => {
                setIskeyValue(keyValue);
                setIsOpen(!isOpen)
                // console.log({iskeyValue, keyValue})
            },
            onEnteringCollapsible = e => console.log(e)
        return ( <>
            <NavItem className = "m-0"
            key = {
                keyValue
            } >
            <NavLink href = {
                `#`
            }
            className = {
                `d-flex justify-content-between`
            }
            onClick = {
                toggle
            } > {
                /* <Home className="feather" /> */ } {
                menuName
            } {
                changeFeatherIcon(isOpen)
            } </NavLink> </NavItem> <Submenu onEntering = {
                onEnteringCollapsible
            }
            isOpen = {
                isOpen
            }
            activeKey = {
                iskeyValue
            }
            keyPosition = {
                keyValue
            }
            submenus = {
                submenus
            } > </Submenu> </>
        )
    }

export default Menu
