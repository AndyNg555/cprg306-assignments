"use client";
import { useEffect, useState } from "react";

function fetchMealIdeas(ingredient) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then((data) => data.meals || []);
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl mb-4">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 inline-block mr-4" />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
