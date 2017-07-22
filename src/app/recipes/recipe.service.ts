import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/400/200/', [
            new Ingredient('Tomatoes', 4),
            new Ingredient('Spaghetti', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}