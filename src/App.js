// App Root
// Core imports
import React from 'react';

// Utility imports
import PublicRouter from 'components/routers/PublicRouter';

// Component imports
import Header from 'components/scaffold/Header/Header';

// Files / Assets
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <PublicRouter />
    </div>
  );
}

export default App;
