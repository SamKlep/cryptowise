import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import './App.css'
import NewsScreen from './screens/NewsScreen'
import CryptoPriceScreen from './screens/CryptoPriceScreen'
import AboutScreen from './screens/AboutScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/news' component={NewsScreen} />
      <Route path='/about' component={AboutScreen} />
      <Route path='/' component={CryptoPriceScreen} exact />
      <Footer />
    </Router>
  )
}

export default App
