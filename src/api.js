const express = require("express");
const serverless = require("serverless-http");
const path = require('path');

const app = express();
const router = express.Router();

router.get("/no-time-to-lose", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(8080, () => {
    console.log("Listening on port 8080")
})