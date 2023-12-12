const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
	res.end(fs.readFileSync("./dist/index.html", "utf8"));
});

app.get("/session", (req, res) => {
	res.json(req.client.authorized);
});

app.use(express.static("dist"));

http.createServer(app).listen(80);
https.
	createServer(
		{
			"key": fs.readFileSync("./certs/localhost.pem"),
			"cert": fs.readFileSync("./certs/localhost.crt"),
			"requestCert": true,
			"rejectUnauthorized": false,
		},
		app,
	).
	listen(443);
