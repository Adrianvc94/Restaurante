import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/BebidaHelada.css';

const BebidaHelada = () => {

   const [bebidas, setBebidas] = useState([]);
   const [bebida, setBebida] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/bebidahelada');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosBebidas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setBebidas(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "BH" ) 
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

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_bebidaHelada">

               <div className="parent-container_bebidaHelada">

                  <div className="search-container_bebidaHelada">        
                     <div className="search-buttons-container_bebidaHelada">
                        <button onClick={refreshPage} className="btnrefresh_bebidaHelada"><span></span></button>
                        <Link to="/tiposbebidas" className="btnclose_bebidaHelada"><span></span></Link>
                        <button className="btnclear_bebidaHelada"><span></span></button>
                        <button className="btnsearch_bebidaHelada"><span></span></button>
                     </div>
                     <div className="search-box_bebidaHelada">
                        <h2>Solo busqueda</h2>
                        <form id="form" className="form_bebidaHelada" action="">
                           <label for="idBebidaHe">
                              <h2>Código de la Bebida Helada</h2>
                              <input type="text" id="idBebidaHe"/>
                           </label>  
                           <label for="nameBebidaHe">
                              <h2>Nombre de la Bebida Helada</h2>
                              <input type="text" id="nameBebidaHe"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_bebidaHelada">
                        <Link to="/addbebidasheladas" className="btnAdd_bebidaHelada"><span></span></Link>
                        <button className="btnDelete_bebidaHelada"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_bebidaHelada"> 
                     <table>
                        <thead>
                           <tr>
                              <th>Codigo</th>
                              <th>Nombre</th>
                              <th>Precio</th>
                              <th>Restaurante</th>
                           </tr>
                        </thead>

                        <tbody>
                           {bebidas.map(b => {
                              return <tr>
                              <td>{consecutivo}</td>
                              <td>{b.nombre}</td>
                              <td>{b.precio} colones</td>
                              <td>{b.restaurante.nombre}</td>
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

export default BebidaHelada;
