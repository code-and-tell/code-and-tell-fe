// App Context - Lives for app-wide state management
/* PURPOSE:
  This context is meant for app-wide stateful context. Examples include:
    * Menu states
    * User details
    * Most non-remote data related to app functionality
  It is a bucket for common app actions for ease of calling them anywhere within the app.
  Do not use this for most remote data. Create a more meaninful context */

// Core imports
import React, {
  createContext,
  useReducer
} from "react";

const AppContext = createContext();

const initialState = {
  menu: {
    open: false,
    // We initialize the menu way off screen to ensure it doesn't overlap any other renderings on load
    offset: 9999,
    // Links can live in another file eventually. Writing inline for now
    links: [
      { name: 'Home', route: '/' },
      { name: 'Projects', route: '/projects' },
      { name: 'Presentations', route: '/presentations' },
      { name: 'Tutorials', route: '/tutorials' },
      { name: 'Community', route: '/community' },
      { name: 'Resources', route: '/resources' },
      { name: 'About', route: '/about' },
      { name: 'Playground', route: '/playground' },
    ]
  }
};

// Dispatch actions - These can be called from any component to explicitly update state
const reducer = (state, action) => {

  // This is used to pass explicit values into our dispatch functions
  const payload = action.payload;

  switch (action.type) {
    // Menu Related actions

    // Explicitly sets open or closed on menu with payload
    /**
     * @param { payload.open: boolean }
    */
    case "set-menu":
      return {
        ...state,
        menu: {
          ...state.menu,
          open: payload.open
        }
      };

    // Toggles open/closed state of menu
    case "toggle-menu":
      return {
        ...state,
        menu: {
          ...state.menu,
          open: !state.menu.open
        }
      };

    default:
      return {
        ...initialState
      };
  }
};

// Provider wrapper
const AppContextProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

// Consumer wrapper
const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };