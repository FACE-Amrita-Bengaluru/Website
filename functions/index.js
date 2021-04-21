const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
	res.render("index");
});
app.get("/registration", (_req, res) => {
	res.render("registration");
});
app.get("/Submission", (_req, res) => {
	res.render("submission");
});
app.get("/Comquer", (_req, res) => {
	res.render("comquer");
});
app.get("/TFS", (_req, res) => {
	res.render("TFS");
});
app.get("/Team", (_req, res) => {
	res.redirect("/Team_1920");
});
app.get("/Team_1819", (_req, res) => {
	res.render("team_1819");
});
app.get("/Team_1920", (_req, res) => {
	res.render("team_1920");
});
app.get("/Team_2021", (_req, res) => {
	res.render("team_2021");
});
app.get("/offline", (_req, res) => {
	res.render("offline");
});
app.get("/Privacy", (_req, res) => {
	res.render("privacy");
});
app.get("/ICIC_2018", (_req, res) => {
	res.render("ICIC_2018");
});
app.get("/Blog", (_req, res) => {
	res.redirect("/MediumBlog");
});
app.get("/MediumBlog", (_req, res) => {
	res.redirect("https://medium.com/face-amrita-bangalore");
});
app.get("/WordPressBlog", (_req, res) => {
	res.redirect("https://faceaseb.wordpress.com");
});
app.get("/Identifire", (_req, res) => {
	res.redirect(
		"https://drive.google.com/drive/folders/1_yxMFFhuUTfb-xTxqKeueHjkRiZC7Yyv"
	);
});
app.get("/UI-UX", (_req, res) => {
	res.render("uiux");
});
app.get("/SLAC", (_req, res) => {
	res.redirect("https://slac.faceaseb.com");
});
app.get("/ACM", (_req, res) => {
	res.render("ACM/index");
});
app.get("/ACM/Members", (_req, res) => {
	res.render("ACM/members");
});
app.get("/ACM/Events", (_req, res) => {
	res.render("ACM/events");
});
app.get("/ACM/WebDevelopment", (_req, res) => {
	res.render("ACM/WebDevelopment");
});
app.get("/ACM/CompetitiveCoding", (_req, res) => {
	res.render("ACM/CompetitiveCoding");
});
app.get("/ACM/DataScience", (_req, res) => {
	res.render("ACM/DataScience");
});
app.get("/ACMW", (_req, res) => {
	res.render("ACMW/index");
});
app.get("/ACMW/Members", (_req, res) => {
	res.render("ACMW/members");
});
app.get("/ACMW/Events", (_req, res) => {
	res.render("ACMW/events");
});
app.get("/ACMW/WebDevelopment", (_req, res) => {
	res.render("ACMW/WebDevelopment");
});
app.get("/ACMW/CompetitiveCoding", (_req, res) => {
	res.render("ACMW/CompetitiveCoding");
});
app.get("/ACMW/DataScience", (_req, res) => {
	res.render("ACMW/DataScience");
});
app.use((_req, res, next) => {
	res.status(404).render("404");
});

exports.app = functions.https.onRequest(app);
