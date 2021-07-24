import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/ListaRestaurante.css';

const ListaRestaurante = () => {

   const [restaurantes, setRestaurantes] = useState([]);
   const [restaurante, setRestaurante] = useState({
      nombre:'',
      direccion:'',
      especialidad:'',
      telefono:'',
      estado:''
   });

   const [url] = useState('http://localhost:5000/restaurantes');

   const traerDatosRestaurante = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setRestaurantes(datos);
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
         body: JSON.stringify(restaurante)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosRestaurante();
   }, [])


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_listarestaurante">

               <div className="parent-container_listarestaurante">

                  <div className="search-container_listarestaurante">        
                     <div className="search-buttons-container_listarestaurante">
                        <button className="btnrefresh"><span></span></button>
                        <Link to="/mainpagesis" className="btnclose"><span></span></Link>
                        <button className="btnclear"><span></span></button>
                        <button className="btnsearch"><span></span></button>
                     </div>
                     <div className="search-box_listarestaurante">
                        <h2>Solo busqueda</h2>
                        <form className="form_listarestaurante" action="">
                           <label for="idrestaurante">
                              <h2>Código del Restaurante</h2>
                              <input type="text" id="idrestaurante"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_listarestaurante">
                        <Link to="/addrestaurante" className="btnAdd">
                           <span></span>
                        </Link>
                        <button className="btnDelete"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_listarestaurante"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Direccion</th>
                           <th>Especialidad</th>
                           <th>Telefono</th>
                        </tr>

                        {restaurantes.map(r => {
                           return <tr>
                           <td>{r._id}</td>
                           <td>{r.nombre}</td>
                           <td>{r.direccion}</td>
                           <td>{r.especialidad}</td>
                           <td>{r.telefono}</td>
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

export default ListaRestaurante;