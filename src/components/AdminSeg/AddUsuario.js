import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddUsuario.css';

const AddUsuarios = () => {

   const [usuario, setUsuario] = useState({
      cedula:'',
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      telefono_uno:'',
      telefono_dos:'',
      privilegios:'',
      username:'',
      password:''
   });

   const [url] = useState('http://localhost:5000/register');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setUsuario({
         ...usuario,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(usuario)
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
      document.getElementById("form2").reset();
   }

   

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_addusuario">
         
               <div className="parent-container_addusuario">
         
                  <div className="search-container_addusuario">        
                     <div className="search-box_addusuario">
                        
                        <h1 className="main-title_addusuario">Datos del Usuario</h1>
         
                        <form id="form" className="form_addusuario" action="">
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
                           <label for="telefono_uno">
                              <h2>Telefono 1</h2>
                              <input type="text" onChange={cambiarValor} name="telefono_uno" id="telefono_uno"/>
                           </label>   
                           <label for="telefono_dos">
                              <h2>Telefono 2</h2>
                              <input type="text" onChange={cambiarValor} name="telefono_dos" id="telefono_dos"/>
                           </label> 
         
                           <label for="privilegios">
                              <h2>Privilegios</h2>
                              <select name="privilegios" onChange={cambiarValor} name="privilegios" id="privilegios">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 <option value="sistema">Administrador del Sistema</option>
                                 <option value="seguridad">Administrador de Seguridad</option>
                                 <option value="restaurante">Administrador del Restaurante</option>
                                 <option value="cuentas">Administrador de Cuentas</option>
                              </select>
                           </label>
                     
                        </form>
         
                        <div className="search-buttons-container_addusuario">
                           <button onClick={limpiarInputs} className="btnclear_addusuario"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addusuario"><span></span></button>
                           <Link to="/usuarios" className="btnclose_addusuario"><span></span></Link>
                           <button className="btnImage_addusuario"><span></span></button>
                        </div>
                     </div>
         
                     <div className="infocuenta_addusuario">
                        <form id="form2" className="form_addusuario" action="">
                           <label for="username">
                              <h2>Login</h2>
                              <input type="text" onChange={cambiarValor} name="username" id="username"/>
                           </label> 
                           <label for="password">
                              <h2>Contraseña</h2>
                              <input type="password" onChange={cambiarValor} name="password" id="password"/>
                           </label>   
                           <label for="confirmar">
                              <h2>Confirmar Contraseña</h2>
                              <input type="password" id="confirmar"/>
                           </label>
                           <label for="cambio">
                              <h2>Cambio de contraseña</h2>
                              <input type="checkbox" id="cambio"/>
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

export default AddUsuarios;