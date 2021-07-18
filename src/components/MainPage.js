import "../Styles/MainPage.css";

const MainPage = () => {
   return (
      
      <body>
   
         <div class="root-container">

            <div class="parent-container">

               <h1 class="main-title">Administración Central de los Restaurantes</h1>

               <div class="cards-container">

                  <div class="card">
                     <h2 class="card-title">Seguridad</h2>
                     <img class="card-image" src="../Images/restaurantIcon.svg" alt=""/>
                  </div>

                  <div class="card" onclick="location.href='listaRestaurante.html'">
                     <h2 class="card-title">Restaurantes</h2>
                     <img class="card-image" src="../Images/restaurantIcon.svg" alt=""/>
                  </div>

                  <div class="card">
                     <h2 class="card-title">Clientes</h2>
                     <img class="card-image" src="../Images/clientLogo.svg" alt=""/>
                  </div>

                  <div class="card">
                     <h2 class="card-title">Proveedores</h2>
                     <img class="card-image" src="../Images/proveedorIcon.svg" alt="../Images/proveedorIcon.svg"/>
                  </div>

                  <div class="card" onclick="location.href='administracion.html'">
                     <h2 class="card-title">Administración</h2>
                     <img class="card-image" src="../Images/adminIcon.svg" alt=""/>
                  </div>

            
                  <div class="card">              
                     <h2 class="card-title">Reportes</h2>
                     <img class="card-image" src="../Images/reportIcon.svg" alt=""/>
                  </div>
                 
               </div>      
            </div>        
         </div>
      </body>

   )
}

export default MainPage;