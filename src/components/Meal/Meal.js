import React from 'react';

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <div className="mt-3 ms-5 border-bottom">
            <div className="card mb-3" style={{ maxWidth: '700px', maxHeight: '230px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p
                                className="card-text"
                                style={{ display: '-webkit-box', WebkitLineClamp: '5', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >{strInstructions}</p>
                            <button
                                className="btn btn-outline-info rounded-pill fw-bold"
                                onClick={() => props.handleDetails(props.meal)}
                            ><i className="fas fa-info-circle"></i> See Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;