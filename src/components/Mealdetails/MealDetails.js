import React from 'react';

const MealDetails = (props) => {
    const { singleMeal } = props;

    if (singleMeal[0]) {
        return (
            <div className="card">
                <img src={singleMeal[0].strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <small>Meal id: {singleMeal[0].idMeal}</small>
                    <h4 className="card-title">{singleMeal[0].strMeal}</h4>
                    <small>Category: <b>{singleMeal[0].strCategory}</b></small>
                    <br />
                    <small>Area: <b>{singleMeal[0].strArea}</b></small>
                    <p className="card-text">Recipee: {singleMeal[0].strInstructions}</p>
                    <a target="blank" href={singleMeal[0].strYoutube} className="btn btn-primary">Tutorial</a>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h5 className="mt-2">Select an item to show details here.</h5>
            </div>
        );
    }
};

export default MealDetails;