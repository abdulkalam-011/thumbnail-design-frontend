
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import WorkGrid from './components/workDrawer/WorkGrid'

function App() {
  

  return (
    <>
    <Header />
     <section id='hero'>
      <button>jhgg</button> javahir
     </section>
     <section id='hero' className='bg-green-400'></section>
     <section id='work' className=''><WorkGrid /></section>
     <section id='contact' className='bg-blue-400'></section>
     <section id='testimonials' className='bg-yellow-400'></section>
     <Footer /> 
    </>
  )
}

export default App
