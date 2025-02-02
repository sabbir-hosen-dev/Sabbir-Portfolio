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

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: cursorPosition.y,
        left: cursorPosition.x,
        width: "20px",  // Cursor dot size
        height: "20px", // Cursor dot size
        backgroundColor: "rgba(79, 240, 183, 0.6)",  // Cursor color
        borderRadius: "50%",  // Round shape
        pointerEvents: "none", // Prevent cursor from interacting with elements
        transform: "translate(-50%, -50%)", // Center the cursor
        zIndex: 9999, // Ensure the cursor is always on top
        filter: "blur(2px)", // Apply slight blur effect to the dot
        transition: "all 0.15s ease", // Smooth animation for cursor movement
        boxShadow: "0 0 10px rgba(79, 240, 183, 0.6)", // Shadow for glowing effect
      }}
    />
  );
}

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Background Dot Effect */}
      <BackgroundDots />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Content */}
      <div className="main-layout">
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
