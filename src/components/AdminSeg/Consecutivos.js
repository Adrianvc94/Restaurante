import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Consecutivos.css';

const Consecutivos = () => {

   const [consecutivos, setConsecutivos] = useState([]);
   const [consecutivo, setConsecutivo] = useState({
      tipo:'',
      descripcion:'',
      valor:'',
      prefijo:''
   });

   const [url] = useState('http://localhost:5000/consecutivos');

   const traerDatosConsecutivos = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setConsecutivos(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(consecutivo)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosConsecutivos();
   }, [])

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_consecutivo">

               <div className="parent-container_consecutivo">

                  <div className="search-container_consecutivo">        
                     <div className="search-buttons-container_consecutivo">
                        <button className="btnrefresh_consecutivo"><span></span></button>
                        <Link to="/seguridad" className="btnclose_consecutivo"><span></span></Link >
                        <button className="btnclear_consecutivo"><span></span></button>
                        <button className="btnsearch_consecutivo"><span></span></button>
                     </div>
                     <div className="search-box_consecutivo">
                        <h2>Solo busqueda</h2>
                        <form className="form_consecutivo" action="">
                           <label for="codigo">
                              <h2>Código del Consecutivo</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Consecutivo</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_consecutivo">
                        <Link to="/addconsecutivos" className="btnAdd_consecutivo"><span></span></Link>
                        <button className="btnDelete_consecutivo"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_consecutivo"> 
                     <table>
                        <tr>
                           <th>Tipo</th>
                           <th>Descripcion</th>
                           <th>Valor del Consecutivo</th>
                           <th>Contiene Prefijo</th>
                        </tr>

                        {consecutivos.map(c => {
                           return <tr>
                           <td>{c.tipo}</td>
                           <td>{c.descripcion}</td>
                           <td>{c.valor}</td>
                           <td>{c.prefijo}</td>
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

export default Consecutivos;