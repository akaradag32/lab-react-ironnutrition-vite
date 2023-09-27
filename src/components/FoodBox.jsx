function FoodBox(props) {
  function deleteElement() {
    props.setFoods(props.foods.filter((x) => x.id !== props.food.id));
  }
  return (
    <div>
      <p>{props.food.name}</p>
      <img src={props.food.image} style={{ height: 100 + 'px' }} />
      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>
      <p>
        <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
      </p>
      <button onClick={() => deleteElement()}>Delete</button>
    </div>
  );
}

export default FoodBox;
