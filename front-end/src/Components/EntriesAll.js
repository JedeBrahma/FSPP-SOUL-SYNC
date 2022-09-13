import axios from "axios";
import { useState, useEffect } from "react";
import SingleEntry from "./SingleEntry";
import { Container } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function EntriesAll() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/entries`)
      .then((response) => setEntries(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Container">
      <div className="col-xs-12">
        <h3>Journals History</h3>
        {entries.map((entry) => {
          return (
            <Container fluid>
              <row>
                <SingleEntry key={entry.id} entry={entry} />
              </row>
            </Container>
          );
        })}
      </div>
    </div>
  );
}
