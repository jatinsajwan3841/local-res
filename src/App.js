import React from 'react'
import Home from './components/home'
import ParticlesBg from 'particles-bg'
import Footer from './components/footer'
import useStickyState from './components/localState'
import './App.css'

const App = () => {
    const [darkMode, setDarkMode] = useStickyState(false, 'darkMode')
    return (
        <div className={`main-container ${darkMode && 'dark'}`}>
            <div className="home">
                <Home darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <ParticlesBg type="cobweb" num="30" color="#a6a4ad" />
            <Footer />
        </div>
    )
}

export default App
