const db = require("../db/dbConfig.js");

//C - Create new Entry

const createNewEntry = async (entry) => {
  const { day, card_name, card_desc, liked, quote, q_author, notes } = entry;

  try {
    const newEntry = await db.one(
      "INSERT INTO entries (day, card_name, card_desc, liked, quote, q_author, notes ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [day, card_name, card_desc, liked, quote, q_author, notes]
    );
    console.log(entry.card_name, "<----- newEntry");
    return newEntry;
  } catch (error) {
    return error;
  }
};

//R - Get - Show All

const getAllEntries = async () => {
    try {
        const allEntries = await db.any("SELECT * FROM entries");
        return allEntries;
    } catch (error) {
        return error;
    }
};

//R - Get - single Day

const getSingleEntry = async (id) => {
    try {
      const oneEntry = await db.one("SELECT * FROM entries WHERE id=$1", id);
      return oneEntry;
    } catch (error) {
      return error;
    }
  };


//U - Update/Edit Entry

const updateEntry = async (entry, id) => {
  try {
    const { day, card_name, card_desc, liked, quote, q_author, notes } = entry;
    const editedEntry = await db.one(
      "UPDATE entries SET day = $1, card_name = $2, card_desc= $3, liked = $4, quote = $5, q_author= $6, notes = $7 WHERE id = $8 RETURNING *",
      [day, card_name, card_desc, liked, quote, q_author, notes, id]
    );
    console.log(entry.card_name, "<------ update");
    return editedEntry;
  } catch (error) {
    return error;
  }
};

//D - Delete/Remove

const deleteEntry = async (id) => {
    try {
      const deletedEntry = await db.one(
        "DELETE FROM entries WHERE id=$1 RETURNING *",
        id
      );
      return deletedEntry;
    } catch (error) {
      return error;
    }
  };

module.exports = {
  getAllEntries,
  getSingleEntry,
  createNewEntry,
  updateEntry,
  deleteEntry
};
