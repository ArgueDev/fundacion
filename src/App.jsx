import Header from './components/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <div className='bg-[url(./img/imagen_1.jpg)] h-screen w-full bg-cover bg-center flex lg:justify-start justify-center items-center'>
        <div className='max-w-9/12 bg-white/30 backdrop-blur-sm w-md text-center p-5 rounded-2xl lg:ml-20 ml-0'>
          <h1 className='font-bold text-3xl'>Constuyendo un Mejor Futuro</h1>
          <p className='text-xl'>Comprometidos con el bienestar social, brindando apoyo a quienes mas necesitan.</p>
        </div>
      </div>
    </>
  )
}

export default App
