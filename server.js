const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

// GET messages
app.get("/messages", (req, res) => {
    res.json(messages);
});

// SEND message
app.post("/send", (req, res) => {
    const msg = req.body.message;
    messages.push(msg);
    res.json({ status: "ok" });
});

app.listen(3000, () => {
    console.log("Server running");
});