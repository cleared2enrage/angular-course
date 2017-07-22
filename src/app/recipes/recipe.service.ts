import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/400/200/')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}