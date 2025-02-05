import { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navber/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function BackgroundDots() {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  // Moving dots effect
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  // Dot color changing effect
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["rgba(79, 240, 183, 0.3)", "rgba(255, 50, 50, 0.3)"]);

  return (
    <motion.div
      ref={ref}
      className="background-dots"
      style={{
        backgroundImage: `radial-gradient(circle, ${backgroundColor} 2px, transparent 2px)`,
        backgroundSize: "20px 20px",
        backgroundPosition: backgroundPosition,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        filter: "blur(5px)",
        transition: "background-color 0.3s ease",
      }}
    />
  );
}




function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div className="fixed w-screen h-screen">
    {/* Blob moves with the cursor */}
    <motion.div
      className="fixed"
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "rgba(79, 240, 183, 0.4)", // Soft green glow
        borderRadius: "50%",
        position: "absolute",
        top: cursorPosition.y - 75, // Offset to center blob around cursor
        left: cursorPosition.x - 75,
        filter: "blur(30px)", // Glowing effect
        pointerEvents: "none",
      }}
      animate={{ x: cursorPosition.x - window.innerWidth / 2, y: cursorPosition.y - window.innerHeight / 2 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />

    {/* Pointer stays at the exact center of the blob */}
    {/* <motion.div
      className="fixed"
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "white", // Pointer color
        borderRadius: "50%", // Small dot
        position: "absolute",
        top: cursorPosition.y - 5, // Centering pointer
        left: cursorPosition.x - 5,
        zIndex: 10, // Above the blob
      }}
    /> */}
  </div>
  );
}






function MainLayout() {

  const [openMenu, setMenu] = useState(false)
  return (
    <>
      {/* Navbar */}
      <Navbar openMenu={openMenu} setMenu={setMenu}   />

      {/* Background Dot Effect */}
      <BackgroundDots />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Content */}
      <div onClick={() => setMenu(false)} className="main-layout">
        <Outlet />
        <Footer />
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .background-dots {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-attachment: fixed;
        }
        .main-layout {
          position: relative;
          min-height: 100vh;
          padding-top: 60px;
        }
      `}</style>
    </>
  );
}

export default MainLayout;
