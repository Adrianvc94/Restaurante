import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Bitacora.css';

const Bitacora = () => {

   const [bitacoras, setBitacoras] = useState([]);
   const [bitacora, setBitacora] = useState({
      usuario:'',
      fechaHora:'',
      descripcion:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/bitacora');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosBitacora = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setBitacoras(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "BIT" ) 
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
         body: JSON.stringify(bitacora)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosBitacora();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_bitacora">
         
               <div className="parent-container_bitacora">
         
                  <div className="search-container_bitacora">   
                     <div className="search-box_bitacora">
                        <h2>Solo busqueda</h2>
                        <form className="form_bitacora" id="form" action="">
                           <label for="idVino">
                              <h2>Consultar por rango de fecha</h2>
                              <input type="checkbox" id="idVino"/>
                           </label>  
                           <label for="nameVino">
                              <h2>Consulta General</h2>
                              <input type="checkbox" id="nameVino"/>
                           </label>      
                           <label for="annoVino">
                              <h2>Consulta por Usuario</h2>
                              <input type="checkbox" id="annoVino"/>
                           </label>   
                        </form>
                        <form className="form_bitacora" id="form2" action="">
                           <label for="nacionalidadVino">
                              <h2>Fecha Inicial</h2>
                              <input type="date" id="nacionalidadVino"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Fecha Final</h2>
                              <input type="date" id="nameRestaurante"/>
                           </label>  
                           <label for="usuario">
                              <h2>Usuario</h2>
                              <input type="text"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_bitacora">
                        <button className="btnAdd_bitacora"><span></span></button>
                        <button className="btnDelete_bitacora"><span></span></button>
                        <Link to="/reportesseg" className="btnback_bitacora"><span></span></Link>
                     </div>
                  </div>
            
                  <div className="info-container_bitacora"> 
                     <table>
                        <thead>
                           <tr>
                              <th>Codigo</th>
                              <th>Usuario</th>
                              <th>Fecha y Hora</th>
                              <th>Descripcion</th>
                           </tr>
                        </thead>

                        <tbody>
                           {bitacoras.map(b => {
                              return <tr>
                              <td>{consecutivo}</td>
                              <td>{b.usuario.username}</td>
                              <td>{b.fechaHora}</td>
                              <td>{b.descripcion}</td>
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

export default Bitacora;
