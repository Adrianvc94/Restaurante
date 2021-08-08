import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/BebidaCaliente.css';

const BebidaCaliente = () => {

   const [bebidas, setBebidas] = useState([]);
   const [bebida, setBebida] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:''
   });
   // const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/bebidas');
   // const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosBebidas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setBebidas(datos);
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
         body: JSON.stringify(bebida)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   // const traerConsecutivo = async () => {
   //    await fetch(urlconsecutivo)
   //    .then(response => console.log(response.json()))
   //    .catch(error => console.log(error))
   // }

   useEffect(() => {
      traerDatosBebidas();
      // traerConsecutivo();
   }, [])


   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_bebCaliente">
         
               <div className="parent-container_bebCaliente">
         
                  <div className="search-container_bebCaliente">        
                     <div className="search-buttons-container_bebCaliente">
                        <button className="btnrefresh_bebCaliente"><span></span></button>
                        <button className="btnclose_bebCaliente"><span></span></button>
                        <button className="btnclear_bebCaliente"><span></span></button>
                        <button className="btnsearch_bebCaliente"><span></span></button>
                     </div>
                     <div className="search-box_bebCaliente">
                        <h2>Solo busqueda</h2>
                        <form className="form_bebCaliente" action="">
                           <label for="id_bebCaliente">
                              <h2>Código de la Bebida Caliente</h2>
                              <input type="text" id="id_bebCaliente"/>
                           </label>  
                           <label for="name_bebCaliente">
                              <h2>Nombre de la Bebida Caliente</h2>
                              <input type="text" id="name_bebCaliente"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_bebCaliente">
                        <button className="btnAdd_bebCaliente"><span></span></button>
                        <button className="btnDelete_bebCaliente"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_bebCaliente"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Precio</th>
                           <th>Restaurante</th>
                        </tr>
         
                        <tr>
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

export default BebidaCaliente;
