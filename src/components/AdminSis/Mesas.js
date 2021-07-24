import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../../Styles/Mesas.css';

const Mesas = () => {

   const [mesas, setMesas] = useState([]);
   const [mesa, setMesa] = useState({
      nombre:'',
      numero_mesa:'',
      cantidad_sillas:'',
      restaurante:''
   });

   const [url] = useState('http://localhost:5000/mesas');

   const traerDatosMesas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setMesas(datos);
   }


   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(mesa)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosMesas();
   }, [])


   const interfaz = () => {

      return(

         <body>

            <div class="root-container_mesas">

               <div class="parent-container_mesas">

                  <div class="search-container_mesas">        
                     <div class="search-buttons-container_mesas">
                        <button class="btnrefresh_mesas"><span></span></button>
                        <Link to="/administracion" class="btnclose_mesas"><span></span></Link>
                        <button class="btnclear_mesas"><span></span></button>
                        <button class="btnsearch_mesas"><span></span></button>
                     </div>
                     <div class="search-box_mesas">
                        <h2>Solo busqueda</h2>
                        <form class="form_mesas" action="">
                           <label for="idLicor">
                              <h2>Código de la Mesa</h2>
                              <input type="text" id="idLicor"/>
                           </label>  
                           <label for="nameLicor">
                              <h2>Nombre de la Mesa</h2>
                              <input type="text" id="nameLicor"/>
                           </label>         
                        </form>
                        <form class="form_mesas" action="">
                           <label for="nacionalidadLicor">
                              <h2>Restaurante</h2>
                              <input type="text" id="nacionalidadLicor"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Cantidad de Sillas</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div class="add-delete-buttons_mesas">
                        <Link to="/addmesas" class="btnAdd_mesas"><span></span></Link>
                        <button class="btnDelete_mesas"><span></span></button>
                     </div>
                  </div>
            
                  <div class="info-container_mesas"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Numero</th>
                           <th>Cantidad de Sillas</th>
                           <th>Restaurante</th>
                        </tr>

                        {mesas.map(m => {
                           return <tr>
                           <td>{m._id}</td>
                           <td>{m.nombre}</td>
                           <td>{m.numero}</td>
                           <td>{m.cantidad_sillas}</td>
                           <td>{m.restaurante}</td>
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

export default Mesas;