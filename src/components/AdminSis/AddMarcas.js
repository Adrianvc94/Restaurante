import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddMarcas.css';


import {Username} from '../../Helper/Context';

const AddMarcas = () => {

   const {username, setUsername} = useContext(Username)

   const [marca, setMarca] = useState({
      nombre:'',
      nacionalidad:'',
      descripcion:'',
      cedula:'',
      empresa:'',
      detalle:'',
      telefono:''
   });

   
   const [paises, SetPaises] = useState([]);

   const [url] = useState('http://localhost:5000/marcas');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');
   const [urlpaises] = useState('http://localhost:5000/paises');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setMarca({
         ...marca,
         [name] : value
      })
   }

   const traerPaises = async () => {
      let pais = await fetch(urlpaises)
      .then(response => response.json())
      SetPaises(pais);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(marca)
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
         descripcion:"Agregó Marca"
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
      traerPaises();
   },[])
   

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_addmarcas">
         
               <div className="parent-container_addmarcas">
         
                  <div className="search-container_addmarcas">        
                     <div className="search-box_addmarcas">
                        
                        <h1 className="main-title_addmarcas">Informacion de la Marca</h1>
         
                        <form id="form" className="form_addmarcas" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>  

                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <select onChange={cambiarValor} name="nacionalidad" id="nacionalidad">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {paises.map(p => {
                                       return <option defaultValue={p.nombre} value={p.nombre}>{p.nombre}</option> 
                                 })}
                              </select>
                           </label>    
                        
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                           </label>   
                     
                        </form>
         
                        <div className="search-buttons-container_addmarcas">
                           <button onClick={limpiarInputs} className="btnclear_addmarcas"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addmarcas"><span></span></button>
                           <Link to="/marcas" className="btnclose_addmarcas"><span></span></Link>
                        </div>
                     </div>
         
                     <div className="infocuenta_addmarcas">
                        <form id="form2" className="form_addmarcas" action="">
                        <h1 className="main-title2_addmarcas">Informacion de la Marca</h1>
                           <label for="cedula">
                              <h2>Cédula Jurídica</h2>
                              <input type="text" onChange={cambiarValor} name="cedula" id="cedula"/>
                           </label> 
                           <label for="empresa">
                              <h2>Nombre de la Empresa</h2>
                              <input type="text" onChange={cambiarValor} name="empresa" id="empresa"/>
                           </label>   
                           <label for="detalle_empresa">
                              <h2>Detalle de la Empresa</h2>
                              <input type="text" onChange={cambiarValor} name="detalle_empresa" id="detalle_empresa"/>
                           </label>
                           <label for="telefono">
                              <h2>Teléfono</h2>
                              <input type="text" onChange={cambiarValor} name="telefono" id="telefono"/>
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

export default AddMarcas;