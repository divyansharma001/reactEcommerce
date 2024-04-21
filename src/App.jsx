import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <>
   {!(location.pathname === "/signup" || location.pathname === "/login") && <Navbar />}
   <Outlet/>
   {!(location.pathname === "/signup" || location.pathname === "/login") && <Footer />}
    </>
  )
}

export default App
