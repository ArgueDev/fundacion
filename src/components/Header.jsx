import React from 'react'

export default function Header() {
  return (
      <>
          <header className='bg-gradient-to-r from-green-200 via-green-400 to-green-600 flex justify-between p-8 '>
              <img src="/img/Logo.png" alt="logo" className='w-[100px] h-[100px] hover:cursor-pointer' />
              <nav className='flex justify-between items-center gap-20 text-3xl font-bold'>
                  <a href="" className='hover:text-white hover:scale-105 transition duration-300 ease-in-out '>Quienes Somos</a>
                  <a href="" className='hover:text-white hover:scale-105 transition duration-300 ease-in-out'>Nuestos Proyectos</a>
                  <a className='border-2 border-black rounded-2xl px-6 py-4 hover:text-white hover:cursor-pointer hover:border-white hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'>¿Como Ayudar?</a>
              </nav>
          </header>
      </>
  )
}
