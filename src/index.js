import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import store from './store';
// import { Provider } from 'react-redux';


import Home from './Components/Home';
import Header from './Components/Header';
import Team from './Components/Our-Team';

import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path='/our-team' element={<Team />} />
        
      </Routes>
    </HashRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Header />
    <Team /> */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
