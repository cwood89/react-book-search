const db = require("../models/books");
const router = require("express").Router();

router.get("/db/books", (req, res) => {
  db.find().then((dbBook) => {
    res.json(dbBook)
  }).catch((err) => {
    console.log(err)
  })
});

router.post("/db/books", (req, res) => {
  db.create(req.body).then((dbBook) => {
    console.log(dbBook)
    res.json(dbBook)
  }).catch((err) => {
    console, log(err)
  })
});

router.delete("/db/books/:id", (req, res) => {
  db.deleteOne({ id: req.params.id }).then((dbBook) => {
    console.log(dbBook)
    res.json(dbBook)
  }).catch((err) => {
    console.log(err)
  });
});

module.exports = router;