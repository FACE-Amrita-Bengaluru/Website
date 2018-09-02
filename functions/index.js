const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/TheFACESeason", (req, res) => {
    res.render('tfs');
});
app.get("/Blog", (req, res) => {
    res.redirect('https://faceaseb.wordpress.com');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);