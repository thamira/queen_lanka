import React from 'react';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Catalog from "./pages/Catalog";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:type" element={<Catalog />} />
    </Routes>
  </BrowserRouter>
);