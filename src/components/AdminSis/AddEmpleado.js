import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddEmpleado.css';

const AddUsuario = () => {

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

   const [url] = useState('http://localhost:5000/empleados');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setEmpleado({
         ...empleado,
         [name] : value
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(empleado)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
      document.getElementById("form2").reset();
   }

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
                              <input list="puesto" onChange={cambiarValor} name="puesto"/>
                              <datalist id="puesto">
                                 <option value="Gerente"></option>
                                 <option value="Cocinero"></option>
                              </datalist>
                           </label> 
                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <input list="nacionalidad" onChange={cambiarValor} name="nacionalidad"/>
                              <datalist id="nacionalidad">
                                 <option value="Estados Unidos"></option>
                                 <option value="China"></option>
                                 <option value="Francia"></option>
                                 <option value="Costa Rica"></option>
                              </datalist>
                           </label> 
                                          
                        </form>

                        <div class="search-buttons-container_addusuario">
                           <button onClick={limpiarInputs} class="btnclear_addusuario"><span></span></button>
                           <button onClick={enviarDatos} class="btnAdd_addusuario"><span></span></button>
                           <Link to="/empleados" class="btnclose_addusuario"><span></span></Link>
                           <button class="btnImage_addusuario"><span></span></button>
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
                              <input list="restaurante" onChange={cambiarValor} name="restaurante"/>
                              <datalist id="restaurante">
                                 <option value="1. Restaurante"></option>
                                 <option value="2. Restaurante"></option>
                                 <option value="3. Restaurante"></option>
                              </datalist>
                           </label> 
                        </form>
               
                        <h2>Foto del Empleado</h2>
                        <picture>
                           <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt=""/>
                        </picture>
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