import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/400/200/food', [
            new Ingredient('Tomatoes', 4),
            new Ingredient('Spaghetti', 1)
        ]),
        new Recipe('A Second Recipe', 'This is simply a test', 'http://lorempixel.com/400/300/food', [
            new Ingredient('Apples', 4),
            new Ingredient('Oranges', 4)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes.slice();
        this.notifyRecipesChanged();
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
        this.notifyRecipesChanged();
    }

    updateRecipe(index: number, newRecipe: Recipe): void {
        this.recipes[index] = newRecipe;
        this.notifyRecipesChanged();
    }

    deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.notifyRecipesChanged();
    }

    private notifyRecipesChanged() {
        this.recipesChanged.next(this.getRecipes());
    }
}