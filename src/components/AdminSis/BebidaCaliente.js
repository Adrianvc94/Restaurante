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
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/bebidacaliente');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosBebidas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setBebidas(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())
      
      cons.map(c => {return c.prefijo})

      cons.map(c => {
         if (c.prefijo == "BC" ) 
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
         body: JSON.stringify(bebida)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosBebidas();
      traerDatosConsecutivo();
   }, [])


   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_bebCaliente">
         
               <div className="parent-container_bebCaliente">
         
                  <div className="search-container_bebCaliente">        
                     <div className="search-buttons-container_bebCaliente">
                        <button className="btnrefresh_bebCaliente"><span></span></button>
                        <Link to="/tiposbebidas" className="btnclose_bebCaliente"><span></span></Link>
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
                        <Link to="/addbebidascalientes" className="btnAdd_bebCaliente"><span></span></Link>
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
         
                        {bebidas.map(b => {
                           return <tr>
                           <td>{consecutivo}</td>
                           <td>{b.nombre}</td>
                           <td>{b.precio}</td>
                           <td>{b.restaurante.nombre}</td>
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

export default BebidaCaliente;
