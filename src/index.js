import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/es/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
