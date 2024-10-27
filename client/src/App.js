import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [Nombre, setNombre] = useState("");
  const [Descripción, setDescripción] = useState("");
  const [Fecha_inicio, setFecha_inicio] = useState("");
  const [Fecha_fin, setFecha_fin] = useState("");
  const [Estado, setEstado] = useState("");

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      Nombre:Nombre,
      Descripción:Descripción,
      Fecha_inicio:Fecha_inicio,
      Fecha_fin:Fecha_fin,
      Estado:Estado
    }).then(()=>{
      alert("Proyecto regristrado con exito");
    });
  }

  return (
    <div className="App">
      <div className="datos">
      <h1><b><center>SISTEMA DE GESTIÓN DE PRUEBAS Y CONTROL DE CALIDAD</center></b></h1>

      <h2><b>PROYECTOS</b></h2><br></br>
      <label>Nombre: <input 
      onChange={(event)=>{
      setNombre(event.target.value);
      }}
      type="text"/></label><br></br>
      <label>Descripción: <input 
      onChange={(event)=>{
        setDescripción(event.target.value);
        }}
      type="text"/></label><br></br>
      <label>Fecha de inicio: <input 
      onChange={(event)=>{
        setFecha_inicio(event.target.value);
        }}
        type="datetime"/></label><br></br>
      <label>fecha de fin: <input 
      onChange={(event)=>{
        setFecha_fin(event.target.value);
        }}
      type="datetime"/></label><br></br>
      <label>Estado: <input 
      onChange={(event)=>{
        setEstado(event.target.value);
        }}
      type="text"/></label><br></br>
      <button className='btn btn-success' onClick={add}>Ingresar</button>

     </div> 
    </div>
  );
}

export default App;
