import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

const AddFoodForm = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleForm = (event) => {
    event.preventDefault();

    props.addToFoods({ id: uuidV4(), name, image, calories, servings });
  };

  return (
    <form onSubmit={handleForm}>
      <label>Name </label>
      <input
        name='name'
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <label>Image </label>

      <input
        name='image'
        type='text'
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <br></br>
      <label>Calories </label>
      <input
        name='calories'
        type='number'
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
      />

      <br></br>
      <label>Servings</label>
      <input
        name='servings'
        type='number'
        value={servings}
        onChange={(event) => setServings(event.target.value)}
      />

      <br></br>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddFoodForm;
