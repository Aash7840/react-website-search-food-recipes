import React from "react";
const Recipes = (props) => {
    const {recipes} = props;
    return (
        <div className="row">
            <h4>Hey!! All Recipes </h4>
            {
                recipes.map(item => (
                    <div className="col-md-4" >
                        <div className="card">
                            <img src={item.recipe.image} className="img-fluid w-50 mx-auto rounded-circle" />
                            <div className="card-body">
                <h5>{item.recipe.label}</h5>
                            </div>
                                    <ul className="list-group">
                                        {
                                            item.recipe.ingredientLines.map(ingredient => (
                                            <li className="list-group-item">{ingredient}</li>
                                            ))
                                        }
                                    </ul>


                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default Recipes;