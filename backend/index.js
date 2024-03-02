const express = require("express");
const cors = require("cors");

// make the service
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// endpoint for authenticate on port 3001
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..."});
});

app.listen(3001);