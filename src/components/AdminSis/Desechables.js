import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Desechables.css';

const Desechables = () => {

   const [desechables, setDesechables] = useState([]);
   const [desechable, setDesechable] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:''
   });

   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/desechables');
   
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosDesechables = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setDesechables(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "DE" ) 
            return setConsecutivo(c.prefijo);
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(desechable)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosDesechables();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }

   

   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_desechables">

               <div className="parent-container_desechables">

                  <div className="search-container_desechables">        
                     <div className="search-buttons-container_desechables">
                        <button onClick={refreshPage} className="btnrefresh_desechables"><span></span></button>
                        <Link to="/productos" className="btnclose_desechables"><span></span></Link>
                        <button className="btnclear_desechables"><span></span></button>
                        <button className="btnsearch_desechables"><span></span></button>
                     </div>
                     <div className="search-box_desechables">
                        <h2>Solo busqueda</h2>
                        <form className="form_desechables" action="">
                           <label for="codigo">
                              <h2>Código del Empaque</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Empaque</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form className="formDos_desechables" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_desechables">
                        <Link to="/adddesechables" className="btnAdd_desechables"><span></span></Link >
                        <button className="btnDelete_desechables"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_desechables"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Cantidad</th>
                           <th>Restaurante</th>
                        </tr>

                        {desechables.map(d => {
                           return <tr>
                           <td>{consecutivo}</td>
                           <td>{d.nombre}</td>
                           <td>{d.cantidad}</td>
                           <td>{d.restaurante}</td>
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

export default Desechables;