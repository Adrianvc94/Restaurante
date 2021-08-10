import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Licores.css';

const Licores = () => {

   const [licores, setLicores] = useState([]);
   const [licor, setLicor] = useState({
      nombre:'',
      anno_cosecha:'',
      precio_unitario:'',
      nacionalidad:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/licores');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosLicores = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setLicores(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "L" ) 
            return setConsecutivo(c.prefijo);
      })
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
         body: JSON.stringify(licor)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosLicores();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_licores">
         
               <div className="parent-container_licores">
         
                  <div className="search-container_licores">        
                     <div className="search-buttons-container_licores">
                        <button onClick={refreshPage} className="btnrefresh_licores"><span></span></button>
                        <Link to="/tiposbebidas" className="btnclose_licores"><span></span></Link>
                        <button className="btnclear_licores"><span></span></button>
                        <button className="btnsearch_licores"><span></span></button>
                     </div>
                     <div className="search-box_licores">
                        <h2>Solo busqueda</h2>
                        <form id="form" className="form_licores" action="">
                           <label for="idLicor">
                              <h2>Código del Licor</h2>
                              <input type="text" id="idLicor"/>
                           </label>  
                           <label for="nameLicor">
                              <h2>Nombre del Licor</h2>
                              <input type="text" id="nameLicor"/>
                           </label>         
                        </form>
                        <form id="form2" className="form_licores" action="">
                           <label for="nacionalidadLicor">
                              <h2>Nacionalidad</h2>
                              <input type="text" id="nacionalidadLicor"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_licores">
                        <Link to="/addlicores" className="btnAdd_licores"><span></span></Link>
                        <button className="btnDelete_licores"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_licores"> 
                     <table>
                        <thead>
                           <tr>
                              <th>Codigo</th>
                              <th>Nombre</th>
                              <th>Cantidad</th>
                              <th>Precio</th>
                              <th>Nacionalidad</th>
                           </tr>
                        </thead>
                     
                        <tbody>
                           {licores.map(l => {
                              return <tr>
                              <td>{consecutivo}</td>
                              <td>{l.nombre}</td>
                              <td>{l.cantidad}</td>
                              <td>{l.precio_unitario} colones</td>
                              <td>{l.nacionalidad.nombre}</td>
                           </tr>
                           })}
                        </tbody>
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

export default Licores;
