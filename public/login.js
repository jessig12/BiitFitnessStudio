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