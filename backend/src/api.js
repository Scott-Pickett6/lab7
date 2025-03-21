const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

// Route to get all projects
router.get("/projects", (req, res) => {
    console.log(__dirname);
    const filePath = path.join("/var/task/backend/projects.json");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log("Error json:", err);
            return res.status(500).json({ error: "Failed to load projects" });
        }
        const projects = JSON.parse(data);
        res.json(projects);
    });
});

app.use("/.netlify/functions/api", router);
module.exports = app;
module.exports.handler = serverless(app);