import "../Styles/MainPage.css";

/////// Images
import securityIcon from '../Images/securityLogo.svg';
import restaurantIcon from '../Images/restaurantIcon.svg';
import clientLogo from '../Images/clientLogo.svg';
import proveedorIcon from '../Images/proveedorIcon.svg';
import adminIcon from '../Images/adminIcon.svg';
import reportIcon from '../Images/reportIcon.svg';

function MainPage () {
   

   return (
      
      <body>
   
         <div class="root-container">

            <div class="parent-container">

               <h1 class="main-title">Administración Central de los Restaurantes</h1>

               <div class="cards-container">

                  <div class="card">
                     <h2 class="card-title">Seguridad</h2>
                     <img class="card-image" src={securityIcon} alt=""/>
                  </div>

                  <div class="card" onclick="location.href='listaRestaurante.html'">
                     <h2 class="card-title">Restaurantes</h2>
                     <img class="card-image" src={restaurantIcon} alt=""/>
                  </div>

                  <div class="card">
                     <h2 class="card-title">Clientes</h2>
                     <img class="card-image" src={clientLogo} alt=""/>
                  </div>

                  <div class="card">
                     <h2 class="card-title">Proveedores</h2>
                     <img class="card-image" src={proveedorIcon} alt=""/>
                  </div>

                  <div class="card" onclick="location.href='administracion.html'">
                     <h2 class="card-title">Administración</h2>
                     <img class="card-image" src={adminIcon} alt=""/>
                  </div>

            
                  <div class="card">              
                     <h2 class="card-title">Reportes</h2>
                     <img class="card-image" src={reportIcon} alt=""/>
                  </div>
                 
               </div>      
            </div>        
         </div>
      </body>

   )
}

export default MainPage;