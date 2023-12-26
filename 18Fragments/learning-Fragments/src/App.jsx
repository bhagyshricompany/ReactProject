import React from 'react';
import FoodItem from './components/FoodItem';
import ErrorMsg from './components/ErrorMsg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <h2>Healthy Food</h2>
      <ErrorMsg/>
<FoodItem />

    </>
  );
}

export default App;
