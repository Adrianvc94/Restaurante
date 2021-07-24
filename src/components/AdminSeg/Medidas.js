import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Medidas.css';

const Medidas = () => {

   const [medidas, setMedidas] = useState([]);
   const [medida, setMedida] = useState({
      unidad:'',
      escala:'',
      detalle:'',
      simbolo:'',
      simbologia:''
   });

   const [url] = useState('http://localhost:5000/medidas');

   const traerDatosMedidas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setMedidas(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(medida)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosMedidas();
   }, [])

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_medidas">

               <div className="parent-container_medidas">

                  <div className="search-container_medidas">        
                     <div className="search-buttons-container_medidas">
                        <button className="btnrefresh_medidas"><span></span></button>
                        <Link to="/seguridad" className="btnclose_medidas"><span></span></Link>
                        <button className="btnclear_medidas"><span></span></button>
                        <button className="btnsearch_medidas"><span></span></button>
                     </div>
                     <div className="search-box_medidas">
                        <h2>Solo busqueda</h2>
                        <form className="form_medidas" action="">
                           <label for="codigo">
                              <h2>Código Unidad de Medida</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="detalle">
                              <h2>Detalle Unidad de Medida</h2>
                              <input type="text" id="detalle"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_medidas">
                        <Link to="/addmedidas" className="btnAdd_medidas"><span></span></Link>
                        <button className="btnDelete_medidas"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_medidas"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Unidad de Medida</th>
                           <th>Escala</th>
                           <th>Detalle</th>
                           <th>Simbologia</th>
                        </tr>

                        {medidas.map(m => {
                           return <tr>
                           <td>{m._id}</td>
                           <td>{m.unidad}</td>
                           <td>{m.escala}</td>
                           <td>{m.detalle}</td>
                           <td>{m.simbologia}</td>
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

export default Medidas;