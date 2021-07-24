import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddPuestos.css";

const AddPuestos = () => {

   
   const [puesto, setPuesto] = useState({
      nombre:'',
      relacion_restaurante:'',
      rol:''
   });

   const [url] = useState('http://localhost:5000/puestos');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setPuesto({
         ...puesto,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      let respuesta = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(puesto)
      })
      .then(response => response.json())
      .catch(error => console.log(error))

   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   const interfaz = () => {
      return(

         <body>

            <div class="root-container_addpuestos">
         
               <div class="parent-container_addpuestos">
         
                  <div class="search-container_addpuestos">        
                     <div class="search-box_addpuestos">
                        
                        <h1 class="main-title_addpuestos">Información del Puesto</h1>
         
                        <form class="form_addpuestos" id="form" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>  
                           <label for="relacion_restaurante">
                              <h2>Relacion con el restaurante</h2>
                              <input list="relacion_restaurante" onChange={cambiarValor} name="relacion_restaurante"/>
                              <datalist id="relacion_restaurante">
                                 <option value="Interno"></option>
                                 <option value="Externo"></option>
                              </datalist>
                           </label> 
                           <label for="rol">
                              <h2>Rol en el Restaurante</h2>
                              <input list="rol" onChange={cambiarValor} name="rol"/>
                              <datalist id="rol">
                                 <option value="Cocinero"></option>
                                 <option value="Gerente"></option>
                                 <option value="Mesero"></option>
                              </datalist>
                           </label> 
                        </form>
                        <div class="search-buttons-container_addpuestos">
                           <button onClick={limpiarInputs} class="btnclear_addpuestos"><span></span></button>
                           <button onClick={enviarDatos} class="btnAdd_addpuestos"><span></span></button>
                           <Link to="/puestos" class="btnclose_addpuestos"><span></span></Link>
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

export default AddPuestos;
