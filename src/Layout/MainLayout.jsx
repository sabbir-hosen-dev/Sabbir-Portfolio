import { useState } from 'react';
import Navbar from '../Components/Navber/Navber/Navber';
import Banner from '../Pages/Home/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import AboutMe from '../Pages/Home/AboutMe/AboutMe';

function MainLaout() {
  const [openMenu, setMenu] = useState(false);
  return (
    <div onClick={() => setMenu(false)}>
      <Navbar openMenu={openMenu} setMenu={setMenu} />
      <Banner />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default MainLaout;
