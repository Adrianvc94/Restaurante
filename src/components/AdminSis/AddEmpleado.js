import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddEmpleado.css';

import {Username} from '../../Helper/Context';

const AddUsuario = () => {
   
   const {username, setUsername} = useContext(Username)

   const [empleado, setEmpleado] = useState({
      cedula:'',
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      telefono_uno:'',
      telefono_dos:'',
      puesto:'',
      nacionalidad:'',
      restaurante:''
   });

   
   const [restaurantes, SetRestaurantes] = useState([]);
   const [puestos, SetPuestos] = useState([]);
   const [paises, SetPaises] = useState([]);

   const [url] = useState('http://localhost:5000/empleados');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');

   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlpuesto] = useState('http://localhost:5000/puestos');
   const [urlpaises] = useState('http://localhost:5000/paises');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setEmpleado({
         ...empleado,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const traerPuestos = async () => {
      let puesto = await fetch(urlpuesto)
      .then(response => response.json())
      SetPuestos(puesto);
   }

   const traerPais = async () => {
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
         body: JSON.stringify(empleado)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))

      var fecha = new Date();

      var date = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
      var time = fecha.getHours() + ":" + fecha.getMinutes();

      var horaFecha = date + " " + time

      const bitacora = {
         usuario:username.username,
         fechaHora:horaFecha,
         descripcion:"Agregó Empleado"
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
      traerPuestos();
      traerPais();
   },[])

   const interfaz = () => {

      return(

         <body>

            <div class="root-container_addusuario">

               <div class="parent-container_addusuario">

                  <div class="search-container_addusuario">        
                     <div class="search-box_addusuario">
                        
                        <h1 class="main-title_addusuario">Información del Personal</h1>

                        <form class="form_addusuario" id="form" action=""> 
                           <label for="cedula">
                              <h2>Cedula</h2>
                              <input type="text" onChange={cambiarValor} name="cedula" id="cedula"/>
                           </label>       
                        
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>   
                           <label for="primer_apellido">
                              <h2>Primer Apellido</h2>
                              <input type="text" onChange={cambiarValor} name="primer_apellido" id="primer_apellido"/>
                           </label>   
                           <label for="segundo_apellido">
                              <h2>Segundo Apellido</h2>
                              <input type="text" onChange={cambiarValor} name="segundo_apellido" id="segundo_apellido"/>
                           </label> 

                           <label for="puesto">
                              <h2>Puesto</h2>
                              <select onChange={cambiarValor} name="puesto" id="puesto">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {puestos.map(p => {
                                       return <option defaultValue={p.nombre} value={p.nombre}>{p.nombre}</option> 
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
                                          
                        </form>

                        <div class="search-buttons-container_addusuario">
                           <button onClick={limpiarInputs} class="btnclear_addusuario"><span></span></button>
                           <button onClick={enviarDatos} class="btnAdd_addusuario"><span></span></button>
                           <Link to="/empleados" class="btnclose_addusuario"><span></span></Link>
                        </div>
                     </div>

                     <div class="userImage_addusuario">
                        <form class="form_addusuario" id="form2" action="">
                           <label for="telefono_uno">
                              <h2>Telefono 1</h2>
                              <input type="text" id="telefono_uno" onChange={cambiarValor} name="telefono_uno"/>
                           </label> 
                           <label for="telefono_dos">
                              <h2>Telefono 2</h2>
                              <input type="text" id="telefono_dos" onChange={cambiarValor} name="telefono_dos"/>
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

export default AddUsuario;