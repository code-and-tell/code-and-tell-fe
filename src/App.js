// App Root
// Core imports
import React from 'react';

// Utility imports
import PublicRouter from 'components/routers/PublicRouter';

// Component imports
import MenuDrawer from 'components/scaffold/MenuDrawer/MenuDrawer';
import Header from 'components/scaffold/Header/Header';
import View from 'components/scaffold/View/View';

// Files / Assets
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <View>
        <MenuDrawer />
        <PublicRouter />
      </View>  
    </div>
  );
}

export default App;
