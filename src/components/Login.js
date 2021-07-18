
import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import '../Styles/Login.css';
import Puestos from './Puestos';

const Login = () => {

   // const [puestos, setPuestos] = useState([]);
   const [role, setRole] = useState({
      privilegios: ''
   });
   const [login, setLogin] = useState({
      username:'',
      password:''
   });

   const [url] = useState('http://localhost:5000/login');

   // const traerDatosPuesto = async () => {
   //    let datos = await fetch(url)
   //    .then(response => response.json())
   //    setPuestos(datos);
   // }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setLogin({
         ...login,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      let rol = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(login)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
      setRole(rol)
      console.log(role);
   }

   // useEffect(() => {
   //    traerDatosPuesto();
   // }, [])


   const interfaz = () => {

      return (
         <main>

            <section class="background">
      
               <section class="main-container">
                  <section class="login-container">
                     <section class="login-box">
                        <h1>Login {role.privilegios}</h1>
      
                        <form action="">
                           <label for="user">
                              <h2>Usuario</h2>
                              <input type="text" onChange={cambiarValor} id="username" name="username" placeholder="Nombre de usuario"/>
                           </label>  
                           <label for="password">
                              <h2>Contraseña</h2>
                              <input type="password" onChange={cambiarValor} id="password" name="password" placeholder="Contraseña"/>
                           </label>         
                        </form>
      
                        <button class="btnLogin" onClick={enviarDatos}>Iniciar Sesion</button>
                        <button class="btnCancel">Cancelar</button>
                        <button class="btnClean"></button>

                        <img src="../Images/proveedorIcon.svg" alt="" />
      
                     </section>
                  </section>
               </section>
         
               <section>
         
               </section>
      
            </section>   
      
         </main>
      )
   }

   const validar = () => {
      if(role.privilegios === "admin"){
         return <Redirect to="/puestos"/>
      }
   }

   return(
     // <Router>
         <div>
            {interfaz()}
            {/* {role.privilegios == "admin" && <Puestos/>} */}
            {validar()}
         </div>
      // </Router>
   )
}

export default Login;