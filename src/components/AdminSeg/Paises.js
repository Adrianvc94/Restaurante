import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Paises.css';

const Paises = () => {

   const [paises, setPaises] = useState([]);
   const [pais, setPais] = useState({
      nombre:''
   });

   const [url] = useState('http://localhost:5000/paises');

   const traerDatosPaises = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setPaises(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(pais)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosPaises();
   }, [])

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_paises">

               <div className="parent-container_paises">

                  <div className="search-container_paises">        
                     <div className="search-buttons-container_paises">
                        <button className="btnrefresh_paises"><span></span></button>
                        <Link to="/seguridad" className="btnclose_paises"><span></span></Link>
                        <button className="btnclear_paises"><span></span></button>
                        <button className="btnsearch_paises"><span></span></button>
                     </div>
                     <div className="search-box_paises">
                        <h2>Solo busqueda</h2>
                        <form className="form_paises" action="">
                           <label for="idBebidaHe">
                              <h2>Código del Pais</h2>
                              <input type="text" id="idBebidaHe"/>
                           </label>  
                           <label for="nameBebidaHe">
                              <h2>Nombre del Pais</h2>
                              <input type="text" id="nameBebidaHe"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_paises">
                        <Link to="/addpaises" className="btnAdd_paises"><span></span></Link>
                        <button className="btnDelete_paises"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_paises"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Pais</th>
                        </tr>

                        {paises.map(p => {
                           return <tr>
                           <td>{p._id}</td>
                           <td>{p.nombre}</td>
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

export default Paises;