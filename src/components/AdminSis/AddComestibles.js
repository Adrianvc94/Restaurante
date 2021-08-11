import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddComestibles.css";

import {Username} from '../../Helper/Context';

const AddComestibles = () => {

   
   const {username, setUsername} = useContext(Username)

   const [comestible, setComestible] = useState({
      nombre:'',
      cantidad:'',
      tipo:'',
      restaurante:'',
      marca:'',
      clase:'',
      linea:'',
      medida:''
   });

   
   const [restaurantes, SetRestaurantes] = useState([]);
   const [marcas, SetMarcas] = useState([]);
   const [medidas, SetMedidas] = useState([]);

   const [url] = useState('http://localhost:5000/comestibles');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');
   
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlmarcas] = useState('http://localhost:5000/marcas');
   const [urlmedidas] = useState('http://localhost:5000/medidas');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setComestible({
         ...comestible,
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
      let respuesta = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(comestible)
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
         descripcion:"Agregó Comestible"
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

            <div className="root-container_addcomestibles">

               <div className="parent-container_addcomestibles">

                  <div className="search-container_addcomestibles">        
                     <div className="search-box_addcomestibles">
                        
                        <h1 className="main-title_addcomestibles">Información del Comestible</h1>

                        <form id="form" className="form_addcomestibles" action=""> 
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>   
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>     
                           <label for="tipo">
                              <h2>Tipo de Comestible</h2>
                              <select onChange={cambiarValor} name="tipo" id="tipo">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 <option value="Frutas">Frutas</option>
                                 <option value="Cacao">Cacao</option>
                                 <option value="Carnes">Carnes</option>
                                 <option value="Aceites">Aceites</option>
                                 <option value="Cereales">Cereales</option>
                                 <option value="Vegetales">Vegetales</option>
                                 <option value="Legumbres">Legumbres</option>
                                 <option value="Frutos Secos">Frutos Secos</option>
                              </select>
                           </label> 
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
                                          
                        </form>

                        <div className="search-buttons-container_addcomestibles">
                           <button onClick={limpiarInputs} className="btnclear_addcomestibles"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addcomestibles"><span></span></button>
                           <Link to="/comestibles" className="btnclose_addcomestibles"><span></span></Link>
                        </div>
                     </div>

                     <div className="rightforms_addcomestibles">
                        <form id="form2" className="formdos_addcomestibles" action="">
                           
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
                           <label for="clase">
                              <h2>Clase de Comestible</h2>
                              <select onChange={cambiarValor} name="clase" id="clase">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 <option value="Fibra">Fibra</option>
                                 <option value="Grasas">Grasas</option>
                                 <option value="Proteinas">Proteinas</option>
                                 <option value="Vitaminas">Vitaminas</option>
                                 <option value="Minerales">Minerales</option>
                                 <option value="Carbohidratos">Carbohidratos</option>
                              </select>
                           </label> 
                           <label for="linea">
                              <h2>Linea de Comestible</h2>
                              <select onChange={cambiarValor} name="linea" id="linea">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 <option value="Secos">Secos</option>
                                 <option value="Congelados">Congelados</option>
                                 <option value="Refrigerados">Refrigerados</option>
                              </select>
                           </label> 
                           <label for="medida">
                              <h2>Medida</h2>
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

   return(
      <div>
         {interfaz()}
      </div>
   )
}

export default AddComestibles;

