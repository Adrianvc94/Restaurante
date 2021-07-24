import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Puestos.css';

const Puestos = () => {

   const [puestos, setPuestos] = useState([]);
   const [puesto, setPuesto] = useState({
      nombre:'',
      relacion_restaurante:'',
      rol:''
   });

   const [url] = useState('http://localhost:5000/puestos');

   const traerDatosPuesto = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setPuestos(datos);
   }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setPuesto({
         ...puesto,
         [name] : value
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(puesto)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosPuesto();
   }, [])

   

   const interfaz = () => {

      return (
         <body>
             <div className="root-container_puestos">
   
               <div className="parent-container_puestos">
   
                  <div className="search-container_puestos">        
                     <div className="search-buttons-container_puestos">
                        <button className="btnrefresh_puestos"><span></span></button>
                        <Link to="/administracion" className="btnclose_puestos"><span></span></Link>
                        <button className="btnclear_puestos"><span></span></button>
                        <button className="btnsearch_puestos"><span></span></button>
                     </div>
                     <div className="search-box_puestos">
                        <h2>Solo busqueda</h2>
                        <form className="form_puestos" action="">
                           <label for="idLicor">
                              <h2>Código del Restaurante</h2>
                              <input type="text" id="idLicor"/>
                           </label>  
                           <label for="nameLicor">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameLicor"/>
                           </label>         
                        </form>
                        <form className="form_puestos" action="">
                           <label for="nacionalidadLicor">
                              <h2>Interno al Restaurante</h2>
                              <input type="checkbox" id="nacionalidadLicor"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Externo al Restaurante</h2>
                              <input type="checkbox" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_puestos">
                        <Link to="/addpuestos" className="btnAdd_puestos"><span></span></Link>
                        <button className="btnDelete_puestos"><span></span></button>
                     </div>
                  </div>
   
                  <div className="info-container_puestos"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Rol</th>
                           <th>Relacion con el restaurante</th>
                        </tr>

                        {puestos.map(p => {
                           return <tr>
                           <td>{p._id}</td>
                           <td>{p.nombre}</td>
                           <td>{p.rol}</td>
                           <td>{p.relacion_restaurante}</td>
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

export default Puestos;