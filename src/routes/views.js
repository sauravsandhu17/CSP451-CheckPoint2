const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
});

module.exports = { router };
// ===============================
// Login helper notes (CSP451)
// ===============================
// This login page is part of the user authentication feature.
// Users must enter valid email and password.
// Error messages will be shown for invalid input.
// This is a demo implementation for CheckPoint 2.

