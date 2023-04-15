import React from 'react';
import { BrowserRouter, Route, Routes, /* Link */ } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Product from './pages/Product';
import { LinkContainer } from 'react-router-bootstrap';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">         
              <Navbar.Brand>Troca INSAna</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/product/:slug" element={<Product />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>
            Todos os direitos reservados
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
