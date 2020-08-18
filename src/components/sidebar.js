import React from 'react'
import Menu from './menu'
import {
  useStaticQuery,
  graphql
} from "gatsby"
import {
  Navbar,
  NavLink,
  Nav,
  NavItem
} from 'reactstrap'

const Sidebar = props => {

    const allMenuQuery = useStaticQuery(graphql `
    query MyQuery {
      allMarkdownRemark(sort: {fields: frontmatter___submenuOrder, order: ASC}) {
        distinct(field: frontmatter___menuOrder)
        edges {
          node {
            frontmatter {
              menu
              menuOrder
              submenu
              submenuOrder
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `),
      {
        toggleSidebar = ' d-none '
      } = props,
      submenuList = allMenuQuery.allMarkdownRemark.edges,
      menuList = allMenuQuery.allMarkdownRemark.distinct.map((menu) => {
        const submenulist = submenuList.filter(sub => {
          const compare = +sub.node.frontmatter.menuOrder === +menu
          // console.log({menu:+sub.node.frontmatter.menuOrder})
          return compare
        }).map(sub => {
          return {
            menu: sub.node.frontmatter.menu,
            menuOrder: +sub.node.frontmatter.menuOrder,
            submenu: sub.node.frontmatter.submenu,
            submenuOrder: +sub.node.frontmatter.submenuOrder,
            url: sub.node.fields.slug
          }
        });
        return {
          menu: submenulist[0].menu,
          menuOrder: submenulist[0].menuOrder,
          submenus: submenulist
        }
      }),
      menuListDiv = menuList.map(menu => <Menu menuName = {
          menu.menu
        }
        key = {
          menu.menu.split(" ").join("_")
        }
        keyValue = {
          menu.menu.split(" ").join("_")
        }
        menuOrder = {
          menu.menuOrder
        }
        submenus = {
          menu.submenus
        } > </Menu>)

        // console.log({menuListDiv})
        return ( <Navbar color = "light"
          light className = {
            `col-md-3` + toggleSidebar + ` col-lg-2 d-md-block sidebar`
          } >
          <div className = {
            `sidebar-sticky`
          } >
          <Nav className = {
            `flex-column ml-0`
          } > {
            /* <NavItem className="m-0 px-0">
                            <Input type="text" />
                          </NavItem> */
          } <NavItem className = {
            `m-0`
          } >
          <NavLink href = "/" > Home </NavLink> </NavItem> {
            menuListDiv
          } </Nav> </div> </Navbar>
        )
      }

    export default Sidebar