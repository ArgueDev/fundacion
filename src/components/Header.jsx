import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  const navLinkActive = ({ isActive }) =>
    isActive
      ? 'relative after:content-[""] after:block after:h-[3px] after:bg-white after:w-full after:absolute after:left-0 after:-bottom-2 text-white scale-110 transition duration-300 ease-in-out'
      : "hover:text-white hover:scale-105 transition duration-300 ease-in-out";

  return (
    <>
      {/* Menú de escritorio */}
      <header className="bg-gradient-to-r from-green-200 via-green-400 to-green-600 flex sm:flex-row flex-col justify-between p-8 items-center">
        <NavLink to="/">
          <img
            src="/img/Logo.png"
            alt="logo"
            className="sm:w-[100px] w-38 sm:h-[100px] h-38 hover:cursor-pointer sm:mb-0 mb-8"
          />
        </NavLink>
        <nav className="flex sm:flex-row flex-col justify-between items-center gap-9 sm:text-lg text-xl font-bold">
          <NavLink to="/nosotros" className={navLinkActive} end>
            Quienes Somos
          </NavLink>
          <NavLink to="/proyectos" className={navLinkActive}>
            Nuestros Proyectos
          </NavLink>
          <NavLink
            to="/ayuda"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-white text-white bg-transparent rounded-2xl px-6 py-4 shadow-xl scale-110 transition duration-300 ease-in-out"
                : "border-2 border-black rounded-2xl px-6 py-4 hover:text-white hover:border-white hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
            }
          >
            ¿Cómo Ayudar?
          </NavLink>
        </nav>
      </header>
    </>
  );
}
