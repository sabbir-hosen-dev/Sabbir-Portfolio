import { useState } from 'react';
import Navbar from '../Components/Navber/Navber/Navber';


function MainLaout() {
  const [openMenu, setMenu] = useState(false);
  return <Navbar openMenu={openMenu} setMenu={setMenu} />;
}

export default MainLaout;
