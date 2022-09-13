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
        <Card
          className="shadow-lg"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Card.Body>
            <Card.Title
              className="fst-italic"
              style={{
                color: "#C7ded6",
              }}
            >
              {day.toLocaleDateString("default", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Card.Title>
            <Card.Title style={{ color: "#65c9c3" }}>
              Card of the Day: {entry.card_name}
            </Card.Title>
            <Card.Subtitle
              style={{ backgroundColor: "#5e7280", color: "#b3e3d9" }}
            >
              Meaning: {entry.card_desc}
            </Card.Subtitle>
            <p>{entry.liked ? <span> 💖 </span> : null}</p>
            <Card.Title
              style={{ backgroundColor: "#7caeb5", color: "#bce6eb" }}
            >
              Quote of the Day: {entry.quote}
            </Card.Title>
            <Card.Text
              style={{
                color: "#416f6c",
              }}
            >
              Author: {entry.q_author}
            </Card.Text>
            <Card.Title
              className="fst-italic"
              style={{
                color: "#0f1a19",
              }}
            >
              Journal:{" "}
            </Card.Title>
            <Card.Text
              style={{
                backgroundColor: "#abe0d5",
                color: "#0f1a19",
              }}
            >
              {entry.notes}
            </Card.Text>
          </Card.Body>

          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button
                className="m-2"
                variant="outline-secondary"
                href={`/entries`}
                style={{
                  borderRadius: "10px",
                  borderColor: "#0f1a19",
                  color: "#0f1a19",
                }}
              >
                Back
              </Button>{" "}
            </ButtonGroup>
            <ButtonGroup aria-label="2nd group">
              <Button
                className="m-2"
                variant="outline-warning"
                href={`/entries/${id}/edit`}
                style={{
                  borderRadius: "10px",
                  borderColor: "#0f1a19",
                  color: "#0f1a19",
                }}
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
                style={{
                  borderRadius: "10px",
                  borderColor: "#0f1a19",
                  color: "#0f1a19",
                }}
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
