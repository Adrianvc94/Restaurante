import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Roles.css';

const Roles = () => {

   const [roles, setRoles] = useState([]);
   const [rol, setRol] = useState({
      nombre:'',
      descripcion:'',
   });

   const [url] = useState('http://localhost:5000/roles');

   const traerDatosRol = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setRoles(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(rol)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosRol();
   }, [])

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_roles">

               <div className="parent-container_roles">

                  <div className="search-container_roles">        
                     <div className="search-buttons-container_roles">
                        <button className="btnrefresh_roles"><span></span></button>
                        <Link to="/seguridad" className="btnclose_roles"><span></span></Link>
                        <button className="btnclear_roles"><span></span></button>
                        <button className="btnsearch_roles"><span></span></button>
                     </div>
                     <div className="search-box_roles">
                        <h2>Solo busqueda</h2>
                        <form className="form_roles" action="">
                           <label for="codigo">
                              <h2>Código del Rol</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Rol</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_roles">
                        <Link to="/addroles" className="btnAdd_roles"><span></span></Link>
                        <button className="btnDelete_roles"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_roles"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre del Rol</th>
                        </tr>
                
                        {roles.map(r => {
                           return <tr>
                           <td>{r._id}</td>
                           <td>{r.nombre}</td>
                        </tr>
                        })}
                     </table>
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

export default Roles;