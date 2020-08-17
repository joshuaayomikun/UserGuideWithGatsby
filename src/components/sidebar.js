import React from 'react'
import Menu from './menu'
import { useStaticQuery, graphql } from "gatsby"
import {
  Navbar,
  NavLink,
  Nav,
  NavItem
} from 'reactstrap'

export default function Sidebar({toggleSidebar = ' d-none '}) {
  
  const allMenuQuery = useStaticQuery(graphql`
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
  `)
  // onsole.log({allMenuQuery})
  const submenuList = allMenuQuery.allMarkdownRemark.edges
  // console.log({submenuList})

  const menuList = allMenuQuery.allMarkdownRemark.distinct.map((menu) =>  
  {
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
  });

  // console.log({menuList})
  
  const menuListDiv = menuList.map(menu => <Menu menuName={menu.menu} key={menu.menu} menuOrder={menu.menuOrder} submenus={menu.submenus}></Menu>)
    
    // console.log({menuListDiv})
    return (
        <Navbar color="light" light className={`col-md-3` + toggleSidebar + ` pt-5 col-lg-2 d-md-block sidebar`}>
          <div className={`sidebar-sticky`}>
            <Nav className={`flex-column ml-0`}>
              {/* <NavItem className="m-0 px-0">
                <Input type="text" />
              </NavItem> */}
              <NavItem className={`m-0`}>
                <NavLink href="/" >Home</NavLink>
              </NavItem>
              {menuListDiv}
            </Nav>
          </div>
        </Navbar>
    )
}