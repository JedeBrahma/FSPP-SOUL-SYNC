import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
export default function FourOFour() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hey that page does not exist!!</Alert.Heading>
        <p>
     choose option on navbar to go somewhere else!
        </p>
      </Alert>
    );
  }
  return <Button variant="danger" onClick={() => setShow(true)}>Show Alert</Button>;
}