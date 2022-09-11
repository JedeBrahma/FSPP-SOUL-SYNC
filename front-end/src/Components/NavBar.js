
import { Navbar, Container, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";


export default function NavBar() {
  return (
    <Container fluid>  
    <Navbar style={{backgroundColor: 'transparent'}}>
    <ButtonToolbar
            className="justify-space-between"
            aria-label="Toolbar with Button groups"
          >
             <ButtonGroup aria-label="2nd group">
              <Button
                className="m-2"
                variant="outline-success"
                href={`/entries/new`}
              >
                New Journal Entry
              </Button>{" "}
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="m-2"
                id="btnGroupAddon2"
                variant="outline-dark"
                href="/entries">View Journal
              </Button>
            </ButtonGroup>
      {/* <Button  style={{backgroundColor:'#cce7e8'}} >
        <Link to="/entries/new">New Journal Entry</Link>
      </Button> */}
      {/* <Button variant="outline-secondary">
      {day.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})}
      </Button> */}
      {/* <Navbar.Brand href="/entries">View Journal</Navbar.Brand> */}
    
    </ButtonToolbar>
    </Navbar>
    </Container>
  );
}