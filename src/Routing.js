import React from "react";
import { Route} from "react-router-dom";
import Albums from './componentes/selectgaleria/index.js';
import Home from './componentes/home/Home.js';
import Paquetes from './componentes/paquetes/Paquetes.js';
import Contacto from './componentes/contacto/Contacto.js';
import Acerca from './componentes/acerca/Acerca.js';
import Galeria from './componentes/galeria/Galeria.js';

const Home_page = ({match}) => (
  <Home/>
)

const Albums_page=({match}) =>(
  <Albums/>
)

const Paquetes_page=({match}) =>(
  <Paquetes/>
)
const Contacto_page=({match}) =>(
  <Contacto/>
)
const Acerca_page=({match}) =>(
  <Acerca/>

)

const Galeria_page = ({match})=>(
  <Galeria concepto={match.params.id}/>


)
const routes = [
  {
    path:'/home/',
    component:Home_page
  },
  {
    path:'/Galeria/',
    component:Albums_page,
  },
      {
        path:'/e:id',
        component:Galeria_page

      },
  {
    path:'/Paquetes/',
    component:Paquetes_page
  },
  {
    path:'/Contacto/',
    component:Contacto_page
  },
  {
    path:'/Acerca/',
    component:Acerca_page
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
      routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)

);




export default RouteConfigExample;
