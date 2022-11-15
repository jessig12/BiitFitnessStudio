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
app.get('/bienvenido', (req, res) => {
  res.render('bienvenido');// archivo dentro de ./views
});



/////////////////Codigo para usar en posman o insomnia////////////////////////////////

app.post('/api/registo/guardar', (req, res) => {

  let rawdata = fs.readFileSync('./registro.json'); // json file is db in memory
  let registros = JSON.parse(rawdata);

  if (!registros.data.find((usuario) => usuario.email === req.body.email)) {
    registros.data.push(req.body);

    fs.writeFileSync('registro.json', JSON.stringify(registros, null, 2));
    console.log("registro guardado")
    res.send({ status: "Usuario guardado" })
  } else {
    console.log("ya existe un usuario con este correo")
    res.send({ status: "error", message: "email ya registrado" })
  }
});

app.post('/api/validar-login', (req, res) => {

  let rawdata = fs.readFileSync('./registro.json'); // json file is db in memory
  let registros = JSON.parse(rawdata);

  if (registros.data.find((usuario) => usuario.email === req.body.email && usuario.password === req.body.password)) {
    console.log("usuario y contrasena validos")
    res.send({ status: "ok" })
  } else {
    console.log("usuario y contrasena no validos")
    res.send({ status: "error", message: "usuario y contrasena no validos" })
  }
});

//////////////////////LOGIN/////////////////////////////////////
app.get('/api/registro/:abc', (req, res) => {

  let rawdata = fs.readFileSync('./registro.json'); // json file is db in memory
  let registros = JSON.parse(rawdata);
  const usuario = registros.data.find((usuario) => usuario.id + "" === req.params.abc);

  if (usuario) {
    res.send({ status: "ok", usuario })
  } else {
    res.send({ status: "error", message: "registro no existe" })
  }

});

//////////// Productos ////////////////////////////

app.get('/api/productos', (req, res) => {
  let rawdata = fs.readFileSync('./productos.json');
  let productos = JSON.parse(rawdata);
  res.send({ status: "ok", productos })
});


app.post('/api/compras/nueva', (req, res) => {
  let rawdata = fs.readFileSync('./compras.json');
  let compras = JSON.parse(rawdata);

  if (true) { // validaciones: tdc, stock, etc
    compras.push(req.body)
    fs.writeFileSync('compras.json', JSON.stringify(compras, null, 2));
    res.send({ status: "ok", "msg": "compra realizada" })

  } else {

    res.send({ status: "error", "msg": "fondos insuficientes" })
  }
});


app.get('/api/compras/:userId', (req, res) => {
  let rawdata = fs.readFileSync('./compras.json');
  let compras = JSON.parse(rawdata);
  res.send({ status: "ok", compras: compras.filter((compra) => compra.userId + "" === req.params.userId) })
});



app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${process.env.PORT || 3000}!`));

