import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddGaseosa.css";

import {Username} from '../../Helper/Context';

const AddGaseosa = () => {

   
   const {username, setUsername} = useContext(Username)

   const [gaseosa, setGaseosa] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:'',
      cantidada:'',
      descripcion:''
   });

   const [restaurantes, SetRestaurantes] = useState([]);
   const [paises, SetPaises] = useState([]);
   const [marcas, SetMarcas] = useState([]);

   const [url] = useState('http://localhost:5000/gaseosa');
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlpaises] = useState('http://localhost:5000/paises');
   const [urlmarcas] = useState('http://localhost:5000/marcas');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');


   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setGaseosa({
         ...gaseosa,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const traerPais = async () => {
      let pais = await fetch(urlpaises)
      .then(response => response.json())
      SetPaises(pais);
   }

   const traerMarca = async () => {
      let marca = await fetch(urlmarcas)
      .then(response => response.json())
      SetMarcas(marca);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(gaseosa)
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
         descripcion:"Agregó Gaseosa"
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
      document.getElementById("form2").reset();
   }

   useEffect(() => {
      traerNombreRestaurante();
      traerPais();
      traerMarca();
   },[])

   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_addGaseosa">
         
               <div className="parent-container_addGaseosa">
         
                  <div className="search-container_addGaseosa">        
                     <div className="search-box_addGaseosa">
                        
                        <h1 className="main-title_addGaseosa">Información de la Bebida</h1>
         
                        <form id="form" className="form_addGaseosa" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
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
                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <select name="nacionalidad" onChange={cambiarValor} name="nacionalidad" id="nacionalidad">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {paises.map(p => {
                                       return <option defaultValue={p.nombre} value={p.nombre}>{p.nombre}</option> 
                                 })}
                              </select>
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
                        </form>
         
                        <div className="search-buttons-container_addGaseosa">
                           <button onClick={limpiarInputs} className="btnclear_addGaseosa"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addGaseosa"><span></span></button>
                           <Link to="/gaseosa" className="btnclose_addGaseosa"><span></span></Link>
                        </div>
                     </div>
         
                     <div className="container-form2_addGaseosa">
                        <form id="form2" className="form_addGaseosa" action="">
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>   
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                           </label> 
                        </form>
               
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

export default AddGaseosa;

