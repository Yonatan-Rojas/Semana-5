const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Servidor activo creado por estudiante yonatan andres cobo rojas");
});

app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
});

app.get('/Aqui creamos, aprendemos y avanzamos en equipo/:una mejor comunidad', (req, res) => {
    const comunidad = req.params.comunidad;
    res.send("Hola " + comunidad);
});

app.listen(3000, () => {
    console.log('Servidor ejecutandose en puerto 3000');
});

app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte resividon",
        mensaje: mensaje
    });
});
