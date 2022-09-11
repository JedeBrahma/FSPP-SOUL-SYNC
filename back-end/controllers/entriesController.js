const express = require("express");
const entries = express.Router();
const {
  getAllEntries,
  getSingleEntry,
  createNewEntry,
  updateEntry,
  deleteEntry,
} = require("../queries/entries.js");

//C - create

entries.post("/", async (req, res) => {
  try {  
    // const { body } = req;
    const newEntry = await createNewEntry(req.body);  
      res.status(200).json({ payload: newEntry, success: true });
      console.log(newEntry, "<-----failed new entry")
      
    } catch (error) {
    res.status(422).json({
        payload: "enter a word or two on how you're feeling..",
        success: false,
      });
  }
});

//R - Get Index - Show All

entries.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  console.log(allEntries, "<-------- all Entrys ")
  if (allEntries[0]) {
    res.status(200).json({ payload: allEntries, success: true });
  } else {
    res.status(500).json({ success: false, error: "server error" });
  }
});

//R - Get Single - Show Single Entry

entries.get("/:id", async (req, res) => {
  const { id } = req.params;
  const singleEntry = await getSingleEntry(id);
  if (singleEntry.id) {
    res.json({ payload: singleEntry, success: true });
  } else {
    res
      .status(404)
      .json({ payload: "not found", success: false, error: "not found" });
  }
});

//U - Update- Edit

entries.put("/:id", async (req, res) => {
  // add validations -
  const { id } = req.params;
  const { body } = req;

  const updatedEntry = await updateEntry(req.body, id);
  if (updatedEntry.id) {
    res.status(200).json({ payload: updatedEntry, success: true });
  } else {
    res.status(404).json({ error: "Entry could not be updated" });
  }
});

//D - delete/remove entry

entries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEntry = await deleteEntry(id);
  if (deletedEntry.id) {
    res.status(200).json({ payload: deletedEntry, success: true });
  } else {
    res.status(404).json({ payload: "dentry does not exist!", success: false });
  }
});

module.exports = entries;
