import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddLimpieza.css';

import {Username} from '../../Helper/Context';

const AddLimpieza = () => {

   const {username, setUsername} = useContext(Username)

   const [limpieza, setLimpieza] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:'',
      tipo:'',
      cantidad_medida:'',
      unidad_medida:'',
      liquido:''
   });

   
   const [restaurantes, SetRestaurantes] = useState([]);
   const [marcas, SetMarcas] = useState([]);
   const [medidas, SetMedidas] = useState([]);

   const [url] = useState('http://localhost:5000/limpieza');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');

   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlmarcas] = useState('http://localhost:5000/marcas');
   const [urlmedidas] = useState('http://localhost:5000/medidas');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setLimpieza({
         ...limpieza,
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

   const traerMedidas = async () => {
      let unidad = await fetch(urlmedidas)
      .then(response => response.json())
      SetMedidas(unidad);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(limpieza)
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
         descripcion:"Agregó Limpieza"
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
      traerMarca();
      traerMedidas();
   },[])
   

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_addlimpieza">
         
               <div className="parent-container_addlimpieza">
         
                  <div className="search-container_addlimpieza">        
                     <div className="search-box_addlimpieza">
                        
                        <h1 className="main-title_addlimpieza">Información de los Artículos</h1>
         
                        <form id="form" className="form_addlimpieza" action="">
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
                        
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>   
                           <label for="description">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="description" id="description"/>
                           </label>   
                           <label for="liquido">
                              <h2>Artículo Líquido</h2>
                              <select name="liquido" onChange={cambiarValor} name="liquido" id="liquido">
                                 <option value="si">Sí</option>
                                 <option value="no">No</option>
                              </select>
                           </label>
                     
                        </form>
         
                        <div className="search-buttons-container_addlimpieza">
                           <button onClick={limpiarInputs} className="btnclear_addlimpieza"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addlimpieza"><span></span></button>
                           <Link to="/limpieza" className="btnclose_addlimpieza"><span></span></Link>
                        </div>
                     </div>
         
                     <div className="infocuenta_addlimpieza">
                        <form id="form2" className="form_addlimpieza" action="">
                           <label for="tipo">
                              <h2>Tipo</h2>
                              <input type="text" onChange={cambiarValor} name="tipo" id="tipo"/>
                           </label> 
                           <label for="cantidad_medida">
                              <h2>Cantidad de Medida</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad_medida" id="cantidad_medida"/>
                           </label>   
                           <label for="medida">
                              <h2>Unidad de Medida</h2>
                              <select onChange={cambiarValor} name="medida" id="medida">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {medidas.map(m => {
                                       return <option defaultValue={m.unidad} value={m.unidad}>{m.unidad}</option> 
                                 })}
                              </select>
                           </label>
                           
                        </form>
                     </div>
                  
                  </div>     
            
               </div>
            
            </div>
            
         </body>
       
      )    
   }

   return (
      <div>
         {interfaz()}
      </div>
   )
}

export default AddLimpieza;