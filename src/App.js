// App Root
// Core imports
import React from 'react';

// Utility imports
import PublicRouter from 'components/routers/PublicRouter';

// Contexts / Services
import { AppContextProvider } from 'contexts/AppContext/AppContext';

// Component imports
import MenuDrawer from 'components/scaffold/MenuDrawer/MenuDrawer';
import Header from 'components/scaffold/Header/Header';
import View from 'components/scaffold/View/View';

// Files / Assets
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <MenuDrawer />
        <View>
          <PublicRouter />
        </View>  
      </AppContextProvider>
    </div>
  );
}

export default App;
