import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./Redux/store/index";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import esLocale from 'date-fns/locale/es'
import DateFnsUtils from '@date-io/date-fns'
import 'antd/dist/antd.css'
// import dotenv from "dotenv";
import axios from 'axios';
import { persistor } from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react'

// dotenv.config();
axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <App />
          </MuiPickersUtilsProvider>
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
