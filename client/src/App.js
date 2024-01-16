import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import './styles/reset.css';
import './styles/Style.css';

// In the main App component, only single instances of Header, Navigtion and Footer
//  are rendered and several instances of Project
function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<> <Header currPage='About' /> <Footer /> </>}
        />
        <Route
          path="/about"
          element={<> <Header currPage='About' /> <Footer /> </>}
        />
        <Route
          path="/portfolio"
          element={<> <Header currPage='Portfolio' /> <Footer /> </>}
        />
        <Route
          path="/contact"
          element={<> <Header currPage='Contact' /> <Footer /> </>}
        />
        <Route
          path="/resume"
          element={<> <Header currPage='Resume' /> <Footer /> </>}
        />
        <Route
              path='*'
              element={<PageNotFound />} 
        />
      </Routes>
    </Router>
  );
}

export default App;