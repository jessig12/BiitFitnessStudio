let express = require('express');
var bodyParser = require('body-parser')
const fs = require('fs');


let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('home'); // archivo dentro de ./views
});

app.get('/servicios', (req, res) => {
  res.render('servicios');// archivo dentro de ./views
});

app.get('/login', (req, res) => {
  res.render('login');// archivo dentro de ./views
});

app.get('/registro', (req, res) => {
  res.render('registro');// archivo dentro de ./views
});

app.get('/quejas', (req, res) => {
  res.render('quejas');// archivo dentro de ./views
});

app.get('/productos', (req, res) => {
  res.render('productos');// archivo dentro de ./views
});

app.get('/galeria', (req, res) => {
  res.render('galeria');// archivo dentro de ./views
});

app.get('/contacto', (req, res) => {
  res.render('contacto');// archivo dentro de ./views
});

app.get('/conocenos', (req, res) => {
  res.render('conocenos');// archivo dentro de ./views
});

app.get('/biitfam', (req, res) => {
  res.render('biitfam');// archivo dentro de ./views
});
app.get('/miembros', (req, res) => {
  res.render('miembros');// archivo dentro de ./views
});






app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${process.env.PORT || 3000}!`));

