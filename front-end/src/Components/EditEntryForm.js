import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const API = process.env.REACT_APP_API_URL;

export default function EditEntryForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [entry, setEntry] = useState({
    day: "",
    card_name: "",
    card_desc: "",
    liked: false,
    quote: "",
    q_author: "",
    notes: "",
  });

  const updateEntry = (updatedEntry) => {
    axios
      .put(`${API}/entries/${id}`, updatedEntry)
      .then(
        () => {
          navigate(`/entries/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.log.warn("catch", err));
  };
  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setEntry({ ...entry, liked: !entry.liked });
  };

  useEffect(() => {
    axios.get(`${API}/entries/${id}`).then(
      (response) => setEntry(response.data.payload),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry(entry);
  };
  let day = new Date(entry.day);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>
          Day:{" "}
          {day.toLocaleDateString("default", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-2" controlId="Form.ControlInput1">
        <Form.Label htmlFor="card_name">Card Name:</Form.Label>
        <Form.Control
          id="card_name"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.card_name}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="Form.ControlInput2">
        <Form.Label htmlFor="card_name">Card Meaning:</Form.Label>
        <Form.Control
          as="textarea"
          size="sm"
          id="card_desc"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.card_desc}
        />
      </Form.Group>
      <label htmlFor="liked">Like:</label>
      <input
        id="liked"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={entry.liked}
      />
      <br />
      
      <Form.Group className="mb-2" controlId="Form.ControlInput3">
        <Form.Label htmlFor="quote">Quote of the Day:</Form.Label>
        <Form.Control
          as="textarea"
          size="sm"
          id="quote"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.quote}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="Form.ControlInput4">
        <Form.Label htmlFor="q_quthor">Author:</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          size="sm"
          id="q-author"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.q_author}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="Form.ControlInput5">
        <Form.Label htmlFor="notes">write your thoughts:</Form.Label>
        <Form.Control
          as="textarea"
          id="notes"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.notes}
        />
      </Form.Group>

      <Button className="m-2" variant="outline-success" type="submit">
        save this journal
      </Button>
      <br />
      <br />
      <Button className="m-2" variant="outline-dark" href={`/entries/${id}`}>
        Nevermind
      </Button>{" "}
    </Form>
  );
}
