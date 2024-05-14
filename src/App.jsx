import './App.css'
import Phone from './componentes/Phone'
import Credits from './componentes/Credits'

function App() {

  return (
    <>
      <main>
        <div className='bg-color-purple scale-in-tl'></div>
        
        <div className='phone-Container scale-up-center'>
          <Phone />
        </div>
        
        <section className='title-section scale-up-center'>
          <h1 className='title'>Simple booking</h1>
          <p className='description'>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to 
            discuss arrangements and make bookings. Once the walk has been completed you can rate 
            your walker and book again all through the chat.
          </p>
          <Credits />
        </section>
        
        <div className='bg-color-pink scale-in-br'></div>
      </main>
      
    </>
  )
}

export default App
