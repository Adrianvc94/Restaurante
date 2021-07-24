import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/ListaProveedores.css';

const ListaProveedores = () => {

   const [proveedores, setProveedores] = useState([]);
   const [proveedor, setProveedor] = useState({
      cedula:'',
      fecha_ingreso:'',
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      correo:'',
      direccion:'',
      telefono:'',
      fax:'',
      celular:'',
      foto:'',
      contacto:'',
      telefono_contacto:'',
      direccion_contacto:''
   });

   const [url] = useState('http://localhost:5000/proveedores');

   const traerDatosProveedores = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setProveedores(datos);
   }

   // const cambiarValor = (e) =>{
   //    const {name, value} = e.target;
   //    setRestaurante({
   //       ...restaurante,
   //       [name] : value
   //    })
   // }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(proveedor)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosProveedores();
   }, [])


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_listaproveedores">
         
               <div className="parent-container_listaproveedores">
         
                  <div className="search-container_listaproveedores">        
                     <div className="search-buttons-container_listaproveedores">
                        <button className="btnrefresh_listaproveedores"><span></span></button>
                        <Link to="/proveedores" className="btnclose_listaproveedores"><span></span></Link>
                        <button className="btnclear_listaproveedores"><span></span></button>
                        <button className="btnsearch_listaproveedores"><span></span></button>
                     </div>
                     <div className="search-box_listaproveedores">
                        <h2>Solo busqueda</h2>
                        <form className="form_listaproveedores" action="">
                           <label for="codigo">
                              <h2>Código del Proveedor</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Proveedor</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form className="form_listaproveedores" action="">
                           <label for="direccion">
                              <h2>Direccion</h2>
                              <input type="text" id="direccion"/>
                           </label>  
                           <label for="cedula">
                              <h2>Cedula de Identidad</h2>
                              <input type="text" id="cedula"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_listaproveedores">
                        <Link to="/addproveedores" className="btnAdd_listaproveedores"><span></span></Link>
                        <button className="btnDelete_listaproveedores"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_listaproveedores"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Primer Apellido</th>
                           <th>Segundo Apellido</th>
                           <th>Telefono Oficina</th>
                           <th>Fax</th>
                           <th>Celular</th>
                        </tr>
         
                        <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
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

export default ListaProveedores;
