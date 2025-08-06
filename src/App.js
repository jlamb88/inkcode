import React from 'react';
import PricingChart from './components/PricingChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ink & Code Pricing</h1>
      </header>
      <main>
        <PricingChart />
      </main>
    </div>
  );
}

export default App;
