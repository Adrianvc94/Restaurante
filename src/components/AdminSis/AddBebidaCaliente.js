import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddBebidaCaliente.css";

import {Username} from '../../Helper/Context';

const AddBebidaCaliente = () => {

   const {username, setUsername} = useContext(Username)

   
   const [bebidaCaliente, setBebidaCaliente] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:''
   });

   const [restaurantes, SetRestaurantes] = useState([]);

   const [url] = useState('http://localhost:5000/bebidacaliente');
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setBebidaCaliente({
         ...bebidaCaliente,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(bebidaCaliente)
      })
      .then(response => response.json())
      .catch(error => console.log(error))

      var fecha = new Date();

      var date = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
      var time = fecha.getHours() + ":" + fecha.getMinutes();

      var horaFecha = date + " " + time

      const bitacora = {
         usuario:username.username,
         fechaHora:horaFecha,
         descripcion:"Agregó Bebida Caliente"
      }

      await fetch(urlbitacora, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(bitacora)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   useEffect(() => {
      traerNombreRestaurante();
   },[])

   const interfaz = () => {
      return(

         <body>

   
         <div className="root-container_addBebidaCaliente">
      
            <div className="parent-container_addBebidaCaliente">
      
               <div className="search-container_addBebidaCaliente">        
                  <div className="search-box_addBebidaCaliente">
                     
                     <h1 className="main-title_addBebidaCaliente">Información de la Bebida</h1>
      
                     <form className="form_addBebidaCaliente" id="form" action="">
                        <label for="nombre">
                           <h2>Nombre</h2>
                           <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                        </label>       
                        <label for="ingredientes">
                           <h2>Ingredientes</h2>
                           <input type="text" onChange={cambiarValor} name="ingredientes" id="ingredientes"/>
                        </label> 
                        <label for="precio">
                           <h2>Precio</h2>
                           <input type="text" onChange={cambiarValor} name="precio" id="precio"/>
                        </label> 

                        <label for="restaurante">
                           <h2>Restaurante</h2>
                           <select name="restaurante" onChange={cambiarValor} name="restaurante" id="restaurante">
                              <option value="none" selected disabled hidden>
                                 Eliga una opción
                              </option>
                              {restaurantes.map(r => {
                                    return <option defaultValue={r.nombre} value={r.nombre}>{r.nombre}</option> 
                              })}
                           </select>
                        </label>

                        <label for="descripcion">
                           <h2>Descripcion</h2>
                           <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                        </label>                 
                     </form>
      
                     <div className="search-buttons-container_addBebidaCaliente">
                        <button onClick={limpiarInputs} className="btnclear_addBebidaCaliente"><span></span></button>
                        <button onClick={enviarDatos} className="btnAdd_addBebidaCaliente"><span></span></button>
                        <Link to="/bebidascalientes" className="btnclose_addBebidaCaliente"><span></span></Link>
                     </div>
                  </div>
                 
               </div>     
         
            </div>
          
         </div>
         
      </body>

      )
   }

   return(
      <div>
         {interfaz()}
      </div>
   )
}

export default AddBebidaCaliente;

