import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simply a test',
      'https://realfood.tesco.com/media/images/1400x919-Arrabbiata-meatball-bake-aff103a1-f93b-4646-913b-8f5b01d213e3-0-1400x919.jpg'
    ),
    new Recipe(
      'a test recipe',
      'this is simply a test',
      'https://realfood.tesco.com/media/images/1400x919-Arrabbiata-meatball-bake-aff103a1-f93b-4646-913b-8f5b01d213e3-0-1400x919.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
