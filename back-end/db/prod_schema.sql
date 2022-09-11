CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    day TIMESTAMP DEFAULT NOW(),
    card_name TEXT,
    card_desc TEXT,
    liked BOOLEAN,
    quote TEXT,
    q_author TEXT,
    notes TEXT
);