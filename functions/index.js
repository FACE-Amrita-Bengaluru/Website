const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});
app.get('/ACM', (req, res) => {
	res.render('ACM');
});
app.get('/ACM_Blog', (req, res) => {
	res.render('ACM_Blog');
});
app.get('/ACM_Members', (req, res) => {
	res.render('ACM_Members');
});
app.get('/ACMW_Members', (req, res) => {
	res.render('ACMW_Members');
});
app.get('/ACM_Events', (req, res) => {
	res.render('ACM_Events');
});
app.get('/ACM_WD', (req, res) => {
	res.render('ACM_WD');
});
app.get('/ACM_CP', (req, res) => {
	res.render('ACM_CP');
});
app.get('/ACM_DS', (req, res) => {
	res.render('ACM_DS');
});
app.get('/ACMW', (req, res) => {
	res.render('ACMW');
});
app.get('/Submission', (req, res) => {
	res.render('submission');
});
app.get('/Comquer', (req, res) => {
	res.render('Comquer');
});
app.get('/TFS', (req, res) => {
	res.render('TFS');
});
app.get('/Team', (req, res) => {
	res.redirect('/Team_1920');
});
app.get('/Team_1819', (req, res) => {
	res.render('team_1819');
});
app.get('/Team_1920', (req, res) => {
	res.render('team_1920');
});
app.get('/Offline', (req, res) => {
	res.render('offline');
});
app.get('/Privacy', (req, res) => {
	res.render('privacy');
});
app.get('/ICIC2018', (req, res) => {
	res.render('ICIC2018');
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
