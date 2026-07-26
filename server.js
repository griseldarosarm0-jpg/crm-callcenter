const express = require("express");

const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/views/dashboard.html");
});

app.get("/clientes", (req, res) => {
    res.sendFile(__dirname + "/views/clientes.html");
});
app.get("/agentes", (req, res) => {
    res.sendFile(__dirname + "/views/agentes.html");
});

app.get("/campanas", (req, res) => {
    res.sendFile(__dirname + "/views/campanas.html");
});
app.get("/reportes", (req, res) => {
    res.sendFile(__dirname + "/views/reportes.html");
});
app.get("/configuracion", (req, res) => {
    res.sendFile(__dirname + "/views/configuracion.html");
});


app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
