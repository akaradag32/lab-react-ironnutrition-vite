import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsJson from './foods.json';
import React, { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function addToFoods(newFood) {
    let dummyArr = [...foods];
    dummyArr.unshift(newFood);
    setFoods(dummyArr);
  }

  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addToFoods={addToFoods}></AddFoodForm>
      {foods.map((currentElement) => (
        <div key={currentElement.id}>
          <FoodBox foods={foods} food={currentElement} setFoods={setFoods} />
        </div>
      ))}
    </div>
  );
}

export default App;
