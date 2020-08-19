import React from 'react'
import {
    Link
} from 'gatsby'
import {
    Menu
} from 'react-feather'

import {
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap'

const makeSubMenu = submenus => submenus.map(submenu =>
        <NavItem className = "m-0"
        key = {
            submenu.submenu
        }>
        <Link activeClassName={`active`} to = {
            submenu.url
        }
        className = "nav-link" >
        <Menu className = {
            `feather`
        }
        />{submenu.submenu} </Link> 
        </NavItem>
    ),
    Submenu = props => {
        const {
            submenus,
            isOpen,
            onEntering,
            activeKey,
            keyPosition
        } = props,
        onEnteringCollapse = e => onEntering(e),
            // [toggle, setToggle] = useState(isOpen),
            submenusList = makeSubMenu(submenus)
        console.log({activeKey, keyPosition, isOpen})
        return ( <Collapse onEntering = {
                onEnteringCollapse
            }
            isOpen = {
                activeKey === ""? false: activeKey === keyPosition? isOpen:!isOpen
            } >
            <Nav className = {
                `flex-column ml-0`
            } > {
                submenusList
            } </Nav> </Collapse>
        )
    }

export default Submenu