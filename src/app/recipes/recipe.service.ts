import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // recipes: Recipe[] = [
  //   new Recipe(
  //     'a test recipe one',
  //     'this is simply a test',
  //     'https://realfood.tesco.com/media/images/1400x919-Arrabbiata-meatball-bake-aff103a1-f93b-4646-913b-8f5b01d213e3-0-1400x919.jpg',
  //     [new Ingredient('meat', 1), new Ingredient('freanch fies', 20)]
  //   ),
  //   new Recipe(
  //     'a test recipe second',
  //     'this is simply a test',
  //     'https://realfood.tesco.com/media/images/1400x919-Arrabbiata-meatball-bake-aff103a1-f93b-4646-913b-8f5b01d213e3-0-1400x919.jpg',
  //     [new Ingredient('buns', 1), new Ingredient('meat', 20)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slServie.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
