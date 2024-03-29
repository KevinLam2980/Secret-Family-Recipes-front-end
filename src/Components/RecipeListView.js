import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getRecipes} from '../store/actions/recipeActions'


import RecipeList from './RecipeList';
// import AddRecipeForm from './AddRecipeForm'
// import authenticate from './Authenticate'


const RecipeListView = (props) => {

    useEffect(() => {
        props.getRecipes()
    }, [])

return (
    <div>
        {(props.recipes != undefined && props.recipes.length > 0) ? (<div>{
            props.recipes.map(recipe => {
                return <p>{recipe.recipeName}</p>
            })
            } </div>) : <p>No recipes</p> }
        {/* // {props.recipes.map(recipe => { */}
        {/* return <p>{recipe.recipeName}</p> */}
        {/* })} */}
    </div>
)
}


const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        erros: state.errors
    }
}

export default connect(mapStateToProps, {getRecipes})(RecipeListView)
// export default RecipeListView