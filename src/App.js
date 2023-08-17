import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
