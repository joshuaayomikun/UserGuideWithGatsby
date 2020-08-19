import React from 'react'

import Submenu from './submenu'
import {Link} from 'gatsby'
import {
    NavItem
} from 'reactstrap';

import {
    PlusCircle,
    MinusCircle
} from 'react-feather';
//   import menuStyles from './menu.module.scss'

const changeFeatherIcon = (isOpen, activeKey, keyValue) => {
    return  activeKey !== keyValue? <PlusCircle className = {
        `feather my-auto ml-2`
} />:<MinusCircle className={`feather my-auto ml-2`}/>},
    onEnteringCollapsible = e => console.log(""),
    loadSubmenu = (submenus, activeKey, isOpen, keyValue) => submenus.length > 0?<Submenu onEntering = {
        onEnteringCollapsible
    }
    isOpen = {
        isOpen
    }
    activeKey = {
        activeKey
    }
    keyPosition = {
        keyValue
    }
    submenus = {
        submenus
    } > </Submenu>:'',
    Menu = props => {
        const {
                isOpen,
                onToggle,
                activeKey,
                menuName,
                submenus =[],
                keyValue,
                href = "#"
            } = props,
            subs = loadSubmenu(submenus, activeKey, isOpen, keyValue),
            toggle = () => {
                // if(!isOpen)
                // onToggle(true);
                // else
                // onToggle(activeKey !== keyValue?false:true);
                // console.log({iskeyValue, keyValue})
                onToggle()
            },
            icon = changeFeatherIcon(isOpen, activeKey, keyValue)
            // console.log({keyValue, activeKey})
        return ( <>
            <NavItem className = "m-0"
            key = {
                keyValue
            } >
            <Link to = {
                href
            }
            activeClassName={`active`}
            className = {
                `d-flex justify-content-between nav-link`
            }
            onClick = {
                toggle
            } > {
                menuName
            } {
                subs !== ""? icon:""
            } </Link> </NavItem>{subs}</>
        )
    }

export default Menu
