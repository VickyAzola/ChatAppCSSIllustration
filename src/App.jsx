import './App.css'
import Phone from './componentes/Phone'
import Credits from './componentes/Credits'

function App() {

  return (
    <>
      <main>
      <div className='bg-color-purple'></div>
        <div className='phone-Container'>
          <Phone />
        </div>
        <section className='title-section'>
          <h1 className='title'>Simple booking</h1>
          <p className='description'>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to 
            discuss arrangements and make bookings. Once the walk has been completed you can rate 
            your walker and book again all through the chat.
          </p>
          <Credits />
        </section>
        <div className='bg-color-pink'></div>
      </main>
    </>
  )
}

export default App
