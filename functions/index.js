const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});
app.get('/ACM', (req, res) => {
	res.send('Will be live soon!');
});
app.get('/HackathonVerification', (req, res) => {
	res.render('HackathonVerification');
});
app.get('/Submission', (req, res) => {
	res.render('Submission');
});
app.get('/Submission1', (req, res) => {
	res.render('Submission1');
});
app.get('/Submission2', (req, res) => {
	res.render('Submission2');
});
app.get('/TFS', (req, res) => {
	res.render('tfs');
});
app.get('/Team', (req, res) => {
	res.render('team');
});
app.get('/Offline', (req, res) => {
	res.render('offline');
});
app.get('/Privacy', (req, res) => {
	res.render('privacy');
});
app.get('/ICIC2018', (req, res) => {
	res.render('icic2018');
});
app.get('/Blog', (req, res) => {
	res.redirect('https://faceaseb.wordpress.com');
});
app.get('/Identifire', (req, res) => {
	res.redirect(
		'https://drive.google.com/drive/folders/1_yxMFFhuUTfb-xTxqKeueHjkRiZC7Yyv'
	);
});
app.get('/UI-UX', (req, res) => {
	res.render('uiux');
});
app.get('/SLAC', (req, res) => {
	res.redirect('https://slacfest.in');
});

app.use((req, res, next) => {
	res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);
