

import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
import Button from './components/Button/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Navigation/>
     <main className='main_container'>
     <ContactHeader/>
      <ContactForm/>
      <Button/>
     </main>
     </div>
  
  )
}

export default App;
