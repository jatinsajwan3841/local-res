import React from 'react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { use100vh } from 'react-div-100vh'
import Home from './components/home'
import ParticlesBg from 'particles-bg'
import Footer from './components/footer'
import useStickyState from './components/localState'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const App = () => {
    const [darkMode, setDarkMode] = useStickyState(false, 'darkMode')
    const [update, setUpdate] = React.useState('')
    const height = use100vh()

    React.useEffect(() => {
        serviceWorkerRegistration.register({
            onSuccess: async () => {
                await setUpdate('fInstall')
                await setTimeout(() => setUpdate(''), 4000)
            },
            onUpdate: async () => {
                await setUpdate('update')
                await setTimeout(() => setUpdate(''), 4000)
            },
        })
    }, [])
    return (
        <div
            className={`main-container ${darkMode && 'dark'}`}
            style={{ minHeight: height }}
        >
            <div className="home">
                <Router>
                    <Home
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        update={update}
                    />
                </Router>
            </div>
            <ParticlesBg type="cobweb" num="30" color="#a6a4ad" />
            <Footer />
        </div>
    )
}

export default App
