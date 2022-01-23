import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component
import { NavBar } from './Components/NavBar'
import { Footer } from './Components/Footer'

// Pages
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

// Auth Page
import Signup from './Pages/Auth/Signup'
import Signin from './Pages/Auth/Signin'

// Products
import Products from './Pages/Product/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="render-pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
