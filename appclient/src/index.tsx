import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import ItemStore from "./store/ItemStore";

export const Context: any | null = createContext(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        item: new ItemStore(),
    }}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
    </Context.Provider>
);
