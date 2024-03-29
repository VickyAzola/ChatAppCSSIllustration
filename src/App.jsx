import './App.css'
import Phone from './componentes/Phone'
import Credits from './componentes/Credits'

function App() {

  return (
    <>
      <main>
      <div className='bg-color-purple'></div>
        <div className='phone-Container scale-up-horizontal-left'>
          <Phone />
        </div>
        <section className='title-section scale-up-horizontal-left'>
          <h1 className='title'>Simple booking</h1>
          <p className='description'>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to 
            discuss arrangements and make bookings. Once the walk has been completed you can rate 
            your walker and book again all through the chat.
          </p>
          <div className='bg-color-pink-mobile'></div>
          <Credits />
        </section>
        <div className='bg-color-pink-desktop'></div>
      </main>
    </>
  )
}

export default App
