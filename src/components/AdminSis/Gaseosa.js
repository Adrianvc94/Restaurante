import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Gaseosa.css';

const Gaseosa = () => {

   const [gaseosas, setGaseosas] = useState([]);
   const [gaseosa, setGaseosa] = useState({
      nombre:'',
      precio:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/gaseosa');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosGaseosa = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setGaseosas(datos);
   }


   //Hacer el ADD de gaseosa


   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "BG" ) 
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
         body: JSON.stringify(gaseosa)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosGaseosa();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_gaseosa">
         
               <div className="parent-container_gaseosa">
         
                  <div className="search-container_gaseosa">        
                     <div className="search-buttons-container_gaseosa">
                        <button onClick={refreshPage} className="btnrefresh_gaseosa"><span></span></button>
                        <Link to="/tiposbebidas" className="btnclose_gaseosa"><span></span></Link>
                        <button className="btnclear_gaseosa"><span></span></button>
                        <button className="btnsearch_gaseosa"><span></span></button>
                     </div>
                     <div className="search-box_gaseosa">
                        <h2>Solo busqueda</h2>
                        <form className="form_gaseosa" action="">
                           <label for="idBebidaGa">
                              <h2>Código de la Bebida Gaseosa</h2>
                              <input type="text" id="idBebidaGa"/>
                           </label>  
                           <label for="nameBebidaGa">
                              <h2>Nombre de la Bebida Gaseosa</h2>
                              <input type="text" id="nameBebidaGa"/>
                           </label> 
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>          
                        </form>
                     </div>
                     <div className="add-delete-buttons_gaseosa">
                        <Link to="/addgaseosa" className="btnAdd_gaseosa"><span></span></Link>
                        <button className="btnDelete_gaseosa"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_gaseosa"> 
                     <table>
                        <thead>
                           <tr>
                              <th>Codigo</th>
                              <th>Nombre</th>
                              <th>Precio</th>
                           </tr>
                        </thead>
                       
         
                        <tbody>
                           {gaseosas.map(g => {
                              return <tr>
                              <td>{consecutivo}</td>
                              <td>{g.nombre}</td>
                              <td>{g.precio} colones</td>
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

export default Gaseosa;
