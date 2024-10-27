const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    database: 'gestión_de_pruebas',
    user: 'root',
    password: 'Maga2121'
});

app.post("/create", (req, res)=>{
    const Nombre = req.body.Nombre;
    const Descripción = req.body.Descripción;
    const Fecha_inicio = req.body.Fecha_inicio;
    const Fecha_fin = req.body.Fecha_fin;
    const Estado = req.body.Estado;

    db.query('INSERT INTO `gestión_de_pruebas`.`proyecto` (`Nombre`, `Descripción`, `Fecha_Inicio`, `Fecha_Fin`, `Estado`) VALUES ('?', '?', '?', '?', '?')', [Nombre, Descripción, Fecha_inicio, Fecha_fin, Estado],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Proyecto registrado con éxito");
            }
        }
    ); 
});

app.listen(3001, ()=>{
    console.log("Ejecutando en el puerto 3001")
})