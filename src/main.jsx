import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>
)
