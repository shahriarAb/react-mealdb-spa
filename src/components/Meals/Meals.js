import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import MealDetails from '../Mealdetails/MealDetails';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [singleMeal, setSingleMeal] = useState([]);
    const [searchMeals, setSearchMeals] = useState([]);

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setSearchMeals(data.meals);
            });
    }, []);

    const handleDetails = (meal) => {
        const newMeal = [meal];
        setSingleMeal(newMeal);
    }

    const handleSearch = (e) => {
        const searchedText = e.target.value;
        const matched = meals.filter(searchMeal => searchMeal.strMeal.toLowerCase().includes(searchedText.toLowerCase()));
        setSearchMeals(matched);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-5">
                    <div className="input-group ms-5 mt-3" style={{ maxWidth: '680px' }}>
                        <input
                            onChange={handleSearch}
                            type="text"
                            className="form-control"
                            placeholder="Search for your favourite food"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                    </div>
                    {
                        searchMeals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleDetails={handleDetails}
                        />)
                    }
                </div>
                <div className="col-lg-4 col-md-6 border-start mt-3">
                    <MealDetails singleMeal={singleMeal}></MealDetails>
                </div>
            </div>
        </div>
    );
};

export default Meals;