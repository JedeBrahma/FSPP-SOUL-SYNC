import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function EntryDetails() {
  const [entry, setEntry] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/entries/${id}`)
      .then((response) => {
        setEntry(response.data.payload);
      })
      .catch((error) => console.error(error));
  }, [id, navigate, API]);

  const deleteEntry = () => {
    axios
      .delete(`${API}/entries/${id}`)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((err) => console.error("catch", err));
  };
  const handleDelete = () => {
    deleteEntry();
  };
  let day = new Date(entry.day);
  return (
    <div>
      <Container className="mt-3">
        <Card className="shadow-lg">
          <Card.Body>
            <Card.Title>
              {day.toLocaleDateString("default", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Card.Title>
            <Card.Title>Card of the Day: {entry.card_name}</Card.Title>
            <Card.Subtitle>Meaning: {entry.card_desc}</Card.Subtitle>
            <p>{entry.liked ? <span> 💖 </span> : null}</p>
            <Card.Title>Quote of the Day: {entry.quote}</Card.Title>
            <Card.Text>Author: {entry.q_author}</Card.Text>
            <Card.Title>Journal: </Card.Title>
            <Card.Text>{entry.notes}</Card.Text>
          </Card.Body>
          {/* <div className="showNavigation"> */}
          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button
                className="m-2"
                variant="outline-dark"
                href={`/entries`}
              >
                Back
              </Button>{" "}
            </ButtonGroup>
            <ButtonGroup aria-label="2nd group">
              <Button
                className="m-2"
                variant="outline-success"
                href={`/entries/${id}/edit`}
              >
                Edit
              </Button>{" "}
            </ButtonGroup>
            <ButtonGroup>
              <Button
                className="m-2"
                id="btnGroupAddon2"
                variant="outline-danger"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Card>
      </Container>
    </div>
  );
}
