import React from 'react'
import {Button ,  Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import '../style.css'
const NavBBar = () => {
  return (
  
    <div > <Navbar>
    <Container><Button variant="danger" href='/login'>
    المنظومة
        </Button>
        <div className='space'></div><Button variant="danger" href='/register'>
        التّسجيل
        </Button>
          
      <Navbar.Collapse id="navbarScroll" className='container' >
        <Nav
          className="container"
          style={{ maxHeight: '100px' }}
          Concours mutation
        >
          <Nav.Link  href="/">الإستقبال</Nav.Link>
          <Nav.Link  href='/list'>القائمات</Nav.Link>
          <NavDropdown title="الإستقبال" id="navbarScrollingDropdown" >
          <Nav.Link  href='/Add'>Add</Nav.Link>
            <NavDropdown.Item  href="/register">التّسجيل</NavDropdown.Item>
                        <NavDropdown.Divider />
            <NavDropdown.Item href='/login'>
              النفاذ إلى المنظومة
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
    
  </Navbar></div>
  )
}

export default NavBBar