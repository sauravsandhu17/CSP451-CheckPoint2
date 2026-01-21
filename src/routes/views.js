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
function validateLoginInput(email, password) {
  if (!email || email.length === 0) {
    return "Email is required";
  }

  if (!email.includes("@")) {
    return "Email must contain @ symbol";
  }

  if (!password || password.length === 0) {
    return "Password is required";
  }

  if (password.length < 4) {
    return "Password must be at least 4 characters";
  }

  return "Valid";
}

