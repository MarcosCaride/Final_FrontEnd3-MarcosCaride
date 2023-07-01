
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'

import { routes } from "./utils/routes";
import Contacto from "./Components/Contacto";
import Home from "./Components/Home";
import Odontologo from "./Components/Odontologo";
import Favs from "./Routes/Favs";


function App() {

  return (
      <div className={`App`}>
          <Navbar/>
            <Routes>
              <Route path={routes.home} element={<Home/>} />
              <Route path={'/dentist/:id'} element={<Odontologo/>} />
              <Route path={routes.contact} element={<Contacto/>} />
              <Route path={routes.favorites} element={<Favs/>} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
