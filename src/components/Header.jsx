import React from 'react'

import { NavLink } from 'react-router'

export default function Header() {

    const navLinkActive = ({ isActive }) =>
        isActive
            ? 'relative after:content-[""] after:block after:h-[3px] after:bg-white after:w-full after:absolute after:left-0 after:-bottom-2 text-white scale-110 transition duration-300 ease-in-out'
            : 'hover:text-white hover:scale-105 transition duration-300 ease-in-out';

  return (
      <>
          <header className='bg-gradient-to-r from-green-200 via-green-400 to-green-600 flex justify-between p-8 '>
              <NavLink to="/" >
                <img src="/img/Logo.png" alt="logo" className='w-[100px] h-[100px] hover:cursor-pointer' />
              </NavLink>
              <nav className='flex justify-between items-center gap-20 text-3xl font-bold'>
                  <NavLink to="/nosotros" className={ navLinkActive } end>Quienes Somos</NavLink>
                  <NavLink to="/proyectos" className={ navLinkActive }>Nuestos Proyectos</NavLink>
                  <NavLink to="/ayuda" className={({ isActive }) =>
                        isActive
                        ? 'border-2 border-white text-white bg-transparent rounded-2xl px-6 py-4 shadow-xl scale-110 transition duration-300 ease-in-out'
                        : 'border-2 border-black rounded-2xl px-6 py-4 hover:text-white hover:border-white hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'
                    }>¿Cómo Ayudar?
                  </NavLink>
              </nav>
          </header>
      </>
  )
}
