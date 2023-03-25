import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";

const initalState = {
    ingredients = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];}

export function shoppingListReducer (state = initalState, action: Action) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return {
                ...state,
                ingredients: [...state.ingredients, action]
            }
    }
}