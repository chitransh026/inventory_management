import React, { useState } from 'react';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';
import Suppliers from './components/Suppliers';

function App() {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <div className="App">
      <header className="app-header">
        <h1>📦 Inventory Management System</h1>
        <nav className="tabs">
          <button
            className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
            onClick={() => setActiveTab('items')}
          >
            Items
          </button>
          <button
            className={`tab-btn ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            className={`tab-btn ${activeTab === 'suppliers' ? 'active' : ''}`}
            onClick={() => setActiveTab('suppliers')}
          >
            Suppliers
          </button>
        </nav>
      </header>

      <div className="container">
        {activeTab === 'items' && <Items />}
        {activeTab === 'categories' && <Categories />}
        {activeTab === 'suppliers' && <Suppliers />}
      </div>
    </div>
  );
}

export default App;

