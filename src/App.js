import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import './App.css'
import NewsScreen from './screens/NewsScreen'
import CryptoPriceScreen from './screens/CryptoPriceScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/news' component={NewsScreen} exact />
      <Route path='/' component={CryptoPriceScreen} exact />
      <Footer />
    </Router>
  )
}

export default App
