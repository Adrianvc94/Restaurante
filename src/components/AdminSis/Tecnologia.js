import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Tecnologia.css';

const Tecnologia = () => {

   const [tecnologias, setTecnologias] = useState([]);
   const [tecnologia, setTecnologia] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:''
   });

   const [url] = useState('http://localhost:5000/tecnologia');

   const traerDatosTecnologia = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setTecnologias(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(tecnologia)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosTecnologia();
   }, [])

   

   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_tecnologia">

               <div className="parent-container_tecnologia">

                  <div className="search-container_tecnologia">        
                     <div className="search-buttons-container_tecnologia">
                        <button className="btnrefresh_tecnologia"><span></span></button>
                        <Link to="/productos" className="btnclose_tecnologia"><span></span></Link>
                        <button className="btnclear_tecnologia"><span></span></button>
                        <button className="btnsearch_tecnologia"><span></span></button>
                     </div>
                     <div className="search-box_tecnologia">
                        <h2>Solo busqueda</h2>
                        <form className="form_tecnologia" action="">
                           <label for="codigo">
                              <h2>Código del Artefacto</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Artefacto</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form className="formDos_tecnologia" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_tecnologia">
                        <Link to="/addtecnologia" className="btnAdd_tecnologia"><span></span></Link>
                        <button className="btnDelete_tecnologia"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_tecnologia"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Cantidad</th>
                           <th>Restaurante</th>
                        </tr>

                        {tecnologias.map(t => {
                           return <tr>
                           <td>{t._id}</td>
                           <td>{t.nombre}</td>
                           <td>{t.cantidad}</td>
                           <td>{t.restaurante}</td>
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

export default Tecnologia;