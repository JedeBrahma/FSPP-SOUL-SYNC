import {
  Navbar,
  Container,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid>
      <Navbar style={{ backgroundColor: "transparent" }}>
        <ButtonToolbar
          className="justify-space-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="2nd group">
            <Button
              className="m-2"
              variant="outline-info"
              href={`/entries/new`}
              style={{
                borderRadius: "10px",
                borderColor: "#7ecdc7",
                color: "#61b0aa",
              }}
            >
              New Journal Entry
            </Button>{" "}
          </ButtonGroup>
          <ButtonGroup>
            <Button
              className="m-2"
              id="btnGroupAddon2"
              variant="outline-secondary"
              href="/entries"
              style={{
                borderRadius: "10px",
                borderColor: "#7ecdc7",
                color: "#61b0aa",
              }}
            >
              View Journal
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Navbar>
    </Container>
  );
}
