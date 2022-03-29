import React from "react"
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
const NavComponants=()=>{
    return(
        <div>
        <Navbar bg="dark" variant="lg">
  <Container fluid>
    <Navbar.Brand href="#" className="bg-$purpal text-warning">HOTEL</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 text-light"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1" className="text-light">Home</Nav.Link>
        <Nav.Link href="#action2" className="text-light">ABOUT</Nav.Link>
        <NavDropdown title={<span className="text-light my-auto">FOOD CATEGORY</span>}id="navbarScrollDropdown">
          <NavDropdown.Item href="#action3" className="bg-dark text-light">Veg</NavDropdown.Item>
          <NavDropdown.Item href="#action4"className="bg-dark text-light">Non-Veg</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="bg-dark text-light">
            SEA FOOD
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#"  className="text-light">
          ROOM
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}
export default NavComponants