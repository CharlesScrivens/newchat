const express = require("express"); // runs https server
const cors = require("cors");   // allows server to be called from places
const axios = require("axios");

// make the service
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// endpoint for authenticate on port 3001
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            {username:username, secret:username, first_name:username},
            {headers: {"private-key":"57c5bf23-b3e2-473d-a813-898a4a12d3f2"}})
            return res.status(response.status).json(response.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);