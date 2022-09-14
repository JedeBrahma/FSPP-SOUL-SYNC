import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const API = process.env.REACT_APP_API_URL;
//card of the day
const cardsAPI = "https://rws-cards-api.herokuapp.com/api/v1/cards/random";

//quote of the day
const quotesAPI = "https://type.fit/api/quotes";

export default function NewEntryForm() {
  let navigate = useNavigate();
  const day = new Date();

  const [cards, setCards] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const [allQuotes, setAllQuotes] = useState([]);
  const [entry, setEntry] = useState({
    day: day.toLocaleDateString("default", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    card_name: "",
    card_desc: "",
    liked: false,
    quote: "",
    q_author: "",
    notes: "",
  });
  //card
  useEffect(() => {
    axios
      .get(cardsAPI)
      .then((response) => {
        setCards(response.data.cards);
        setEntry({
          ...entry,
          card_name: response.data.cards[0].name,
          card_desc: response.data.cards[0].meaning_up,
        });
      })
      .catch((error) => console.log(error));
  }, [setEntry]);

  //quote -
  useEffect(() => {
    axios
    .get(quotesAPI)
    .then((response) => {
      setAllQuotes(response.data)
      .catch((error) => console.log(error));
    });
  }, []);

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomIndex].text;
    const author = allQuotes[randomIndex].author;
    setQuote((randomQuote) => ({
      ...randomQuote,
      text: text,
      author: author,
    }));
    setEntry({ ...entry, quote: text, q_author: author });
  };
  useEffect(() => {
    if (allQuotes.length) {
      getQuote();
    }
  }, [allQuotes]);

  const addEntry = (newEntry) => {
    axios
      .post(`${API}/entries`, newEntry)
      .then((response) => {
        setEntry(response.data.payload);
      })
      .then(navigate("/entries"))
      .catch((err) => console.log("catch", err));
  };

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setEntry({ ...entry, liked: !entry.liked });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry(entry);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label
          className="fst-italic"
          style={{
            color: "#C7ded6",
          }}
        >
          Day:{" "}
          {day.toLocaleDateString("default", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Form.Label>
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label htmlFor="card_name" style={{ color: "#65c9c3" }}>
          Card Name:
        </Form.Label>
        <Form.Control
          id="card_name"
          type="text"
          onChange={handleTextChange}
          placeholder={cards[0]?.name}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label htmlFor="card_name" style={{ color: "#7caeb5" }}>
          Card Meaning:
        </Form.Label>
        <Form.Control
          as="textarea"
          size="sm"
          id="card_desc"
          type="text"
          onChange={handleTextChange}
          placeholder={cards[0]?.meaning_up}
        />
      </Form.Group>
      <div>
        <label htmlFor="liked">Like:</label>{" "}
        <input
          id="liked"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={entry.liked}
        />
      </div>

      <Form.Group className="mb-2" >
        <Form.Label htmlFor="quote" style={{ color: "#bce6eb" }}>
          Quote of the Day:
        </Form.Label>
        <Form.Control
          as="textarea"
          size="sm"
          id="quote"
          type="text"
          onChange={handleTextChange}
          placeholder={quote.text}
        />
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label htmlFor="q_quthor" style={{ color: "#65c9c3" }}>
          Author:
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          size="sm"
          id="q-author"
          type="text"
          onChange={handleTextChange}
          placeholder={quote.author}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label
          htmlFor="notes"
          style={{ color: "#0f1a19", fontStyle: "italic" }}
        >
          write your thoughts:
        </Form.Label>
        <Form.Control
          as="textarea"
          id="notes"
          type="text"
          onChange={handleTextChange}
          placeholder={entry.notes}
        />
      </Form.Group>

      <Button
        className="m-2"
        variant="outline-secondary"
        type="submit"
        style={{
          borderRadius: "10px",
          borderColor: "#0f1a19",
          color: "#0f1a19",
        }}
      >
        save this journal
      </Button>
    </Form>
  );
}
