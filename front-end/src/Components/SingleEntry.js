import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";



export default function SingleEntry({ entry }) {
  let day = new Date(entry.day);
  return (
    <Card.Body>
      <Card.Link href={`/entries/${entry.id}`}>
        <ListGroup>
          <ListGroupItem>
            {day.toLocaleDateString("default", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </ListGroupItem>
        </ListGroup>
      </Card.Link>
    </Card.Body>
  );
}
