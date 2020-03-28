const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});
app.get("/Submission", (req, res) => {
	res.render("submission");
});
app.get("/Comquer", (req, res) => {
	res.render("comquer");
});
app.get("/TFS", (req, res) => {
	res.render("TFS");
});
app.get("/Team", (req, res) => {
	res.redirect("/Team_1920");
});
app.get("/Team_1819", (req, res) => {
	res.render("team_1819");
});
app.get("/Team_1920", (req, res) => {
	res.render("team_1920");
});
app.get("/Offline", (req, res) => {
	res.render("offline");
});
app.get("/Privacy", (req, res) => {
	res.render("privacy");
});
app.get("/ICIC_2018", (req, res) => {
	res.render("ICIC_2018");
});
app.get("/Blog", (req, res) => {
	res.redirect("/MediumBlog");
});
app.get("/MediumBlog", (req, res) => {
	res.redirect("https://medium.com/face-amrita-bangalore");
});
app.get("/WordPressBlog", (req, res) => {
	res.redirect("https://faceaseb.wordpress.com");
});
app.get("/Identifire", (req, res) => {
	res.redirect(
		"https://drive.google.com/drive/folders/1_yxMFFhuUTfb-xTxqKeueHjkRiZC7Yyv"
	);
});
app.get("/UI-UX", (req, res) => {
	res.render("uiux");
});
app.get("/SLAC", (req, res) => {
	res.redirect("https://slacfest.in");
});
app.get("/ACM", (req, res) => {
	res.render("ACM/index");
});
app.get("/ACM/Members", (req, res) => {
	res.render("ACM/members");
});
app.get("/ACM/Events", (req, res) => {
	res.render("ACM/events");
});
app.get("/ACM/WebDevelopment", (req, res) => {
	res.render("ACM/WebDevelopment");
});
app.get("/ACM/CompetitiveCoding", (req, res) => {
	res.render("ACM/CompetitiveCoding");
});
app.get("/ACM/DataScience", (req, res) => {
	res.render("ACM/DataScience");
});
app.get("/ACMW", (req, res) => {
	res.render("ACMW/index");
});
app.get("/ACMW/Members", (req, res) => {
	res.render("ACMW/members");
});
app.get("/ACMW/Events", (req, res) => {
	res.render("ACMW/events");
});
app.get("/ACMW/WebDevelopment", (req, res) => {
	res.render("ACMW/WebDevelopment");
});
app.get("/ACMW/CompetitiveCoding", (req, res) => {
	res.render("ACMW/CompetitiveCoding");
});
app.get("/ACMW/DataScience", (req, res) => {
	res.render("ACMW/DataScience");
});
app.use((req, res, next) => {
	res.status(404).render("404");
});

exports.app = functions.https.onRequest(app);
