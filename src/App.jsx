
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//PAGES &COMPONENTS
import Home from './pages/Home'
import About from './pages/About'
import LoadingSpinner from './components/LoadingSpinner/loadingSpinner'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//UTILS
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './context/AppContest'

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

       </Routes>
    </Router>
  )
}

export default App
