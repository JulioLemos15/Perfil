import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Competencia from './components/pages/Competencia'
import Formacao from './components/pages/Formacao'
import Historico from './components/pages/Historico'
import Objetivo from './components/pages/Objetivo'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
            <Route path="/formacao" element={<Formacao />}></Route>
            <Route path="/competencia" element={<Competencia />}></Route>
            <Route path="/historico" element={<Historico />}></Route>
            <Route path="/objetivo" element={<Objetivo />}></Route>
        </Routes>
      </Container> 
      <Footer />
    </Router>
  );
}

export default App;
