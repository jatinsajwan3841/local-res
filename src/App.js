import Home from './components/home'
import ParticlesBg from 'particles-bg'

const App = () => {
    return (
        <>
            <Home />
            <ParticlesBg type="cobweb" num="30" color="#a6a4ad" bg={true} />
        </>
    )
}

export default App
