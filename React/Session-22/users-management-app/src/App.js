import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <MainLayout />      
    </Provider>
  );
}

export default App;
