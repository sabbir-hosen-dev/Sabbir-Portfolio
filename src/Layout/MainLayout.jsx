import { useState } from 'react';
import Navbar from '../Components/Navber/Navber/Navber';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLaout() {
  const [openMenu, setMenu] = useState(false);
  return (
    <>
      <Navbar openMenu={openMenu} setMenu={setMenu} />
      <div onClick={() => setMenu(false)}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLaout;
