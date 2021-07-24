import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Usuario.css';

const Usuario = () => {

   const [usuarios, setUsuarios] = useState([]);
   const [usuario, setUsuario] = useState({
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      telefono_uno:'',
      telefono_dos:'',
      privilegios:'',
      username:'',
      password:''
   });

   const [url] = useState('http://localhost:5000/usuarios');

   const traerDatosUsuario = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setUsuarios(datos);
   }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setUsuario({
         ...usuario,
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
         body: JSON.stringify(usuario)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosUsuario();
   }, [])

   

   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_usuarios">
         
               <div className="parent-container_usuarios">
         
                  <div className="search-container_usuarios">        
                     <div className="search-buttons-container_usuarios">
                        <button className="btnrefresh_usuarios"><span></span></button>
                        <Link to="/seguridad" className="btnclose_usuarios"><span></span></Link>
                        <button className="btnclear_usuarios"><span></span></button>
                        <button className="btnsearch_usuarios"><span></span></button>
                     </div>
                     <div className="search-box_usuarios">
                        <h2>Solo busqueda</h2>
                        <form className="form_usuarios" action="">
                           <label for="idLicor">
                              <h2>Código del Usuario</h2>
                              <input type="text" id="idLicor"/>
                           </label>  
                           <label for="nameLicor">
                              <h2>Nombre del Usuario</h2>
                              <input type="text" id="nameLicor"/>
                           </label>         
                        </form>
                        <form className="form_usuarios" action="">
                           <label for="nacionalidadLicor">
                              <h2>Nickname</h2>
                              <input type="text" id="nacionalidadLicor"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Privilegios</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_usuarios">
                        <Link to="/addusuarios" className="btnAdd_usuarios"><span></span></Link>
                        <button className="btnDelete_usuarios"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_usuarios"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Primer Apellido</th>
                           <th>Segundo Apellido</th>
                           <th>Telefono Fijo</th>
                           <th>Telefono Celular</th>
                        </tr>
         
                        {usuarios.map(u => {
                           return <tr>
                           <td>{u._id}</td>
                           <td>{u.nombre}</td>
                           <td>{u.primer_apellido}</td>
                           <td>{u.segundo_apellido}</td>
                           <td>{u.telefono_uno}</td>
                           <td>{u.telefono_dos}</td>
                        </tr>
                        })}
                     </table>
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

export default Usuario;