import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddDesechables.css";

import {Username} from '../../Helper/Context';

const AddDesechables = () => {

   
   const {username, setUsername} = useContext(Username)
   
   const [desechable, setDesechable] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:''
   });

   
   const [restaurantes, SetRestaurantes] = useState([]);
   const [marcas, SetMarcas] = useState([]);

   const [url] = useState('http://localhost:5000/desechables');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlmarcas] = useState('http://localhost:5000/marcas');
   

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setDesechable({
         ...desechable,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const traerMarca = async () => {
      let marca = await fetch(urlmarcas)
      .then(response => response.json())
      SetMarcas(marca);
   }

   const enviarDatos = async () =>{
      let respuesta = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(desechable)
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))

      var fecha = new Date();

      var date = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
      var time = fecha.getHours() + ":" + fecha.getMinutes();

      var horaFecha = date + " " + time

      const bitacora = {
         usuario:username.username,
         fechaHora:horaFecha,
         descripcion:"Agregó Desechables"
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
      traerMarca();
   },[])

   const interfaz = () => {
      return(

         <body>

            <div className="root-container_adddesechables">
         
               <div className="parent-container_adddesechables">
         
                  <div className="search-container_adddesechables">        
                     <div className="search-box_adddesechables">
                        
                        <h1 className="main-title_adddesechables">Información de los Desechables y Empaques</h1>
         
                        <form id="form" className="form_adddesechables" action=""> 
                           <label for="restaurante">
                              <h2>Restaurante</h2>
                              <select onChange={cambiarValor} name="restaurante" id="restaurante">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {restaurantes.map(r => {
                                       return <option defaultValue={r.nombre} value={r.nombre}>{r.nombre}</option> 
                                 })}
                              </select>
                           </label>
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" id="nombre" onChange={cambiarValor} name="nombre"/>
                           </label>

                           <label for="marca">
                              <h2>Marca</h2>
                              <select name="marca" onChange={cambiarValor} name="marca" id="marca">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {marcas.map(m => {
                                       return <option defaultValue={m.nombre} value={m.nombre}>{m.nombre}</option> 
                                 })}
                              </select>
                           </label>
                           
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" id="cantidad" onChange={cambiarValor} name="cantidad"/>
                           </label> 
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" id="descripcion" onChange={cambiarValor} name="descripcion"/>
                           </label> 
                        
                        </form>
                        <div className="search-buttons-container_adddesechables">
                           <button onClick={limpiarInputs} className="btnclear_adddesechables"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_adddesechables"><span></span></button>
                           <Link to="/desechables" className="btnclose_adddesechables"><span></span></Link>
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

export default AddDesechables;

