import { useEffect, useState } from "react";

const Meals = () => {
  interface Meal {
    idMeal: string;
    strMeal: string;
    // Add other properties you need
  }
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  return (
    <div className='w-1/2 mx-auto'>
      <h1 className='text-red-500 font-bold text-center'>
        Meals : {meals.length}
      </h1>
      <div className='grid grid-cols-2'>
        {meals.map((meal) => (
          <div className='flex flex-col border p-8 m-8'>
            <p className='' key={meal.idMeal}>
              {meal.strMeal}
            </p>

            <button className='bg-red-50 px-4 py-2 font-medium rounded-md w-2/3 mx-auto my-4 cursor-pointer'>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
