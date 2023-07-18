import Button from 'react-bootstrap/Button';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHead() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <div className="col-lg-2">
          <Navbar.Brand href="#">NFTERS</Navbar.Brand>
        </div>
        <div className="col-4">
          <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link href="#action1">Marketplace</Nav.Link>
              <Nav.Link href="#action1">Recource</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
            
            </Nav>
        </div>
        <div className="col-lg-6 ">
            <Form className="d-flex  col-lg-6">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label=" Search"
               className='searchInput'
              />
              
             <div className=' col-lg-3'>
                <Button className='firstBtn' variant="outline-success">Search</Button> 
             </div >
             <div className=' col-lg-3'>
                <Button className='secoundBtn' variant="outline-success">Connect</Button> 
             </div >
            </Form>
        </div>
          
      </Container>
    </Navbar>
  );
}

export default NavbarHead;