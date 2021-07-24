import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddRoles.css';

const AddRoles = () => {

   const [rol, setRol] = useState({
      nombre:'',
      descripcion:'',
   });

   const [url] = useState('http://localhost:5000/roles');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setRol({
         ...rol,
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
         body: JSON.stringify(rol)
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

            <div className="root-container_addroles">

               <div className="parent-container_addroles">

                  <div className="search-container_addroles">        
                     <div className="search-box_addroles">
                        
                        <h1 className="main-title_addroles">Información de los Roles</h1>

                        <form id="form" className="form_addroles" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>       
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                           </label> 
                        </form>
                        <div className="search-buttons-container_addroles">
                           <button onClick={limpiarInputs} className="btnclear_addroles"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addroles"><span></span></button>
                           <Link to="/roles" className="btnclose_addroles"><span></span></Link>
                        </div>
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

export default AddRoles;