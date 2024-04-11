import '/src/componentes/Phone.css'
import Avatar from '/images/avatar.jpg'
import Dog1 from '/images/dog-image-1.jpg'
import Dog2 from '/images/dog-image-2.jpg'
import Dog3 from '/images/dog-image-3.jpg'

function Phone() {

    return (
        <>
        <article className='phone'>
            <div className='top-white-section'></div>
            
            <header className='header-section'>
                <div className='profile'>
                    <button className='button-back' aria-label='Click to go back'>
                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
                        </svg>
                    </button>
                    <img src={Avatar}  alt="Profile Picture"/>
                    <div>
                        <h1>Samuel Green</h1>
                        <p>Available to Walk</p>
                    </div>
                </div>
                <button className='button-more' aria-label='Click to open more options'>
                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                    </svg>
                </button>
            </header>

            <section className='main-bg-section'>
                <div className='block-1'>
                    <p className='p-violet'>That sounds great. I&#39;d be happy with that.</p>
                    <p className='p-violet'>Could you send over some pictures of your dog, please?</p>
                </div>

                <div className='block-2'>
                    <div className='dog-img-container'>
                        <img src={Dog1} alt="Picture of a dog smiling" />
                        <img src={Dog2} alt="Picture of a dog on the floor" />
                        <img src={Dog3} alt="Picture of a dog with a stick" />
                    </div>
                    <p className='p-white'>Here are a few pictures. She&#39;s a happy girl!</p>
                    <p className='p-white p-white-2'>Can you make it?</p>
                </div>

                <div className='block-3'>
                    <p className='p-violet'>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
                    <div className='price'>
                        <div className='price-group'>
                            <span className='circle'></span>
                            <p>30 minute walk</p>
                        </div>
                        <b>$29</b>
                    </div>
                    <div className='price'>
                        <div className='price-group'>
                            <span className='circle'></span>
                            <p>1 hour walk</p>
                        </div>
                        <b>$49</b>
                    </div>
                </div>

                <div className='type-section'>
                    <p>Type a message…</p>
                    <button className='button' aria-label='Click to send the message'>
                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                        </svg>
                    </button>
                </div>

            </section>
        </article>
        </>
    )
}

export default Phone
