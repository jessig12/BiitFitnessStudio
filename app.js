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





//////////////////////////////////////Registro ///////////////////////////////////////////////////////////////
app.post('/registro/guardar', (req, res) => {

  let rawdata = fs.readFileSync('./registro.json'); // json file is db in memory
  let registros = JSON.parse(rawdata);

  if (!registros.data.find((usuario) => usuario.email === req.body.email)) {
    registros.data.push(req.body);

    fs.writeFileSync('registro.json', JSON.stringify(registros, null, 2));
    console.log("registro guardado")
    res.send({ status: "ok" })
  } else {
    console.log("ya existe un usuario con este correo")
    res.send({ status: "error", message: "email ya registrado" })
  }
});


////////////////////////////login//////////////////////////////////////////////
app.post('/validar-login', (req, res) => {

  let rawdata = fs.readFileSync('./registro.json'); // json file is db in memory
  let registros = JSON.parse(rawdata);

  if (registros.data.find((usuario) => usuario.email === req.body.email && usuario.password === req.body.password)) {
    registros.data.push(req.body);

    res.send({ status: "ok" })
  } else {
    res.send({ status: "error", message: "usuario y contrasena no validos" })
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));