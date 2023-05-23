import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Product from "./pages/Product";
import News from "./pages/News";
import Employment from "./pages/Employment";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>NewTech</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Company">Company</a></li>
            <li><a href="/Product">Product</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/employment">Employment</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <footer className="footer">
        <div className="footer-content">
          <div className="left-content">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Company">Company</a></li>
                <li><a href="/Product">Product</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/Employment">Employment</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="right-content">
            <p>NewTech</p>
            <p>住所: 〒123-4567 東京都渋谷区</p>
            <p>電話番号: 012-345-6789</p>
            <p>© 2023 株式会社NewTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
