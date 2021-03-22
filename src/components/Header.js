import React from "react"
const Header = (props) => {
  return (
    <div className="jumbtron " >
      <div class="container">
        <h1 className="display-1">
          <span class="material-icons brand-icon">
            fastfood
                                  </span>
          fastfood Recipes</h1>
        <div class="input-group w-60 mx-auto">
          <input type="text" class="form-control" placeholder="Search Your Recipe.."
            value={props.search}
            onChange={props.onInputChange} />
          <button className="btn btn-dark" onClick={props.onSearchClick}>Search Recipe</button>
        </div>
      </div>
    </div>
  )
}
export default Header;                    