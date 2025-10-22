// Create a new router
const express = require("express");
const path = require("path");
const router = express.Router();

// log each request
router.use((req, res, next) => {
  const start = Date.now();
  console.log(`[IN ] ${req.method} ${req.originalUrl}`);

  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(`[OUT] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms}ms)`);
  });

  next();
});

// Handle the main routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
});

router.get('/date', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/date.html"));
});

router.get("/welcome/:name", (req, res) => {
  const name = req.params.name; 
  res.send(`<h1>Welcome ${name}</h1>`);
});

// Export the router object so index.js can access it
module.exports = router;
