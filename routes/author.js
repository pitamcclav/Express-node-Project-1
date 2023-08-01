const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

// all authors routes
router.get("/", (req, res) => {
  res.render("authors/index");
});

// new authors
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

//create authors
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.redirect("/authors");
    // res.redirect(`authors/${newAuthor.id}`)
  } catch (error) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

module.exports = router;
