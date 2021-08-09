import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Vinos.css';

const Vinos = () => {

   const [vinos, setVinos] = useState([]);
   const [vino, setVino] = useState({
      nombre:'',
      anno_cosecha:'',
      precio_unitario:'',
      nacionalidad:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/vino');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosVinos = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setVinos(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "V" ) 
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
         body: JSON.stringify(vino)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosVinos();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_vino">
         
               <div className="parent-container_vino">
         
                  <div className="search-container_vino">        
                     <div className="search-buttons-container_vino">
                        <button onClick={refreshPage} className="btnrefresh_vino"><span></span></button>
                        <Link to="/tiposbebidas" className="btnclose_vino"><span></span></Link>
                        <button className="btnclear_vino"><span></span></button>
                        <button className="btnsearch_vino"><span></span></button>
                     </div>
                     <div className="search-box_vino">
                        <h2>Solo busqueda</h2>

                        <div className="form-container_vino">
                           <form id="form" className="form_vino" action=""> 
                              <label for="nombre">
                                 <h2>Nombre del Vino</h2>
                                 <input type="text" id="nombre"/>
                              </label>      
                              <label for="annoVino">
                                 <h2>Año</h2>
                                 <input type="text" id="annoVino"/>
                              </label>   
                              <label for="nacionalidadVino">
                                 <h2>Nacionalidad</h2>
                                 <input type="text" id="nacionalidadVino"/>
                              </label>  
                           </form>
                           <form id="form2" className="form2_vino" action="">
                              <label for="nameRestaurante">
                                 <h2>Nombre del Restaurante</h2>
                                 <input type="text" id="nameRestaurante"/>
                              </label>  
                              <label for="precioVino">
                                 <h2>Precio</h2>
                                 <input type="text" id="precioVino"/>
                              </label>         
                           </form>
                        </div>
                     </div>
                     <div className="add-delete-buttons_vino">
                        <Link to="/addvinos" className="btnAdd_vino"><span></span></Link>
                        <button className="btnDelete_vino"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_vino"> 
                     <table>
                        <thead>
                           <tr>
                              <th>Codigo</th>
                              <th>Nombre</th>
                              <th>Precio</th>
                              <th>Nacionalidad</th>
                              <th>Año</th>
                           </tr>
                        </thead>
                       
                        <tbody>
                           {vinos.map(v => {
                              return <tr>
                              <td>{consecutivo}</td>
                              <td>{v.nombre}</td>
                              <td>{v.precio_unitario} colones</td>
                              <td>{v.nacionalidad.nombre}</td>
                              <td>{v.anno_cosecha}</td>
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

export default Vinos;
